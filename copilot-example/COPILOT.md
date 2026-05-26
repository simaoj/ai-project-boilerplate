# COPILOT.md

Guia de alinhamento do projeto para uso com GitHub Copilot.

## Objetivo

Boilerplate para projetos com fluxo assistido por IA no VS Code.

## Regras de comportamento

- Priorize mudancas pequenas e focadas no pedido.
- Evite criar arquivos desnecessarios.
- Prefira editar codigo existente quando possivel.
- Nao implemente funcionalidades fora do escopo pedido.
- Mantenha respostas diretas e acionaveis.

## Convencoes de commit

- Use verbo no imperativo: add, fix, remove, update
- Linha de titulo curta e objetiva
- Corpo apenas quando a motivacao nao for obvia

## Stack sugerida

- Runtime: Node.js
- Testes: node --test
- Linguagem: JavaScript/TypeScript

## Convencoes de pastas

- `specs/`: especificacoes de funcionalidade
- `tests/`: testes automatizados
- `.github/copilot-instructions.md`: instrucoes globais do Copilot
- `.github/instructions/`: instrucoes por padrao de arquivo
- `.github/prompts/`: prompts reutilizaveis

## Evite

- Comentarios redundantes no codigo
- Mock excessivo de internals quando um teste de caixa-preta resolve
- Compatibilidade retroativa sem necessidade clara
