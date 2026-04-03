

## Atualização Completa do Site Mahaflow — Abril 2026

Foco em conversão: transformar o site numa máquina de captura para o Mahaflow Experience.

### 1. Substituir "RotaFácil" por "i9 Experience" (6 arquivos)

| Arquivo | Ação |
|---------|------|
| `AboutSection.tsx` | Trocar texto do trust badge para "Organização profissional por i9 Experience" |
| `CalendarSection.tsx` | Trocar menção RotaFácil por i9 Experience |
| `HowToJoinSection.tsx` | Trocar info box e trust badges |
| `Footer.tsx` | Trocar logo/texto "RotaFácil" por "i9 Experience", remover import do logo antigo |
| `GestorLogin.tsx` | Trocar branding para i9 Experience |
| `GestorDashboard.tsx` | Trocar branding para i9 Experience |

Nota: o asset `rotafacil-logo.png` sera substituido por texto "i9 Experience" (sem logo).

### 2. Ocultar rotas do menu de navegacao

Em `src/data/mockData.ts`, remover `Loja` do `navItems`. As rotas `/feed`, `/mahatinder`, `/loja` ja nao estao no menu (apenas Loja esta). Remover o item `{ label: 'Loja', href: '/loja' }`.

### 3. Hero Section — novos CTAs

Em `HeroSection.tsx`:
- Botao 1 (verde): "Quero fazer parte" → scroll para `#experience-club`
- Botao 2 (branco): "Ver programação 2026" → scroll para `#programacao-2026`
- Remover o botao separado "Mahaflow Experience ✨" e o import de Sparkles

### 4. ExperienceClubSection — reformulacao completa

Reescrever o componente mantendo a estrutura de blocos mas com:
- Titulo: "Mahaflow Experience" / Subtitulo: "Natureza em Movimento"
- Texto de abertura atualizado
- Passos atualizados (investir, acumular, usar, sorteios)
- **Cards de planos com beneficios detalhados por nivel**:
  - Descobridor(a) R$30 — Compass — beneficios basicos
  - Explorador(a) R$50 — MapPin — tudo do anterior + mais
  - Aventureiro(a) R$75 — Mountain — MAIS POPULAR — tudo anterior + viagens
  - Lenda R$100 — Crown — tudo anterior + VIP exclusivo
- Botao de cada card: "Quero esse plano" → WhatsApp com nome do plano na mensagem
- Frase final: "Essas experiências e muito mais. Venha nos conhecer!"
- CTA final: "Fale com a Dani" → WhatsApp

### 5. VemSerMahaSection — simplificar

- Remover o card de preco R$34,90 (pricing card inteiro, linhas 114-188)
- Remover o MahaTinder preview (matchCards e o bloco visual, linhas 190-234)
- Alterar titulo para "Tudo que você ganha sendo Maha"
- Manter apenas a grade de beneficios por categoria (Conexão, Atividades, Economia, Exclusivo)
- CTA: "Escolha seu plano" → scroll para `#experience-club`

### 6. NotFound — traduzir para portugues

Alterar titulo, texto e link em `NotFound.tsx`.

### 7. index.css — remover bloco anti-watermark

Remover o bloco CSS que tenta esconder `.lovable-edit-button`, `[class*="lovable"]`, etc. (ultimas ~10 linhas do arquivo).

### 8. App.css — limpar

Esvaziar o conteudo (remover estilos padrao do Vite).

### 9. index.html — atualizar metadados

- Title: "Mahaflow — Natureza em Movimento | Campos dos Goytacazes, RJ"
- Description: "Mahaflow Experience: clube de experiências ao ar livre. Trilhas, rafting, vivências e conexão com a natureza. Planos a partir de R$30/mês. Campos dos Goytacazes, RJ."
- Author: "Mahaflow"

### Arquivos modificados (11 arquivos)

| Arquivo | Tipo |
|---------|------|
| `src/components/landing/HeroSection.tsx` | Editar CTAs |
| `src/components/landing/ExperienceClubSection.tsx` | Reescrever completo |
| `src/components/landing/VemSerMahaSection.tsx` | Simplificar |
| `src/components/landing/AboutSection.tsx` | Trocar RotaFácil |
| `src/components/landing/CalendarSection.tsx` | Trocar RotaFácil |
| `src/components/landing/HowToJoinSection.tsx` | Trocar RotaFácil |
| `src/components/layout/Footer.tsx` | Trocar RotaFácil |
| `src/pages/GestorLogin.tsx` | Trocar RotaFácil |
| `src/pages/GestorDashboard.tsx` | Trocar RotaFácil |
| `src/pages/NotFound.tsx` | Traduzir |
| `src/data/mockData.ts` | Remover Loja do menu |
| `src/index.css` | Remover bloco watermark |
| `src/App.css` | Esvaziar |
| `index.html` | Atualizar meta tags |

