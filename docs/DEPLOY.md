# Guia de Deploy - Natal Dolce (Hostinger)

## 📋 Requisitos
- Conta ativa no Hostinger
- Acesso ao hPanel (painel de controle)
- FTP ou File Manager do Hostinger
- PHP 8.0+ e MySQL/MariaDB

---

## 🚀 Passo a Passo de Deploy

### 1. **Preparar arquivos localmente**

A estrutura de deploy é:
```
public/                    ← Tudo que vai para public_html/
├── index.html
├── produto.html
├── dashboard.html
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
├── api/
│   ├── lead.php
│   ├── config.php          ← EDITADO com credenciais
│   ├── db.php
│   └── schema.sql
├── sitemap.xml
├── robots.txt
└── manifest.json
```

### 2. **Configurar credenciais de banco de dados**

**Arquivo:** `public/api/config.php`

Edite com suas credenciais Hostinger:
```php
<?php
return [
    'db_host' => 'seu_host',           // Ex: localhost ou mysql.hostingerserver.com
    'db_name' => 'sua_database',       // Ex: u123456_dolce
    'db_user' => 'seu_usuario',        // Ex: u123456_user
    'db_pass' => 'sua_senha',          // Senha do MySQL
    'db_charset' => 'utf8mb4',
];
```

> ⚠️ **IMPORTANTE:** Nunca faça commit deste arquivo no Git!

### 3. **Criar banco de dados no Hostinger**

1. Acesse **hPanel** → **MySQL Databases**
2. Crie uma nova database (ex: `u277735993_dolceclientes`)
3. Crie um usuário MySQL com senha forte
4. Anote as credenciais

### 4. **Importar schema SQL**

1. Acesse **hPanel** → **phpMyAdmin**
2. Selecione o database criado
3. Clique em **Import**
4. Faça upload do arquivo `public/api/schema.sql`
5. Clique em **Import**

Ou execute via SQL direto:
```sql
CREATE TABLE IF NOT EXISTS `leads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(150) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `cep` VARCHAR(20) NOT NULL,
  `cidade` VARCHAR(120) NOT NULL,
  `bairro` VARCHAR(120) NOT NULL,
  `rua` VARCHAR(150) NOT NULL,
  `numero` VARCHAR(20) NOT NULL,
  `complemento` VARCHAR(120) DEFAULT NULL,
  `observacoes` TEXT,
  `total` DECIMAL(10,2) DEFAULT 0,
  `created_at` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `lead_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `lead_id` INT NOT NULL,
  `product_name` VARCHAR(200) NOT NULL,
  `variant_label` VARCHAR(120) DEFAULT NULL,
  `price` DECIMAL(10,2) DEFAULT 0,
  `quantity` INT DEFAULT 1,
  CONSTRAINT fk_lead_items_lead FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 5. **Fazer upload via FTP/File Manager**

**Opção A: File Manager (mais fácil)**
1. hPanel → File Manager
2. Acesse `/public_html/`
3. Faça upload de todos os arquivos de `public/`

**Opção B: FTP (recomendado para projetos grandes)**
```
FTP Host: seu-ftp-host
Usuario: seu-usuario-ftp
Senha: sua-senha-ftp
Diretório: /public_html/
```

### 6. **Configurar .htaccess (opcional)**

Se quiser URLs amigáveis, crie `.htaccess` em `public_html/`:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # Remove .html da URL
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^([a-zA-Z0-9-]*?)/?$ $1.html [L]
</IfModule>
```

### 7. **Testar a aplicação**

1. Acesse `https://nataldolce.com/`
2. Verifique se as imagens carregam
3. Teste o checkout:
   - Preencha formulário
   - Clique "Finalizar Compra"
   - Verifique se o lead foi salvo: **phpMyAdmin** → Tabela `leads`

---

## 🔒 Segurança

### Proteger `api/config.php`
Adicione ao `.htaccess`:
```apache
<Files "config.php">
    Order Allow,Deny
    Deny from all
</Files>
```

### Validar entrada de dados
O `api/lead.php` já sanitiza dados com:
- `filter_var()` para strings
- `preg_replace('/\D+/')` para números
- Validações de campos obrigatórios

### HTTPS/SSL
Hostinger fornece Let's Encrypt gratuitamente. Ative em **hPanel** → **SSL Certificates**.

---

## 📊 Verificar dados salvos

**Via phpMyAdmin:**
1. hPanel → phpMyAdmin
2. Database `nataldolce`
3. Tabela `leads` → Ver registros

**Via Dashboard:**
1. Acesse `https://nataldolce.com/dashboard.html`
2. Dashboard carrega dados de `../src/data/orders.json` (fallback)
3. Para dados live, integre API futura

---

## 🔄 Workflow de Atualização

Após mudanças locais:

```bash
# 1. Copiar públicos para public/
cp script.js public/assets/js/
cp style.css public/assets/css/
cp *.html public/

# 2. Fazer upload via FTP/File Manager
# 3. Testar em produção
```

---

## 🆘 Troubleshooting

### "Erro ao conectar no banco"
- Verifique credenciais em `config.php`
- Confirme database foi criado em phpMyAdmin
- Teste conexão: `mysql -h HOST -u USER -p`

### "Formulário não salva"
- Verifique `public/api/lead.php` recebe POST
- Chec browser DevTools → Network → lead.php (status 200?)
- Verifique permissões do arquivo (644)

### "Imagens não aparecem"
- Confirme upload de `public/assets/images/`
- Verifique nomes de arquivo (case-sensitive em Linux)
- Teste URL direta: `https://nataldolce.com/assets/images/logo.png`

---

## 📝 Arquivo de log

Crie `public/api/log.php` para debug:
```php
<?php
$logFile = __DIR__ . '/debug.log';
file_put_contents($logFile, date('Y-m-d H:i:s') . " - " . $_SERVER['REQUEST_METHOD'] . " " . $_SERVER['REQUEST_URI'] . "\n", FILE_APPEND);
?>
```

---

**Última atualização:** Dezembro 2025  
**Versão:** 1.0
