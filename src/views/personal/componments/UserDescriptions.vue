<template>
  <div class="container">
    <el-descriptions class="description" :column="1" border :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
      <el-descriptions-item label="用户名">example@email.com</el-descriptions-item>
      <el-descriptions-item label="姓名">方慧敏</el-descriptions-item>
      <el-descriptions-item label="昵称">一场秋梦</el-descriptions-item>
      <el-descriptions-item label="学校">超星大学</el-descriptions-item>
      <el-descriptions-item label="学院">英语学院</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'UserDescriptions',
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
.description{
  width: 80%;
}
.container{
  display: flex;
  justify-content: center;
}
</style>
