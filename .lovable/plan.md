

## Atualizacoes na Secao de Atividades Mahaflow

### 1. Atualizar dados em `src/data/programacao2026.ts`

**Dia Namaste** (id: `dia-namaste`)
- Atualizar `valor: 67` e `valorFormatado: 'R$ 67,00'`

**Travessia Joatinga** (id: `travessia-joatinga`)
- Atualizar `valor: 1850` e `valorFormatado: 'R$ 1.850,00'`

**Semana Santa** (id: `semana-santa-macacu`)
- Remover data e preco: `valor: 0`, `valorFormatado: 'Em breve'`
- Alterar `data: 'A definir'`, `dataISO` manter como referencia de posicao no calendario
- Adicionar campo `emBreve: true` na interface `Programacao`

**Rafting em Sapucaia** (id: `rafting-sapucaia`)
- Atualizar `data: '16 de maio'`, `dataISO: '2026-05-16'`, `dataCompleta: '16 de maio de 2026'`, `diaSemana: 'Sabado'`

**Pico da Caledonia** (id: `pico-caledonia`)
- Atualizar `data: '29 a 30 de maio'`, `dataISO: '2026-05-29'`, `dataCompleta: '29 a 30 de maio de 2026'`, `diaSemana: 'Sexta e Sabado'`

**Nova experiencia: Pedra Bonita + Floresta da Tijuca**
- Adicionar novo item no array, posicionado cronologicamente (14/03, entre Namaste e Joatinga)
- `id: 'pedra-bonita-tijuca'`, `slug: 'pedra-bonita-tijuca'`
- `data: '14 de marco'`, `dataISO: '2026-03-14'`, `valor: 390`, `valorFormatado: 'R$ 390,00'`
- `incluso: ['Transporte saindo de Campos dos Goytacazes', 'Guiamento credenciado']`
- `categoria: 'trilha'`
- Usar imagem existente (`mahaflow-trilha.jpg` ou similar)

### 2. Atualizar interface `Programacao`

Adicionar campo opcional `emBreve?: boolean` para marcar experiencias sem data/preco definidos.

### 3. Badge "Em breve" na Semana Santa

No `Programacao2026Section.tsx`, quando `prog.emBreve === true`:
- Exibir badge "Em breve" grande e visivel no card
- No lugar do botao "Detalhes / Reservar", mostrar botao "Quero ser avisado" que abre WhatsApp com mensagem pre-preenchida:
  `"Ola! Tenho interesse na experiencia de Semana Santa e quero ser avisado quando abrir as inscricoes! 🌿"`

### 4. Botoes de compartilhamento em todos os cards

Adicionar no rodape de cada card (futuro e passado) um grupo de 3 botoes pequenos e discretos:

**Botao 1 -- WhatsApp**
- Icone de mensagem/WhatsApp (lucide `MessageCircle`)
- Abre `https://wa.me/?text=` com mensagem: `"🌿 Ola! Veja essa experiencia incrivel da Mahaflow: [NOME] -- [DATA] por [PRECO]. Acesse: [URL]"`

**Botao 2 -- Copiar link**
- Icone `Link2` do lucide
- Copia URL `{window.location.origin}/experiencias/{slug}` para clipboard
- Toast "Link copiado!" com sonner

**Botao 3 -- Compartilhar nativo**
- Icone `Share2` do lucide
- Usa `navigator.share()` com title, text e url
- Renderiza apenas se `navigator.share` estiver disponivel (fallback: esconde o botao)

Os botoes serao extraidos em um componente reutilizavel `ShareButtons` para evitar duplicacao entre cards futuros e passados.

### Arquivos modificados

| Arquivo | Alteracao |
|---------|-----------|
| `src/data/programacao2026.ts` | Atualizar precos, datas, adicionar Pedra Bonita, campo `emBreve` |
| `src/components/landing/Programacao2026Section.tsx` | Badge "Em breve", botao WhatsApp Semana Santa, botoes de compartilhamento |

### Detalhes tecnicos

- O componente `ShareButtons` recebe `nome`, `data`, `valorFormatado`, `slug` como props
- Usa `navigator.clipboard.writeText()` para copiar link
- Usa `toast.success('Link copiado!')` do sonner para feedback
- `navigator.share` e verificado com `typeof navigator.share === 'function'`
- Os botoes usam `variant="ghost"` e `size="icon"` do shadcn, com `h-8 w-8` para serem discretos

