---
applyTo: "**/*.{ts,tsx}"
---

Regras para arquivos TypeScript neste projeto:

- Use tipos explicitos em APIs publicas
- Evite `any`; quando inevitavel, documente o motivo
- Prefira funcoes puras para regras de negocio
- Centralize tipos compartilhados em modulos dedicados
- Escreva testes para caminhos felizes e erros esperados
