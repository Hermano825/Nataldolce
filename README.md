# 🎄 Natal Dolce - Loja de Doces Artesanais

Plataforma e-commerce para venda de doces, bolos e lembrancinhas natalinas com checkout via WhatsApp e backend MySQL.

---

## 📁 Estrutura de Pastas

```
PROJETO NATAL DOLCE/
├── public/                          # 🌐 Arquivos para deploy (→ public_html/)
│   ├── index.html                   # Home page
│   ├── produto.html                 # Página de detalhe do produto
│   ├── dashboard.html               # Dashboard administrativo
│   ├── assets/
│   │   ├── css/style.css
│   │   ├── js/script.js
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── banners/banner12.webp
│   │   │   └── produtos/
│   ├── api/
│   │   ├── lead.php                 # Endpoint de pedidos
│   │   ├── db.php                   # Conexão PDO
│   │   ├── config.php               # Credenciais (NÃO comitar)
│   │   └── schema.sql               # Estrutura BD
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
│
├── src/                             # 💻 Código-fonte (desenvolvimento)
│   ├── data/
│   │   ├── orders.json              # Cache de dados (gerado)
│   │   └── orders.js                # Fallback data
│   └── frontend/
│       └── utils/
│           └── validators.js        # (futuro)
│
├── docs/                            # 📚 Documentação
│   ├── DEPLOY.md                    # Guia de deploy Hostinger
│   ├── API.md                       # Documentação de endpoints
│   └── SETUP.md                     # Setup local
│
├── tools/                           # 🔧 Scripts utilitários
│   ├── convert_sql_to_json.ps1      # Converter SQL → JSON
│   └── convert_sql_to_json.js       # (alternativa Node)
│
├── .gitignore                       # Arquivos a ignorar (config, env)
├── README.md                        # Este arquivo
│
└── (antigos - arquivos raiz)
    ├── api/                         # Movido para public/api/
    ├── assets/                      # Movido para public/assets/
    ├── index.html                   # Movido para public/
    └── ...
```

---

## 🚀 Quick Start (Desenvolvimento Local)

### Pré-requisitos
- Python 3+ ou Node.js (para servidor local)
- Visual Studio Code (recomendado)
- Navegador moderno

### Executar localmente

**Opção 1: Python**
```bash
cd "PROJETO NATAL DOLCE/public"
python -m http.server 8000
# Acesse http://localhost:8000
```

**Opção 2: Node.js + http-server**
```bash
npm install -g http-server
cd "PROJETO NATAL DOLCE/public"
http-server -p 8000
# Acesse http://localhost:8000
```

**Opção 3: VS Code Live Server**
- Instale extensão "Live Server"
- Clique em "Go Live" no `public/index.html`

---

## 📦 Funcionalidades

### ✅ Frontend
- Listagem de produtos com filtros por categoria
- Carrinho de compras (localStorage)
- Máscaras de input (CPF, CEP, Telefone)
- Modal de detalhes do produto
- Checkout com dados do cliente
- Integração WhatsApp como fallback
- Dashboard administrativo (gráficos)
- Responsivo (mobile-first)

### ✅ Backend
- API REST `POST /api/lead.php`
- Salvamento de pedidos em MySQL
- Validação de CPF e telefone
- Sanitização contra SQL Injection
- Transações MySQL

### ✅ SEO
- Meta tags (title, description, keywords)
- Open Graph / Twitter Card
- JSON-LD Schema.org
- sitemap.xml
- robots.txt
- Slug-based URLs

---

## 🔧 Configuração

### 1. **Variáveis de ambiente** (API)
Edite `public/api/config.php`:
```php
'db_host' => 'localhost',
'db_name' => 'nataldolce',
'db_user' => 'seu_usuario',
'db_pass' => 'sua_senha',
```

### 2. **WhatsApp fallback**
Edite `public/assets/js/script.js` (linha ~1040):
```javascript
const phone = "5585988884717";  // Seu número WhatsApp
```

### 3. **Meta Pixel (Facebook Ads)**
Edite `public/index.html`:
```javascript
fbq('init', '1903050763983703');  // Seu Pixel ID
```

---

## 📊 Banco de Dados

### Criar tabelas
```bash
# Via phpMyAdmin: import public/api/schema.sql

# Ou manualmente:
mysql -h localhost -u usuario -p nataldolce < public/api/schema.sql
```

### Verificar dados salvos
```sql
SELECT * FROM leads;
SELECT * FROM lead_items WHERE lead_id = 1;
```

---

## 🌐 Deploy (Hostinger)

Veja [docs/DEPLOY.md](docs/DEPLOY.md) para passo a passo completo.

**Resumo:**
1. Edite `public/api/config.php` com credenciais Hostinger
2. Importe `public/api/schema.sql` via phpMyAdmin
3. Faça upload de `public/` para `/public_html/`
4. Teste em `https://nataldolce.com`

---

## 🔐 Segurança

- ✅ Config sensível em `.gitignore` (não comitar)
- ✅ Sanitização de inputs (filter_var, preg_replace)
- ✅ Prepared statements (PDO) contra SQL Injection
- ✅ HTTPS (Let's Encrypt no Hostinger)
- ✅ Proteção de config.php via .htaccess

---

## 📖 Documentação

- **[DEPLOY.md](docs/DEPLOY.md)** - Deploy no Hostinger
- **[API.md](docs/API.md)** - Documentação de endpoints
- **[SETUP.md](docs/SETUP.md)** - Setup local (futura)

---

## 🐛 Troubleshooting

### Imagens não aparecem
- Confirme upload de `public/assets/images/`
- Verifique caminhos relativos: `./assets/images/...`
- Teste URL direta no navegador

### Formulário não salva
- Verifique console: DevTools → Network → lead.php
- Confirme `config.php` com credenciais corretas
- Teste conexão MySQL manualmente

### Dados não aparecem no dashboard
- Verifique `../src/data/orders.json` existe
- Abra console: DevTools → Console (erros?)
- Teste fetch direto: `fetch('../src/data/orders.json')`

---

## 📞 Contato

- **Site:** https://nataldolce.com
- **WhatsApp:** (85) 9999-9999
- **Email:** contato@nataldolce.com

---

## 📝 Changelog

### v1.0 (Dezembro 2025)
- ✅ Estrutura de pastas reorganizada
- ✅ Integração backend completa
- ✅ Campo de telefone no checkout
- ✅ Documentação centralizada

---

**Desenvolvido com ❤️ para Dolce Divino**
