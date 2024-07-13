# Nova UI

## Getting Started

### Instalation

In your terminal execute the following command depending on what package manager you are using:

#### pnpm

```bash
pnpm install nova-js-ui
```

#### yarn

```bash
yarn add nova-js-ui
```

#### npm

```bash
npm install nova-js-ui
```

### Usage

#### Svelte-kit

In your top +layout.svelte route

```svelte
<NovaUIProvider>
	<slot />
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
