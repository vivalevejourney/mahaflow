

## Tornar o CTA "Próxima Experiência" do Hero Automático

### Problema
No Hero, a próxima experiência está **fixa** como "Cachoeira da Bicuda Grande - 31/01", que já passou. O calendário já calcula automaticamente qual é a próxima, mas o Hero não.

### Solução
Usar os dados de `programacoes2026` para calcular dinamicamente qual é a próxima experiência futura e exibir no Hero. Se todas já tiverem passado, o CTA some.

### Arquivo a modificar

**`src/components/landing/HeroSection.tsx`**

1. Importar `programacoes2026` de `@/data/programacao2026` e funções de data (`parseISO`, `isPast`, `isToday`, `differenceInDays`) de `date-fns`
2. Calcular `proximaExperiencia` -- a primeira experiência cujo `dataISO` ainda nao passou (mesma logica que ja existe no Programacao2026Section)
3. Calcular `diasRestantes` para mostrar urgencia
4. Substituir o bloco hardcoded (linhas 99-115) por conteudo dinamico:
   - Nome: `proximaExperiencia.nome`
   - Data: formatada a partir de `proximaExperiencia.data`
   - Link: `/experiencias/${proximaExperiencia.slug}`
   - Badge de urgencia baseada em `diasRestantes` (ex: "Poucas vagas!" se < 14 dias, "Inscrições abertas" se > 30 dias)
5. Se nao houver proxima experiencia (todas passaram), o bloco inteiro nao renderiza

### Detalhes Tecnicos

```text
Logica de selecao:
  programacoes2026.find(prog => !isPast(parseISO(prog.dataISO)) || isToday(parseISO(prog.dataISO)))

Badge de urgencia:
  <= 7 dias  -> "ULTIMAS VAGAS!" (vermelho, pulsando)
  <= 14 dias -> "Poucas vagas!" (vermelho, pulsando)  
  <= 30 dias -> "Vagas limitadas" (amarelo)
  > 30 dias  -> "Inscrições abertas" (verde)
```

Nenhum outro arquivo precisa ser alterado. A mudanca e isolada no HeroSection.

