<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses()" :class="itemClass" class="star-item" :key="index"></span>
  </div>
</template>
<script>
  export default {
    props: ['score', 'size'],
    methods: {
      itemClasses () {
        let result = []
        let score = Math.floor(this.score)
        let hasDecimal = (this.score - score) >= 0.5
        for (let i = 0; i < score; i++) {
          result.push('on')
        }
        if (hasDecimal) {
          result.push('half')
        }
        while (result.length < 5) {
          result.push('off')
        }
        return result
      }
    },
    computed: {
      starType () {
        return `star-${this.size}`
      }
    }
  }
</script>
