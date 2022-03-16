<template>

  <el-descriptions direction="vertical" :column="1" border>
    <el-descriptions-item label="试卷名">{{ name }}</el-descriptions-item>

  </el-descriptions>

</template>

<script>
export default {
  name: 'PaperInfo',
  data() {
    return {
      name: this.$route.query.name
    }
  }
}
</script>

<style scoped>

</style>
