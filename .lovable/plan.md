# Plano de Auditoria e Overhaul Mahaflow 2026

Foco em transformar o site em uma plataforma de alta conversão, performance extrema e visual emocional conectado com a natureza.

## 1. Auditoria Técnica e de UX
- **Performance**: As imagens estão sendo carregadas via módulos ES6, o que é bom, mas o site carece de formatos modernos como WebP/AVIF aplicados de forma sistemática.
- **UX/UI**: Hierarquia visual consistente mas pode ser mais "limpa". Algumas seções têm contrastes baixos ou excesso de elementos flutuantes.
- **Conversão**: CTAs estão presentes, mas o fluxo de "agendamento" é essencialmente um link para o WhatsApp. Podemos melhorar a jornada do usuário antes desse clique.
- **SEO**: Meta tags básicas presentes, mas faltam dados estruturados (Schema.org) para eventos e organização.

## 2. Refatoração Visual (Design System)
### Cores e Tipografia
- Ajustar `tailwind.config.ts` para tons mais orgânicos.
- Introduzir `font-serif` para headings emocionais, mantendo `Montserrat` para legibilidade.
- Cores: `Verde Floresta (#1B4332)`, `Terra Cozida (#BC6C25)`, `Areia (#FEFae0)`.

## 3. Implementação Técnica (Etapas)

### Etapa 1: Infraestrutura e SEO
- **Schema.org**: Adicionar JSON-LD para a Organização e Eventos (Programação).
- **Acessibilidade**: Revisar contrastes e tags ARIA em componentes Radix.

### Etapa 2: Performance Máxima
- **Otimização de Imagens**: Migrar logicamente para componentes que suportam multi-formato.
- **Code Splitting**: O site já usa lazy loading em seções, mas vamos refinar o `SectionLoader` para evitar CLS.

### Etapa 3: Overhaul de Seções (Exemplos)
- **Hero**: Tornar mais imersivo com transições mais suaves.
- **Experience Club**: Destacar benefícios com ícones mais modernos e cards mais limpos.
- **Programação**: Melhorar a visualização mobile do calendário (hoje é uma lista longa).

### Etapa 4: Micro-interações e Polimento
- Pequenas animações de entrada para elementos de texto.
- Ajuste de espaçamentos (paddings/margins) para "respiro" visual.

## 4. Próximos Passos (Ação imediata)
1. Atualizar o `tailwind.config.ts` com o novo palette.
2. Refatorar `index.css` para unificar estilos globais.
3. Atualizar `index.html` com metadados avançados.
4. Refatorar `HeroSection.tsx` e `ExperienceClubSection.tsx` para o novo design.

---
**Nota técnica**: Manteremos o Vite atual, mas otimizaremos as configurações de build para tree-shaking mais agressivo.
