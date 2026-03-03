

## Nova Seção "Mahaflow Experience" + Botão no Hero

### Resumo

Criar uma nova seção no site apresentando o **Mahaflow Experience**, um clube de assinaturas para experiências na natureza, baseado no conteúdo do PDF enviado. Adicionar também um botão no Hero que leva diretamente a essa seção.

### 1. Criar componente `ExperienceClubSection.tsx`

Nova seção com `id="experience-club"` contendo:

**Bloco 1 — Introdução emocional**
- Título: "Quando foi que viver experiências virou algo tão distante?"
- Subtítulo: "O Mahaflow Experience nasceu para tornar o bem-estar, o ecoturismo e a conexão com a natureza acessíveis a todos."
- Frases de impacto: "Sem pressa. Sem culpa. Sem pesar no bolso."

**Bloco 2 — O que é**
- Título: "O que é o Mahaflow Experience?"
- Descrição: "Um clube de experiências onde você contribui mensalmente e acumula créditos para viver viagens, trilhas, passeios e vivências organizadas pela Mahaflow."
- Frase: "Viver deixa de ser exceção e passa a fazer parte do caminho."

**Bloco 3 — Como funciona (4 passos)**
- "Simples. Leve. Possível."
- 1. Você escolhe quanto investir por mês
- 2. Acumula créditos mensalmente
- 3. Usa em experiências Mahaflow
- 4. E ainda pode participar de sorteios
- Frase: "Aqui, constância vale mais que pressa."

**Bloco 4 — "Se identifica com isso?" (dores)**
Lista de frases com ícones de aspas/check:
- "Quero fazer coisas diferentes, mas sempre acabo no mesmo lugar"
- "Até quero ir, mas transporte sempre é um problema"
- "Quando vejo, já passou mais um ano"
- "Não tenho companhia"
- "Tudo fica caro quando deixo pra decidir em cima da hora"

**Bloco 5 — Planos de assinatura (tabela/cards)**

| Plano | Descrição | Preço |
|-------|-----------|-------|
| Descobridor(a) | Para iniciantes que querem dar o primeiro passo e viver novas experiências. | R$ 30/mês |
| Explorador(a) | Para quem quer participar com frequência das vivências locais. | R$ 50/mês |
| Aventureiro(a) | Para quem busca experiências completas e viagens fora da cidade. | R$ 75/mês |
| Lenda | Para os que fazem do Mahaflow um estilo de vida e querem prioridade em tudo. | R$ 100/mês |

Cada plano como um card com destaque visual no plano "Aventureiro(a)" (mais popular).

**Bloco 6 — Benefícios "Ao entrar, você se torna Maha"**
Lista com ícones:
- Experiências na natureza que você não faria sozinho(a)
- Novos lugares, novos cenários, novas histórias
- Vagas exclusivas e acesso antecipado
- Valores mais acessíveis
- Pagamento facilitado (sem juros e sem cartão)
- Transporte incluso
- Sorteios e benefícios exclusivos

**Bloco 7 — CTA Final**
- "Sua próxima experiência começa agora"
- "Viva aos poucos e intensamente. Faça parte do Mahaflow Experience."
- Botão "Fale com a gente" → WhatsApp (22 98160-2212) com mensagem: "Olá! Quero saber mais sobre o Mahaflow Experience! 🌿"

### 2. Adicionar botão no HeroSection

No bloco de CTAs do Hero (ao lado de "Explorar experiências" e "VEM SER MAHA!"), adicionar um terceiro botão ou substituir posição:

```text
Botão: "Mahaflow Experience ✨"
Estilo: outline com borda branca, texto branco
Ação: scroll suave até id="experience-club"
```

Será adicionado como um link abaixo dos dois botões existentes, com estilo distinto (outline/transparente) para não competir com os CTAs principais.

### 3. Registrar no Index.tsx

Adicionar lazy load da nova seção, posicionada após a seção "VemSerMahaSection" e antes de "MeetingsSection" (ou após AboutSection, dependendo do fluxo ideal).

### Arquivos modificados

| Arquivo | Alteração |
|---------|-----------|
| `src/components/landing/ExperienceClubSection.tsx` | Novo componente com toda a seção |
| `src/components/landing/HeroSection.tsx` | Adicionar botão "Mahaflow Experience" |
| `src/pages/Index.tsx` | Registrar nova seção com lazy load |

### Detalhes técnicos

- Seção usa o mesmo padrão visual do site: gradientes, cards com `bg-card/80 backdrop-blur-sm`, badges com cores da marca
- Planos de assinatura como cards com `border-primary` no plano destacado
- Ícones do lucide-react: `Sparkles`, `Users`, `MapPin`, `CreditCard`, `Gift`, `Truck`, `Star`, `MessageCircle`
- Scroll suave no botão do Hero usando `document.getElementById('experience-club')?.scrollIntoView({ behavior: 'smooth' })`
- Botão WhatsApp no CTA final usa `https://wa.me/5522981602212?text=...`
- Responsivo: grid de planos em 1 coluna (mobile) → 2 colunas (tablet) → 4 colunas (desktop)

