# Nova UI

## Getting Started

### Instalation

In your terminal execute the following command depending on what package manager you are using:

#### pnpm

```bash
pnpm install nova-js-ui @nv-org/components
```

#### yarn

```bash
yarn add nova-js-ui @nv-org/components
```

#### npm

```bash
npm install nova-js-ui @nv-org/components
```

### Usage

#### Svelte 

In your top route

```svelte
<NovaUIProvider>
  {@render children()}
</NovaUIProvider>
```

#### Astro

Set Astro svelte adapter on your proyect

On your top Layout Astro Component

```astro
<NovaUIProvider>
  <slot/>
</NovaUIProvider>
```

## Documentation

You can check the documentation here:
