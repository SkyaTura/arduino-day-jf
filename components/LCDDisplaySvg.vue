<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.077 272.826">
    <filter id="light" x="-1" y="-1" width="3" height="3">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/>
    </filter>
    <image height="100%" width="100%" xlink:href="~/assets/LCD_8bits.svg" alt=""></image>
    <foreignObject x="286" y="145.5" width="188" class="text" font-size="17" :style="customStyles">
      <p xmlns="http://www.w3.org/1999/xhtml">
        <slot></slot>
      </p>
    </foreignObject>
    <foreignObject x="28" y="106" font-size="17">
      <button class="button" @click="onButton"></button>
    </foreignObject>
    <foreignObject x="230" y="160" font-size="17">
      <button class="contrast" @click="toggleContrast"></button>
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
    data () {
      return {
        currentContrast: 2,
        availableContrast: [0.1, 0.3, 0.6, 0.9],
      }
    },
    computed: {
      customStyles () {
        const contrast = this.availableContrast[this.currentContrast]
        return {
          color: `rgba(0,0,0,${contrast}`,
        }
      },
    },
    methods: {
      onButton () {
        this.$emit('click')
      },
      toggleContrast () {
        const { availableContrast, currentContrast } = this
        const maxIndex = availableContrast.length - 1
        this.currentContrast = currentContrast >= maxIndex ? 0 : currentContrast + 1
      },
    },
  }
</script>

<style scoped>
  @import '~/assets/fonts/RepetitionScrolling.css';

  .text {
    color: rgba(0, 0, 0, .6));
    font-family: Repetition-Scrolling, monospace;
    line-height: .88;
    transform: translateY(1px);
    transition: color .2s;
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

  .button, .contrast {
    background: none;
    border: none;
    color: transparent;
    cursor: pointer;
    height: 14px;
    width: 14px;
    outline: none;
  }

  .contrast {
    width: 24px;
    height: 30px;
  }
</style>
