<template>
  <div>
    <el-card :body-style="{padding:'0px'}">
      <div slot="header">
        试卷信息
      </div>
      <el-descriptions :column="1" border :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
        <el-descriptions-item label="试卷名称" />
        <el-descriptions-item label="试卷ID" />
        <el-descriptions-item label="参加人数" />
        <el-descriptions-item label="最高分" />
        <el-descriptions-item label="最低分" />
        <el-descriptions-item label="平均分" />
        <el-descriptions-item label="及格率" />
        <el-descriptions-item label="不及格人数" />
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
