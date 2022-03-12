<template>
  <div>
    <el-card class="container">
      <el-row type="flex" justify="center">
        <el-col :span="10">
          <el-steps :active="active" finish-status="success">
            <el-step title="选择题目模板" />
            <el-step title="填写试卷信息" />
            <el-step title="发布" />
          </el-steps>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="step-container">
        <el-col :span="18">
          <create v-if="active === 1" />
          <question v-if="active === 0" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="end">
        <el-button type="primary" plain @click="onSave">保存</el-button>
        <el-button @click="onCancel">上一步</el-button>
        <el-button type="primary" @click="onSubmit">下一步</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>

import Create from '@/views/examination/edit/components/Create'
import Question from '@/views/examination/edit/components/Question'

export default {
  components: { Create, Question },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onSubmit() {
      this.active += 1
      this.$notify({
        title: '提示',
        message: '自动保存成功',
        position: 'bottom-right',
        type: 'success'
      })
    },
    onCancel() {
      this.active -= 1
      this.$notify({
        title: '警告',
        message: '正在返回',
        position: 'bottom-right',
        type: 'warning'
      })
    },
    onSave() {
      this.$notify({
        title: '保存成功',
        message: '试卷已保存！',
        position: 'bottom-right',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.container{
  margin:20px 20px 20px
}

.step-container{
  margin-top: 20px;
}
</style>

