<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">题目信息</span>
      </div>
      <el-row>
        <el-col :span="6" :offset="1" style="text-align: center;display: block">
          您当前正在编辑<br>
          <el-button />
        </el-col>
        <el-col :offset="1" :span="1">
          <el-divider direction="vertical" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PaperStatus'
}
</script>

<style scoped>

</style>
