$ErrorActionPreference = 'Stop'

function Get-InsertData($sqlContent, $tableName) {
    $pattern = ('INSERT INTO\s+`?{0}`?\s*\(([^)]+)\)\s*VALUES\s*([\s\S]*?);' -f $tableName)
    $m = [regex]::Match($sqlContent, $pattern)
    if (-not $m.Success) { return $null }
    $cols = $m.Groups[1].Value.Split(',') | ForEach-Object { $_.Trim().Replace('`','') }
    $valuesPart = $m.Groups[2].Value.Trim()

    $groups = @()
    $buf = ''
    $depth = 0
    $inString = $false
    for ($i=0; $i -lt $valuesPart.Length; $i++) {
        $ch = $valuesPart[$i]
        if ($ch -eq "'" -and ($i -eq 0 -or $valuesPart[$i-1] -ne '\\')) { $inString = -not $inString }
        if (-not $inString) {
            if ($ch -eq '(') { $depth++ }
            elseif ($ch -eq ')') { $depth-- }
            elseif ($ch -eq ',' -and $depth -eq 0) {
                $groups += $buf.Trim()
                $buf = ''
                continue
            }
        }
        $buf += $ch
    }
    if ($buf.Trim().Length -gt 0) { $groups += $buf.Trim() }
    return @{ Columns = $cols; Groups = $groups }
}

function ParseGroupToRow($group, $cols) {
    $s = $group.Trim()
    if ($s.StartsWith('(') -and $s.EndsWith(')')) { $s = $s.Substring(1, $s.Length-2) }
    $vals = @()
    $buf = ''
    $inString = $false
    for ($i=0; $i -lt $s.Length; $i++) {
        $ch = $s[$i]
        if ($ch -eq "'" -and ($i -eq 0 -or $s[$i-1] -ne '\\')) { $inString = -not $inString }
        if (-not $inString -and $ch -eq ',') {
            $vals += $buf.Trim()
            $buf = ''
            continue
        }
        $buf += $ch
    }
    if ($buf.Trim().Length -gt 0) { $vals += $buf.Trim() }

    $row = @{}
    for ($i=0; $i -lt $cols.Count; $i++) {
        $c = $cols[$i]
        $v = if ($i -lt $vals.Count) { $vals[$i] } else { $null }
        if ($null -eq $v) { $row[$c] = $null; continue }
        if ($v.ToUpper() -eq 'NULL') { $row[$c] = $null; continue }
        if ($v.StartsWith("'") -and $v.EndsWith("'")) {
            $v = $v.Substring(1, $v.Length-2).Replace("\\'", "'")
            $row[$c] = $v
        } elseif ($v -match '^[0-9]+\.[0-9]+$') {
            $row[$c] = [double]::Parse($v)
        } elseif ($v -match '^[0-9]+$') {
            $row[$c] = [int]::Parse($v)
        } else {
            $row[$c] = $v
        }
    }
    return $row
}

$root = Split-Path -Parent $PSScriptRoot
$leadsPath = Join-Path $root 'leads (1).sql'
$itemsPath = Join-Path $root 'lead_items.sql'
if (-not (Test-Path $leadsPath) -or -not (Test-Path $itemsPath)) {
    Write-Error 'SQL files not found'
}

$leadsSql = Get-Content -Raw -Path $leadsPath
$itemsSql = Get-Content -Raw -Path $itemsPath

$leadsExt = Get-InsertData $leadsSql 'leads'
$itemsExt = Get-InsertData $itemsSql 'lead_items'

$leads = @()
foreach ($g in $leadsExt.Groups) { $leads += (ParseGroupToRow $g $leadsExt.Columns) }
$items = @()
foreach ($g in $itemsExt.Groups) { $items += (ParseGroupToRow $g $itemsExt.Columns) }

$itemsByLead = @{}
foreach ($it in $items) {
    $lid = $it.lead_id
    if (-not $itemsByLead.ContainsKey($lid)) { $itemsByLead[$lid] = @() }
    $itemsByLead[$lid] += @{ name = $it.product_name; qty = ($it.quantity -as [int]); price = ($it.price -as [double]); variant = ($it.variant_label) }
}

$orders = @()
foreach ($ld in $leads) {
    $products = if ($itemsByLead.ContainsKey($ld.id)) { $itemsByLead[$ld.id] } else { @() }
    $address = ($ld.rua + ', ' + $ld.numero)
    $addressFull = ($address + ', ' + $ld.bairro + ', ' + $ld.cidade)
    $sum = 0.0
    foreach ($p in $products) { $sum += (($p.price) * ([double]($p.qty))) }
    $totVal = if ($ld.total) { [double]$ld.total } else { $sum }
    $notesVal = if ($ld.observacoes) { $ld.observacoes } else { '' }
    $orders += [ordered]@{
        id = ('PED' + ($ld.id.ToString().PadLeft(3,'0')))
        clientName = $ld.nome
        clientCPF = $ld.cpf
        clientPhone = ''
        products = $products
        address = $addressFull
        cep = $ld.cep
        total = $totVal
        date = $ld.created_at
        status = 'confirmed'
        notes = $notesVal
    }
}

$outPath = Join-Path $root 'orders.json'
$payload = @{ orders = $orders } | ConvertTo-Json -Depth 6
Set-Content -Path $outPath -Value $payload -Encoding UTF8
Write-Host "orders.json written:" $outPath "orders:" $orders.Count
