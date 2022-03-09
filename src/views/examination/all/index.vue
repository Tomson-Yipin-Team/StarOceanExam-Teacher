<template>
  <el-row class="container">
    <ExamList />
  </el-row>
</template>

<script>

import ExamList from '@/views/examination/all/components/ExamList'

export default {
  components: { ExamList },
  methods: {
    // TODO: 补充编辑功能
    handleEdit(index, row) {
      console.log(index, row)
    },
    // TODO: 补充删除功能
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 状态颜色
    tableRowClassName(index, row) {
      if (row.status === 'waring') {
        return 'warning-row'
      } else if (row.status === 'success') {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style>
.container{
  margin: 10px 10px 10px;
}
</style>
