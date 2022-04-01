<template>
  <div>
    <el-descriptions border :column="1" :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
      <el-descriptions-item label="试卷名称">{{ name }}</el-descriptions-item>>
      <el-descriptions-item label="试卷ID">{{ id }}</el-descriptions-item>>
      <el-descriptions-item label="阅卷方式">流水卷(已关闭学生匿名)</el-descriptions-item>
      <el-descriptions-item label="平均分">8.12</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'WorkInfo',
  data() {
    return {
      name: this.$route.query.name,
      id: this.$route.query.id,
      descriptionsPram: {
        CS: {
          'text-align': 'center', // 文本居中
          'min-width': '250px', // 最小宽度
          'word-break': 'break-all'
        },
        LS: {
          // 'color': '#000',
          'text-align': 'center',
          'font-weight': '600',
          'height': '40px',
          // 'background-color': 'rgba(255, 97, 2, 0.1)',
          'min-width': '110px',
          'word-break': 'keep-all'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
