<template>
  <main class="page" :class="{ isOffline }">
    <header class="header">
      <LCDDisplay class="board"></LCDDisplay>
      <div class="logo-place">
        <AppLogo class="logo"></AppLogo>
      </div>
    </header>
  </main>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import LCDDisplay from '~/components/LCDDisplay'

  export default {
    components: { AppLogo, LCDDisplay },
  }
</script>

<style scoped>
  .page {
    margin: auto;
    min-width: 70vw;
    max-width: 100vw;
    padding: 0 1em;
    position: relative;
    flex: 0;
    flex-basis: 900px;
  }
  .board {
    margin-top: -12vw;
    /*transform: scale(1.1);
    transform-origin: 100% 100%;*/
  }
  .logo-place {
    display: flex;
    justify-content: center;
  }
  .logo {
    padding: 2em;
    width: 40vw;
  }
</style>
