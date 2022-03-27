<template>
  <div>
    <el-row :gutter="12">
      <el-col :xs="22" :sm="22" :md="16" :lg="16" :xl="16">
        <el-card>
          <div slot="header">
            原题
          </div>
          考试题目
        </el-card>
        <el-card>
          <div slot="header">
            学生回答
          </div>
          学生回答
        </el-card>
        <el-card>
          <div slot="header">
            参考答案
          </div>
        </el-card>
      </el-col>
      <el-col :xs="22" :sm="22" :md="8" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            阅卷信息
          </div>
        </el-card>
        <el-card>
          <div slot="header">
            评分
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style scoped>

</style>
