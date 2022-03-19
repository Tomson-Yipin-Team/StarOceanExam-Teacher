<template>
  <div id="contain">
    <el-card header="用户日志">
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
          width="250px"
        >
          [{{ scope.row.time }}] {{ scope.row.name }}
        </el-table-column>
        <el-table-column
          #default="scope"
        >
          <el-tag size="mini">{{ scope.row.status }}</el-tag>
        </el-table-column>
        <el-table-column fixed="right" width="50px">
          <el-button type="text" size="mini">
            更多
          </el-button>
        </el-table-column>
      </el-table>
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
          content: '考试完成',
          name: '春学期期末考试2-1',
          status: '考试进行中',
          time: '2022-3-12'
        },
        {
          content: '考试完成',
          name: '春学期期末考试1-1',
          status: '完成',
          time: '2022-3-09'
        }
      ]
    }
  }
}
</script>

<style scoped>
#contain{
  background-color: #ffffff;
  padding: 10px 20px 20px;
}

h2{
  text-align: center;
  color: #5a5e66;
}

</style>
