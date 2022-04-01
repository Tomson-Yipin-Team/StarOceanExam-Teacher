<template>
  <div id="contain">
    <el-card header="用户日志" class="container">
      <el-table
        :data="announcement"
        style="width: 100%"
        :show-header="false"
        class="table"
        :row-style="{height:'50px'}"
        :cell-style="{padding:'0 0'}"
      >
        <el-table-column
          #default="scope"
          fixed="left"
        >
          [{{ scope.row.time }}] {{ scope.row.name }}
        </el-table-column>
        <el-table-column
          #default="scope"
          width="250px"
        >
          {{ scope.row.content }}
        </el-table-column>
        <el-table-column
          #default="scope"
          width="100px"
        >
          <el-tag size="medium">{{ scope.row.status }}</el-tag>
        </el-table-column>
        <el-table-column fixed="right" width="50px">
          <el-button type="text" size="mini">
            更多
          </el-button>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="34"
          background
        />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UserLogs',
  data() {
    return {
      announcement: [
        {
          content: '考试',
          name: '春学期期末考试2-1',
          status: '考试',
          time: '2022-3-12'
        },
        {
          content: '考试进行中',
          name: '春学期期末考试1-1',
          status: '考试',
          time: '2022-3-09'
        },
        {
          content: '考试完成',
          name: '春学期期末考试1-1',
          status: '考试',
          time: '2022-3-09'
        },
        {
          content: '等待处理',
          name: '软嵌222有新的学生 test 加入',
          status: '学生',
          time: '2022-3-09'
        },
        {
          content: '等待处理',
          name: '软嵌222有新的学生 test2 加入',
          status: '学生',
          time: '2022-3-09'
        }
      ],
      currentPage4: 1
    }
  }
}
</script>

<style scoped>
#contain{
  /*background-color: #ffffff;*/
  /*padding: 10px 20px 20px;*/
}

h2{
  text-align: center;
  color: #5a5e66;
}
.container{
  height:400px
}
.block{
  margin-top: 15px;
}
</style>
