# Documentação da API - Natal Dolce

## 📌 Overview

API REST para gerenciar pedidos (leads) da loja Natal Dolce. Salva informações do cliente e itens do carrinho no MySQL.

---

## 🔌 Endpoints

### `POST /api/lead.php`

Salva um novo pedido com dados do cliente e itens.

**Headers:**
```
Content-Type: application/json
```

**Body (exemplo):**
```json
{
  "cliente": {
    "nome": "João Silva",
    "cpf": "123.456.789-10",
    "telefone": "(85) 99999-9999",
    "cep": "60000-000",
    "cidade": "Fortaleza",
    "bairro": "Centro",
    "rua": "Rua A",
    "numero": "123",
    "complemento": "Apto 45",
    "observacoes": "Entregar após 18h"
  },
  "cart": [
    {
      "id": 5,
      "name": "Bolo Merengue de Natal",
      "variantLabel": "10 fatias",
      "price": 169.00,
      "quantity": 1
    },
    {
      "id": 8,
      "name": "Uvas Divinas",
      "price": 49.90,
      "quantity": 2
    }
  ],
  "total": 288.80
}
```

**Response (sucesso - 200):**
```json
{
  "ok": true,
  "lead_id": 42
}
```

**Response (erro - 400/422):**
```json
{
  "ok": false,
  "error": "Campos obrigatórios faltando"
}
```

---

## ✅ Validações

| Campo | Tipo | Obrigatório | Regra |
|-------|------|-------------|-------|
| nome | string | Sim | Não vazio |
| cpf | string | Sim | 11 dígitos |
| telefone | string | Sim | 10 ou 11 dígitos |
| cep | string | Sim | 8 dígitos |
| cidade | string | Sim | Não vazio |
| bairro | string | Sim | Não vazio |
| rua | string | Sim | Não vazio |
| numero | string | Sim | Não vazio |
| complemento | string | Não | Qualquer |
| observacoes | string | Não | Qualquer |
| cart | array | Sim | Mínimo 1 item |

---

## 🗄️ Banco de Dados

### Tabela: `leads`
```sql
CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  cpf VARCHAR(20) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  cep VARCHAR(20) NOT NULL,
  cidade VARCHAR(120) NOT NULL,
  bairro VARCHAR(120) NOT NULL,
  rua VARCHAR(150) NOT NULL,
  numero VARCHAR(20) NOT NULL,
  complemento VARCHAR(120) DEFAULT NULL,
  observacoes TEXT,
  total DECIMAL(10,2) DEFAULT 0,
  created_at DATETIME NOT NULL
);
```

### Tabela: `lead_items`
```sql
CREATE TABLE lead_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  lead_id INT NOT NULL,
  product_name VARCHAR(200) NOT NULL,
  variant_label VARCHAR(120) DEFAULT NULL,
  price DECIMAL(10,2) DEFAULT 0,
  quantity INT DEFAULT 1,
  FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
);
```

---

## 🚀 Exemplos de Uso

### JavaScript (Frontend)
```javascript
const payload = {
  cliente: {
    nome: "Maria",
    cpf: "111.222.333-44",
    telefone: "(85) 98765-4321",
    cep: "60000-000",
    cidade: "Fortaleza",
    bairro: "Meireles",
    rua: "Av. Paulista",
    numero: "1000",
    complemento: "Sala 20",
    observacoes: "Sem glúten"
  },
  cart: [
    { id: 5, name: "Bolo", variantLabel: "10 fatias", price: 169.00, quantity: 1 }
  ],
  total: 169.00
};

fetch('/api/lead.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
  if (data.ok) {
    console.log('Lead salvo:', data.lead_id);
  } else {
    console.error('Erro:', data.error);
  }
});
```

### cURL (CLI)
```bash
curl -X POST https://nataldolce.com/api/lead.php \
  -H "Content-Type: application/json" \
  -d '{
    "cliente": {"nome": "João", "cpf": "123.456.789-10", "telefone": "(85) 99999-9999", "cep": "60000-000", "cidade": "Fortaleza", "bairro": "Centro", "rua": "Rua A", "numero": "123"},
    "cart": [{"id": 5, "name": "Bolo", "price": 169.00, "quantity": 1}],
    "total": 169.00
  }'
```

---

## 🔐 Segurança

- ✅ Sanitização com `filter_var()` e regex
- ✅ Prepared statements (PDO) contra SQL Injection
- ✅ Validações de tipo e tamanho
- ✅ Transações MySQL (rollback em erro)
- ✅ HTTPS recomendado

---

## 📋 Status Codes

| Code | Significado |
|------|-------------|
| 200 | ✅ Sucesso |
| 400 | ❌ JSON inválido |
| 405 | ❌ Método não permitido (não POST) |
| 422 | ❌ Validação falhou |
| 500 | ❌ Erro do servidor (BD, etc) |

---

## 🔄 Integração com Frontend

O `script.js` já integra automaticamente:

```javascript
fetch('/api/lead.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
}).catch(err => console.warn('Falha ao salvar lead no backend', err));
```

Fallback para WhatsApp se falhar:
```javascript
const phone = "5585988884717";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
window.open(url, '_blank');
```

---

**Última atualização:** Dezembro 2025  
**Versão:** 1.0
