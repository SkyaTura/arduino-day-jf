<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.077 272.826">
    <filter id="light" x="-1" y="-1" width="3" height="3">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/>
    </filter>
    <image height="100%" width="100%" xlink:href="~/assets/LCD_8bits.svg" alt=""></image>
    <foreignObject x="286" y="145.5" width="188" class="text" font-size="17">
      <p xmlns="http://www.w3.org/1999/xhtml">
        <slot></slot>
      </p>
    </foreignObject>
    <foreignObject x="230" y="160" font-size="17" class="text">
      <button class="button" @click="onButton">C</button>
    </foreignObject>
    <ellipse rx="5" ry="2.5" cx="186" cy="151.5" :opacity="on" class="led-light led-on"></ellipse>
    <ellipse rx="5" ry="2.5" cx="186" cy="151.5" :opacity="on" class="led-light led-on"></ellipse>
    <ellipse rx="5" ry="2.5" cx="97" cy="151.5" :opacity="tx" class="led-light led-tx"></ellipse>
    <ellipse rx="5" ry="2.5" cx="97" cy="151.5" :opacity="tx" class="led-light led-tx"></ellipse>
    <ellipse rx="5" ry="2.5" cx="97" cy="157.5" :opacity="rx" class="led-light led-rx"></ellipse>
    <ellipse rx="5" ry="2.5" cx="97" cy="157.5" :opacity="rx" class="led-light led-rx"></ellipse>
  </svg>
</template>

<script>
  export default {
    name: 'LCDDisplaySvg',
    props: {
      on: {
        type: Number,
        default: 1,
      },
      tx: {
        type: Number,
        default: 0,
      },
      rx: {
        type: Number,
        default: 0,
      },
    },
    methods: {
      onButton () {
        this.$emit('click')
      },
    },
  }
</script>

<style scoped>
  @import '~/assets/fonts/RepetitionScrolling.css';

  .text {
    color: rgba(0, 0, 0, .6);
    font-family: Repetition-Scrolling, monospace;
    line-height: .88;
    transform: translateY(1px);
    word-break: break-all;
    white-space: pre-wrap;
  }

  .led-light {
    fill: #ffc800;
    filter: url(#light);
    mix-blend-mode: lighten;
  }

  .led-on {
    fill: greenyellow;
  }

  .button {
    background: none;
    border: none;
    color: transparent;
    cursor: pointer;
    height: 30px;
    outline: none;
  }
</style>
