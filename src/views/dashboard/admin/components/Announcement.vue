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
          content: '初始化完成',
          status: '完成',
          time: '2022-3-12'
        },
        {
          content: '部署完成，欢迎使用考试管理系统',
          status: '完成',
          time: '2022-3-09'
        },
        {
          content: '部署完成，欢迎使用考试管理系统',
          status: '完成',
          time: '2022-3-09'
        },
        {
          content: '部署完成，欢迎使用考试管理系统',
          status: '完成',
          time: '2022-3-09'
        },
        {
          content: '部署完成，欢迎使用考试管理系统',
          status: '完成',
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
  height: 400px;
  margin-bottom: 20px;
}
.block{
  margin-top: 15px;
}
</style>
