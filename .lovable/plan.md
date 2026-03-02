

## Atualização Completa do Calendário Mahaflow 2026

### Resumo das Mudanças

Atualizar 6 cards de atividades com novos dados, badges personalizados, múltiplas opções de preço e alertas de urgência.

### 1. Expandir interface `Programacao` em `programacao2026.ts`

Adicionar campos opcionais para suportar os novos requisitos:

```text
badges?: string[]           -- badges customizados ("Feriado", "3 dias", etc.)
opcoes?: Array<{            -- múltiplas opções de preço
  nome: string              -- ex: "3 dias com hospedagem", "Grupo VIP"
  valor: number
  valorFormatado: string
  destaque?: string         -- ex: "Reserve até 15/03"
}>
```

### 2. Atualizar dados das experiências

**Dia Namastê** (id: `dia-namaste`)
- Nome: "Dia Namastê (Especial Dia das Mulheres)"
- Data: 08/03 (dataISO: 2026-03-08)
- Descrição: "Manhã de bem-estar, yoga e conexão"
- Badges: `["Especial Dia das Mulheres 💜"]`
- Duas opções de preço: R$ 67,00 (padrão) e R$ 40,00 (Grupo VIP)
- Manter valor principal como 67

**Pedra Bonita** (id: `pedra-bonita-tijuca`)
- Atualizar descrição: "Trilha + Circuito de Cachoeiras (Cascatinha Taunay)"

**Travessia Joatinga** (id: `travessia-joatinga`)
- Badges: `["3 dias"]`
- Dados já corretos (27-29/03, R$ 1.850)

**Semana Santa** (id: `semana-santa-macacu`)
- Renomear: "Lumiar / São Pedro da Serra"
- Slug: manter ou atualizar para `semana-santa-lumiar`
- Data: 03 a 05 de abril (dataISO: 2026-04-03)
- Remover `emBreve: true`, adicionar dados concretos
- Badges: `["Semana Santa 🌸"]`
- Descrição: "Várias experiências + cachoeiras + estufa de morangos + centrinho de Lumiar"
- Duas opções:
  - "3 dias com hospedagem": R$ 1.050,00 com destaque "Reserve até 15/03 ⏰"
  - "Bate e volta (03/04)": R$ 496,00
- Valor principal: 1050

**Rafting em Sapucaia** (id: `rafting-sapucaia`)
- Data: 01 de maio (dataISO: 2026-05-01)
- Valor: R$ 465,00
- Badges: `["Feriado", "Com almoço incluso 🍽️"]`
- Incluso: adicionar "Almoço incluso"

**Pico da Caledônia** (id: `pico-caledonia`)
- Badges: `["Data confirmada ✅"]`
- Dados já corretos (29-30/05, R$ 420)

### 3. Atualizar UI em `Programacao2026Section.tsx`

**Badges customizados**: Renderizar `prog.badges` como badges coloridos abaixo do título ou na imagem de cada card.

**Múltiplas opções de preço**: Quando `prog.opcoes` existir, substituir a exibição de preço único por uma lista com as opções, cada uma com nome e valor. Se tiver `destaque`, mostrar com cor de alerta (laranja/vermelho) e ícone de relógio.

**Alerta de urgência "Reserve até 15/03"**: Na opção da Semana Santa que tem `destaque`, renderizar um badge de urgência em cor laranja/vermelho com ícone ⏰.

**Botão WhatsApp**: Manter em todos os cards a mensagem pré-pronta: "Olá! Tenho interesse na experiência [NOME] do dia [DATA]. Quero mais informações! 🌿"

### Arquivos modificados

| Arquivo | Alteração |
|---------|-----------|
| `src/data/programacao2026.ts` | Atualizar interface, dados de 6 experiências |
| `src/components/landing/Programacao2026Section.tsx` | Renderizar badges, opções de preço, alertas de urgência |

### Detalhes técnicos

- `badges` renderizados com cores automáticas: palavras-chave como "Feriado" em amarelo, "Semana Santa" em rosa, "Dia das Mulheres" em roxo, genéricos em cinza
- `opcoes` renderizados como lista vertical com separador, cada opção mostrando nome + valor
- `destaque` com `className="text-orange-600 bg-orange-50 border-orange-200"` e ícone `Clock`
- A lógica de `emBreve` continua funcionando para futuras experiências sem dados definidos

