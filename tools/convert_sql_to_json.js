const fs = require('fs');
const path = require('path');

function extractInsert(sql, table) {
  const regex = new RegExp("INSERT INTO `" + table + "` \\(([^)]+)\\) VALUES\\s*([\\s\\S]*?);", 'm');
  const m = sql.match(regex);
  if (!m) return null;
  const cols = m[1].split(',').map(c => c.trim().replace(/`/g, ''));
  const valuesPart = m[2].trim();
  const groups = [];
  let buf = '';
  let depth = 0;
  let inString = false;
  let prev = '';
  for (let i = 0; i < valuesPart.length; i++) {
    const ch = valuesPart[i];
    if (ch === "'" && prev !== '\\') inString = !inString;
    if (!inString) {
      if (ch === '(') depth++;
      if (ch === ')') depth--;
      if (ch === ',' && depth === 0) {
        groups.push(buf.trim());
        buf = '';
        prev = ch;
        continue;
      }
    }
    buf += ch;
    prev = ch;
  }
  if (buf.trim()) groups.push(buf.trim());
  return { cols, groups };
}

function parseGroupToRow(group, cols) {
  let s = group.trim();
  if (s.startsWith('(') && s.endsWith(')')) s = s.slice(1, -1);
  const vals = [];
  let buf = '';
  let inString = false;
  let prev = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "'" && prev !== '\\') inString = !inString;
    if (!inString && ch === ',') {
      vals.push(buf.trim());
      buf = '';
      prev = ch;
      continue;
    }
    buf += ch;
    prev = ch;
  }
  if (buf.trim()) vals.push(buf.trim());
  const row = {};
  cols.forEach((c, idx) => {
    let v = vals[idx] || null;
    if (v === null) { row[c] = null; return; }
    if (v.toUpperCase() === 'NULL') { row[c] = null; return; }
    if (v.startsWith("'") && v.endsWith("'")) {
      v = v.slice(1, -1).replace(/\\'/g, "'");
      row[c] = v;
    } else if (/^\d+\.\d+$/.test(v)) {
      row[c] = parseFloat(v);
    } else if (/^\d+$/.test(v)) {
      row[c] = parseInt(v, 10);
    } else {
      row[c] = v;
    }
  });
  return row;
}

function loadTable(sqlPath, table) {
  const sql = fs.readFileSync(sqlPath, 'utf8');
  const ext = extractInsert(sql, table);
  if (!ext) return [];
  const { cols, groups } = ext;
  return groups.map(g => parseGroupToRow(g, cols));
}

function main() {
  const root = path.resolve(__dirname, '..');
  const leadsPath = path.join(root, 'leads (1).sql');
  const itemsPath = path.join(root, 'lead_items.sql');
  if (!fs.existsSync(leadsPath) || !fs.existsSync(itemsPath)) {
    console.error('SQL files not found');
    process.exit(1);
  }
  const leads = loadTable(leadsPath, 'leads');
  const items = loadTable(itemsPath, 'lead_items');
  const itemsByLead = new Map();
  items.forEach(it => {
    const arr = itemsByLead.get(it.lead_id) || [];
    arr.push({ name: it.product_name, qty: it.quantity || 1, price: it.price || 0, variant: it.variant_label || '' });
    itemsByLead.set(it.lead_id, arr);
  });

  const orders = leads.map(ld => {
    const products = itemsByLead.get(ld.id) || [];
    const address = [ld.rua, ld.numero].filter(Boolean).join(', ');
    const addressFull = `${address}, ${ld.bairro}, ${ld.cidade}`;
    return {
      id: `PED${String(ld.id).padStart(3,'0')}`,
      clientName: ld.nome,
      clientCPF: ld.cpf,
      clientPhone: '',
      products,
      address: addressFull,
      cep: ld.cep,
      total: ld.total || products.reduce((s,p)=>s+p.price*(p.qty||1),0),
      date: ld.created_at,
      status: 'confirmed',
      notes: ld.observacoes || ''
    };
  });

  const outPath = path.join(root, 'orders.json');
  fs.writeFileSync(outPath, JSON.stringify({ orders }, null, 2), 'utf8');
  console.log('orders.json written:', outPath, 'orders:', orders.length);
}

main();
