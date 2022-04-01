<template>

  <el-descriptions direction="vertical" :column="1" border>
    <el-descriptions-item label="试卷名">{{ name }}</el-descriptions-item>
    <el-descriptions-item label="题目数量">{{ number }}</el-descriptions-item>
    <el-descriptions-item label="试卷难度(自动计算)">0.54</el-descriptions-item>
  </el-descriptions>

</template>

<script>
export default {
  name: 'PaperInfo',
  data() {
    return {
      name: this.$route.query.name,
      number: this.$route.query.number
    }
  }
}
</script>

<style scoped>

</style>
