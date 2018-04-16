<template>
  <LCDDisplaySvg class="lcd" :rx="rx" @click="reset">{{ text }}</LCDDisplaySvg>
</template>

<script>
  import LCDDisplaySvg from '~/components/LCDDisplaySvg'
  import Moment from 'moment'
  export default {
    name: 'LCDDisplay',
    components: { LCDDisplaySvg },
    data () {
      return {
        rx: 0,
        cols: 20,
        rows: 4,
        eventDate: '2018-05-12 08:00',
        today: false,
        nextYear: false,
        countdown: null,
        booting: true,
        todayText: [
          '  Arduino Day 2018',
          '',
          '     E hoje!!!!',
        ],
        nextYearText: [
          '    Arduino Day',
          '',
          ' Ate o ano que vem!',
        ],
        bootText: [
          '  Arduino Day 2018',
          '',
          '    Carregando...',
        ],
      }
    },
    computed: {
      text () {
        const { booting, today, nextYear, countdown } = this
        if (booting || !countdown) { return this.bootText.join('\n') }
        if (nextYear) return this.nextYearText.join('\n')
        if (today) return this.todayText.join('\n')
        const { days, hours, minutes, seconds } = this.countdown
        return `Faltam: ${days} dias
          ${hours} horas
          ${minutes} minutos
          ${seconds} segundos`
      },
    },
    mounted () {
      this.blinkRx()
      this.reset()
    },
    methods: {
      reset () {
        this.booting = true
        this.nextYear = false
        this.today = false
        this.updateCountdown()
        setTimeout(() => {
          this.booting = false
        }, 2500)
      },
      blinkRx () {
        this.rx = this.booting ? 0 : Math.random() * 2 + 0.1
        setTimeout(this.blinkRx, 160)
      },
      updateCountdown () {
        if (this.nextYear || this.today) return
        setTimeout(this.updateCountdown, 500)
        if (this.booting) return
        const theEvent = new Moment(this.eventDate)
        const now = new Moment()
        const {
          _milliseconds: diff,
          _data: countdown,
        } = Moment.duration(theEvent.diff(now))
        if (diff < 0) {
          this.nextYear = diff < (8 * 60 * 60 * 1000 * -1)
          this.today = true
          if (!this.nextYear) {
            setTimeout(this.updateCountdown, Math.floor(diff / 10))
          }
          this.countdown = {}
          return
        }
        const countdownStrings = Object.entries(countdown)
          .reduce((result, [key, value]) => ({
            ...result,
            [key]: String(value).padStart(2, '0'),
          }), {})
        this.countdown = countdownStrings
      },
    },
  }
</script>

<style scoped>
  .lcd {
    position: relative;
  }
</style>
