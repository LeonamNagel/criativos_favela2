# Guia de Design
## Cores
- **Verde Principal**: `#007F2D`
  - Usado em botões e elementos de destaque
  - Hover state: `#006024` (versão mais escura)
- **Preto**: Cor de fundo principal
- **Branco**: Textos e elementos sobre fundo escuro
- **Gradientes**: 
  - Hero section: gradiente preto com opacidade variável para melhor legibilidade
## Tipografia
- Sistema de fontes nativo para melhor performance
- Hierarquia de tamanhos:
  - Títulos principais: `text-4xl`
  - Subtítulos: `text-3xl`
  - Texto regular: `text-base`/`text-sm`
  - Links e botões: `text-sm`
## Layout
- **Navbar**: 
  - Fixa no topo
  - Fundo escuro com blur para melhor legibilidade
  - Ícones de redes sociais à esquerda
  - Links de navegação à direita
  - Altura: 64px (`h-16`)
- **Container**:
  - Largura máxima centralizada
  - Padding lateral responsivo
  - Máximo de 1400px em telas grandes
- **Cards**:
  - Aspect ratio 4:3 para imagens
  - Padding interno consistente
  - Bordas suaves (rounded-lg)
  - Hover states com animações suaves
  - Background semi-transparente com blur
## Responsividade
- Mobile-first design
- Breakpoints:
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1400px
## Animações
- Transições suaves (0.2s - 0.3s)
- Hover effects em cards e botões
- Fade-in para elementos carregados
- Scale transform em hover states
## Espaçamento
- Sistema de spacing consistente usando Tailwind:
  - Pequeno: 4px (space-1)
  - Médio: 8px (space-2)
  - Grande: 16px (space-4)
  - Extra grande: 32px (space-8)
## Elementos Interativos
- **Botões**:
  - Padding horizontal maior que vertical
  - Hover states com mudança de cor
  - Transições suaves
  - Bordas arredondadas
- **Links**:
  - Mudança de cor em hover
  - Underline em links de texto
  - Ícones para links externos
## Acessibilidade
- Alto contraste entre texto e fundo
- Tamanhos de fonte legíveis
- Target areas adequadas para elementos clicáveis
- Alt text em todas as imagens
## Footer
- Fundo branco para contraste
- Logo dos parceiros centralizado
- Espaçamento vertical consistente