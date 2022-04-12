<template>
  <div id="contain">
    <el-card header="公告" class="container">
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
        >
          [{{ scope.row.time }}] {{ scope.row.content }}
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
          :total="10"
          background
        />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Announcement',
  data() {
    return {
      announcement: [
        {
          content: '各位老师，本周日我们将再次进行一场考试来测试系统',
          status: '完成',
          time: '2022-3-05'
        },
        {
          content: '昨晚的考试已圆满完成，感谢大家的参与',
          status: '完成',
          time: '2022-3-04'
        },
        {
          content: '今晚我们将进行第一次系统测试，请各位老师注意查看',
          status: '完成',
          time: '2022-3-03'
        },
        {
          content: '欢迎各位老师使用我们的考试系统',
          status: '完成',
          time: '2022-3-02'
        },
        {
          content: '部署完成，考试管理系统已上线',
          status: '完成',
          time: '2022-3-02'
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
  height: 400px;
  margin-bottom: 20px;
}
.block{
  margin-top: 15px;
}
</style>
