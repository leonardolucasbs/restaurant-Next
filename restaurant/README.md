Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Começando

primeiro baixe as dependências do projeto com:

```bash
npm install
# ou
npm i
```

Segundo, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente

## Estrutura do Projeto

### 📁 Arquitetura de Componentes

Este projeto usa uma arquitetura bem organizada com separação de responsabilidades. Aqui está como os arquivos estão estruturados:

#### 🔧 Components (`app/components/`)

- **`Menu.tsx`** - Componente principal que orquestra a exibição do menu com filtros
  - Importa e combina FilterButtons e PlateCard
  - Utiliza o hook useMenuFilter para gerenciar o estado dos filtros
  - Renderiza a lista de pratos filtrados

- **`FilterButtons.tsx`** - Componente que renderiza os botões de filtro
  - Exibe 3 botões de categoria: Entradas, Pratos Principais, Sobremesas
  - Botão "Mostrar Todos" para remover qualquer filtro
  - Recebe a categoria selecionada e uma função callback para mudanças
  - Estilos dinâmicos: botão selecionado fica azul, outros cinza

- **`PlateCard.tsx`** - Componente que renderiza um card individual de prato
  - Exibe nome e descrição do prato
  - Mostra a categoria do prato com estilo visual
  - Reutilizável para cada prato na lista

#### 🪝 Hooks (`app/hooks/`)

- **`useMenuFilter.ts`** - Hook customizado que encapsula a lógica de filtro
  - Gerencia o estado da categoria selecionada
  - Filtra os pratos baseado na categoria selecionada
  - Retorna: `selectedCategory`, `setSelectedCategory` e `filteredPlates`
  - Reutilizável em qualquer componente que necessite da funcionalidade de filtro

#### ⚙️ Constants (`app/constants/`)

- **`filterButtons.ts`** - Armazena a configuração centralizada dos botões de filtro
  - Mantém um array com a configuração de cada botão (label e value)
  - Facilita manutenção e mudanças futuras
  - Evita hardcode de valores no componente

#### 📝 Types (`app/types/`)

- **`Props.ts`** - Define as interfaces de props dos componentes
  - `FilterButtonsProps` - Props do componente FilterButtons
  - `PlateCardProps` - Props do componente PlateCard

- **`FilterButton.ts`** - Interface que define a estrutura de um botão de filtro
  - `label`: Texto exibido no botão
  - `value`: Valor do enum que representa a categoria

- **`Plate.ts`** - Interface que define um prato (já existente)
  - `id`, `name`, `description`, `definition`

- **`enums/definition.ts`** - Enum com as categorias de pratos
  - `ENTRADA` - Entrada
  - `PRINCIPAL` - Prato principal
  - `SOBREMESA` - Sobremesa

#### 🛠️ Utils (`app/utils/`)

- **`categoryUtils.ts`** - Funções utilitárias para trabalhar com categorias
  - `getCategoryLabel(category)` - Converte um enum definition em texto português
  - Reutilizável em todo o projeto para manter consistência

#### 📊 Service (`app/service/`)

- **`plateData.ts`** - Dados mockados dos pratos
  - Array `mockPlates` com 10 pratos de exemplo (3 entradas, 4 pratos principais, 3 sobremesas)
  - Cada prato tem id, nome, descrição e categoria

### 🎯 Fluxo de Funcionamento

1. **Menu.tsx** chama `useMenuFilter()` para obter o estado dos filtros
2. **FilterButtons.tsx** renderiza os botões de filtro
3. Quando o usuário clica em um botão, `onCategoryChange()` é disparado
4. O hook `useMenuFilter()` filtra os pratos baseado na categoria
5. **Menu.tsx** renderiza os pratos filtrados usando **PlateCard.tsx** para cada um

### 🎨 Estilo

- Utiliza **TailwindCSS** para estilização
- Grid de 4 colunas para os cards dos pratos
- Botões com efeito hover e transição de cores
- Responsivo e otimizado para diferentes tamanhos de tela
