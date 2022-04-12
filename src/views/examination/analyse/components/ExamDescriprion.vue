<template>
  <div>
    <el-card :body-style="{padding:'0px'}">
      <div slot="header">
        考试结果分析
      </div>
      <el-descriptions :column="1" border :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
        <el-descriptions-item label="试卷名称">2021-2022-2大学英语六级模拟考试（2）</el-descriptions-item>
        <el-descriptions-item label="试卷ID">1000075885</el-descriptions-item>
        <el-descriptions-item label="参加人数">19</el-descriptions-item>
        <el-descriptions-item label="最高分">94</el-descriptions-item>
        <el-descriptions-item label="最低分">52</el-descriptions-item>
        <el-descriptions-item label="平均分">79.3</el-descriptions-item>
        <el-descriptions-item label="不及格率">5.3%</el-descriptions-item>
        <el-descriptions-item label="不及格人数">1</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ExamDescriprion',
  data() {
    return {
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
