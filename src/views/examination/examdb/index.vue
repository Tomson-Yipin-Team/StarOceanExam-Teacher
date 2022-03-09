<template>
  <div class="container">
    <el-row type="flex" justify="center" class="table">
      <el-col :span="23">
        <el-card>
          <el-row>
            <el-button type="danger" plain @click="clearFilter">清除所有过滤器</el-button>
            <el-button type="primary">导入试卷 <i class="el-icon-upload" /></el-button>
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
              label="课程"
              sortable
              width="180"
              column-key="subject"
              :filters="[{text: '数学', value: '数学'}, {text: '英语', value: '英语'}, {text: '计算机', value: '计算机'}, {text: '物理', value: '物理'}]"
              :filter-method="filterHandler"
            />
            <el-table-column
              prop="date"
              label="创建日期"
              width="150"
              sortable
            />
            <el-table-column
              prop="name"
              label="名称"
              sortable
            />
            <el-table-column
              prop="origin"
              label="试卷来源"
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
                  <el-button type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </el-row>
                <el-row type="flex" justify="center">
                  <el-button type="text" size="small">使用此模板</el-button>
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
        subject: '英语',
        date: '2022-03-13',
        name: '南通大学2021-1学期英语考试',
        origin: '张三'
      }, {
        id: '2',
        subject: '物理',
        date: '2022-03-15',
        name: '南通大学2021-1学期物理考试',
        origin: '张三'
      }, {
        id: '3',
        subject: '数学',
        date: '2022-03-12',
        name: '南通大学2021-1学期数学考试',
        origin: '张三'
      }, {
        id: '4',
        subject: '英语',
        date: '2022-03-09',
        name: '南通大学2021-1学期英语考试',
        origin: '张三'
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
