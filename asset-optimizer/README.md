# Asset Optimizer Agent

Agente autônomo para otimização de imagens na Veloxia Platform.

## Funcionalidades

✅ **Compressão Inteligente**: Converte PNG/JPG para WebP (70-90% menor)  
✅ **Backup Automático**: Mantém originais em `/backup`  
✅ **Atualização de HTML**: Substitui referências automaticamente  
✅ **Relatório Detalhado**: Estatísticas de economia de espaço  
✅ **Scan Recursivo**: Processa todos os assets do projeto  

## Instalação

```bash
cd agents/asset-optimizer
npm install
```

## Uso

### Otimizar projeto inteiro
```bash
node index.js ../../clients/dolce-divino/frontend
```

### Com parâmetros customizados
```bash
# Sintaxe: node index.js <targetDir> <quality> <backup> <updateHTML>
node index.js ./frontend 85 true true
```

### Via script do cliente
```bash
cd clients/dolce-divino
npm run optimize-images
```

## Configuração

| Parâmetro | Padrão | Descrição |
|-----------|--------|-----------|
| `targetDir` | `./frontend` | Diretório de assets |
| `quality` | `85` | Qualidade WebP (0-100) |
| `backup` | `true` | Fazer backup dos originais |
| `updateHTML` | `true` | Atualizar referências HTML |

## Exemplo de Output

```
🚀 Asset Optimizer Agent - Veloxia Platform

📦 Scanning for images...
📦 Found 3 images to optimize

✅ Optimized: morango divino0.png → morango divino0.webp (3.2 MB → 450 KB, -86%)
✅ Optimized: morango divino1.png → morango divino1.webp (2.8 MB → 380 KB, -86.4%)
✅ Optimized: morango divino2.png → morango divino2.webp (4.1 MB → 520 KB, -87.3%)

📦 Updated: index.html

============================================================
📊 OPTIMIZATION REPORT
============================================================

Summary:
  Processed: 3 files
  Skipped: 0 files
  Errors: 0 files

Size Reduction:
  Original: 10.1 MB
  Optimized: 1.35 MB
  Saved: 8.75 MB (86.6%)

Files:
  1. morango divino0.png → morango divino0.webp (-86%)
  2. morango divino1.png → morango divino1.webp (-86.4%)
  3. morango divino2.png → morango divino2.webp (-87.3%)

============================================================

✅ Optimization complete!
```

## Integração com Workflows

### Automático no deploy
Adicione ao `package.json`:
```json
{
  "scripts": {
    "predeploy": "node ../../agents/asset-optimizer",
    "deploy": "powershell -File upload-hostinger.ps1"
  }
}
```

### Via n8n
Webhook → Run Agent → Notify Slack
```javascript
const agent = new AssetOptimizerAgent({
  targetDir: '/path/to/client/frontend'
});
await agent.run();
```

## Roadmap

- [ ] Suporte para SVG optimization
- [ ] Lazy loading automático
- [ ] Responsive images (srcset)
- [ ] CDN upload integration
- [ ] Smart crop/resize

## Filosofia Veloxia

**Automatize o repetitivo, reutilize o comprovado.**

Este agente economiza tempo de desenvolvimento e melhora performance automaticamente em todos os sites Veloxia.
