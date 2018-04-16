<template>
  <div class="layout">
    <nuxt/>
  </div>
</template>

<style>
  html {
    --yellow: #F1C40F;
    --brown: #9E846D;
    --red: #D35400;
    --orange: #E67E22;
    --green: #00979D;
    --green-dark: #008184;
    --green-darker: #005c5f;
    --black: #4E5B61;
    --gray: #F7F9F9;
    --white: #fff;
    background: url(~/assets/background.svg);
    background-position: 40%;
    font-size: 16px;
  }
  body {
    color: var(--black);
    font-family: "Oxygen Mono", monospace;
    font-weight: 400;
  }
  .layout {
    display: flex;
  }
</style>
