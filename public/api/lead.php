<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . ($_SERVER['HTTP_ORIGIN'] ?? '*'));
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }

require __DIR__ . '/db.php';

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'JSON inválido']);
    exit;
}

$cliente = $data['cliente'] ?? [];
$cart = $data['cart'] ?? [];
$total = $data['total'] ?? 0;

$nome = trim($cliente['nome'] ?? '');
$cpf = trim($cliente['cpf'] ?? '');
$telefone = preg_replace('/\D+/', '', $cliente['telefone'] ?? '');
$cep = trim($cliente['cep'] ?? '');
$cidade = trim($cliente['cidade'] ?? '');
$bairro = trim($cliente['bairro'] ?? '');
$rua = trim($cliente['rua'] ?? '');
$numero = trim($cliente['numero'] ?? '');
$complemento = trim($cliente['complemento'] ?? '');
$observacoes = trim($cliente['observacoes'] ?? '');

if ($nome === '' || $cpf === '' || !($telefone && (strlen($telefone) === 10 || strlen($telefone) === 11)) || $cep === '' || $cidade === '' || $bairro === '' || $rua === '' || $numero === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Campos obrigatórios faltando']);
    exit;
}

try {
    $pdo->beginTransaction();
    $stmt = $pdo->prepare("INSERT INTO leads (nome, cpf, telefone, cep, cidade, bairro, rua, numero, complemento, observacoes, total, created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,NOW())");
    $stmt->execute([$nome, $cpf, $telefone, $cep, $cidade, $bairro, $rua, $numero, $complemento, $observacoes, $total]);
    $leadId = $pdo->lastInsertId();

    if (is_array($cart)) {
        $itemStmt = $pdo->prepare("INSERT INTO lead_items (lead_id, product_name, variant_label, price, quantity) VALUES (?,?,?,?,?)");
        foreach ($cart as $item) {
            $pname = $item['name'] ?? '';
            $variant = $item['variantLabel'] ?? '';
            $price = $item['price'] ?? 0;
            $qty = $item['quantity'] ?? 1;
            $itemStmt->execute([$leadId, $pname, $variant, $price, $qty]);
        }
    }
    $pdo->commit();
    echo json_encode(['ok' => true, 'lead_id' => $leadId]);
} catch (Throwable $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao salvar lead', 'detail' => $e->getMessage()]);
}
