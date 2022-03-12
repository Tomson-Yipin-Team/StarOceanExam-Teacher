<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">题目信息</span>
      </div>
      <el-row>
        <el-col :span="11" style="text-align: center;display: block">
          <el-row class="text-title">您当前正在编辑</el-row>
          <div class="empty" />
          <el-row>
            <el-table
              :data="tableData"
              stripe
              style="width:100%"
              border
            >
              <el-table-column
                prop="id"
                label="试卷ID"
                width="100px"
              />
              <el-table-column
                prop="name"
                label="试卷名称"
              />
            </el-table>
          </el-row>
        </el-col>
        <el-col :offset="1" :span="6">
          <el-row class="text-title">题目序号</el-row>
          <div class="empty" />
          <el-row class="text-number">{{ question.now }}/{{ question.now }}</el-row>
        </el-col>
        <el-col :offset="1" :span="5" style="text-align: center;display: block">
          <el-button type="primary" plain @click="toPrevious">上一题</el-button>
          <div class="empty" />
          <el-button type="primary" @click="toNext">下一题</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default { // 点击编辑试卷后的传来的试卷id和试卷名称
  name: 'PaperStatus',
  props: ['subId', 'subName'],
  data() {
    return {
      tableData: [{
        id: '2',
        name: '这里是试卷名称'
      }],
      question: {
        total: 1,
        now: 1
      }
    }
  },
  watch: {
    question: {

    }
  },
  methods: {
    toPrevious() {
      if (this.question.now === 1) {
        this.$notify({
          title: '警告',
          message: '已经是第一题了！',
          type: 'warning',
          position: 'bottom-right'
        })
      } else {
        this.question.now -= 1
      }
    },
    toNext() {
      if (this.question.now === this.question.total) {
        this.$notify({
          title: '警告',
          message: '已经是最后一题了',
          type: 'warning',
          position: 'bottom-right'
        })
      }
    }
  }
}
</script>

<style scoped>
.empty{
  margin-top: 20px;
}
</style>
