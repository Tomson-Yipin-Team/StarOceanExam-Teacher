<template>
  <div class="container">
    <AI v-if="way==='ai'" />
    <Manual v-if="way==='manual'" />
  </div>
</template>

<script>
import AI from '@/views/examination/composition/components/AI'
import Manual from '@/views/examination/composition/components/Manual'
export default {
  name: 'Index',
  components: {
    AI,
    Manual
  },
  data() {
    return {
      way: this.$route.query.way
    }
  }
}
</script>

<style scoped>

</style>
