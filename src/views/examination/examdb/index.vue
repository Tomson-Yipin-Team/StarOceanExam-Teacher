<template>
  <div class="container">
    <el-row type="flex" justify="center" class="table">
      <el-col :span="23">
        <el-card>
          <el-row>
            <el-button type="danger" plain @click="clearFilter">清除所有过滤器</el-button>
            <el-button type="primary" @click="toCreate">添加题目 <i class="el-icon-upload" /></el-button>
             <el-button icon="el-icon-circle-plus" type="primary">添加题型</el-button>
          </el-row>
          <el-table
            ref="filterTable"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              prop="id"
              lable="试卷编号"
              sortable
              width="50"
            />
            <el-table-column
              prop="subject"
              label="试题类型"
              sortable
              width="180"
              column-key="subject"
              :filters="[{text: '数学', value: '数学'}, {text: '英语', value: '英语'}, {text: '计算机', value: '计算机'}, {text: '物理', value: '物理'}]"
              :filter-method="filterHandler"
            />
            <el-table-column
              prop="date"
              label="试题数量"
              width="150"
              sortable
            />
            <el-table-column
              prop="name"
              label="未使用的试题数量（未被学生做过）"
              sortable
            />
            <el-table-column
              prop="origin"
              label="试卷构成"
              width="180"
              sortable
            />
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="200"
            >
              <template>
                <el-row type="flex" justify="center">
                  <el-button type="text" size="small">查看该题库</el-button>
                   <el-button type="text" size="small">删除该题库</el-button>
                </el-row>
                <el-row type="flex" justify="center">
                  <el-button type="text" size="small">分享此题库</el-button>
                </el-row>

              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '1',
        subject: '听力',
        date: '105',
        name: '42',
        origin: '查看'
      }, {
        id: '2',
        subject: '单项选择',
        date: '807',
        name: '301',
        origin: '查看'
      }, {
        id: '3',
        subject: '完型填空',
        date: '104',
        name: '9',
        origin: '查看'
      }, {
        id: '4',
        subject: '十五选十',
        date: '88',
        name: '44',
        origin: '查看'
      },
      {
        id: '5',
        subject: '段落信息匹配',
        date: '62',
        name: '21',
        origin: '查看'
      },
      {
        id: '6',
        subject: '阅读理解',
        date: '533',
        name: '115',
        origin: '查看'
      },
      {
        id: '7',
        subject: '句子翻译',
        date: '78',
        name: '45',
        origin: '查看'
      },
      {
        id: '8',
        subject: '任务型阅读',
        date: '67',
        name: '44',
        origin: '查看'
      },
      {
        id: '9',
        subject: '书面表达',
        date: '68',
        name: '32',
        origin: '查看'
      }]
    }
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('subject')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    toCreate() {
      this.$router.push('/examination/exam-upload')
    }
  }
}
</script>

<style scoped>
.container{
  background-color: rgb(240, 242, 245);
  margin:0;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
