# INDEX.md - Mapa do Projeto

Guia rapido para humanos e para o GitHub Copilot.

## Estrutura

```txt
copilot-example/
├── COPILOT.md                           # Regras do projeto para manter alinhamento
├── COPILOT.local.md                     # Preferencias locais (gitignored)
├── .gitignore
├── .github/
│   ├── copilot-instructions.md          # Instrucoes globais lidas pelo Copilot
│   ├── instructions/
│   │   └── typescript.instructions.md   # Regras por tipo de arquivo (glob)
│   └── prompts/
│       └── feature-implementation.prompt.md
├── specs/
│   └── feature.md                       # Contrato da feature antes do codigo
├── tests/
│   └── basic.spec.js                    # Smoke tests de IA (GitHub Models)
└── INDEX.md                             # Este arquivo
```

## Decisoes principais

- Especificacao antes de implementacao em `specs/`.
- Regras globais no `.github/copilot-instructions.md`.
- Regras especificas por linguagem em `.github/instructions/`.
- Prompt reutilizavel em `.github/prompts/` para padronizar pedido de feature.

## Como usar

1. Abra o workspace no VS Code.
2. Ajuste as regras em `.github/copilot-instructions.md`.
3. Escreva a feature em `specs/feature.md`.
4. Rode o prompt de implementacao com base na spec.
5. Valide com os testes em `tests/basic.spec.js`.

## Setup rapido para teste de IA

```bash
npm install openai
export GITHUB_TOKEN=seu_token
export MODEL=gpt-4o-mini
node --test tests/basic.spec.js
```
