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
          width="500"
        >
          [{{ scope.row.time }}] {{ scope.row.content }}
        </el-table-column>
        <el-table-column prop="origin" />
        <el-table-column #default="scope" fixed="right" width="50px">
          <el-button type="text" size="mini" @click="openDetail(scope.row)">
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
    <!--  更多信息-->
    <el-dialog
      :title="detail.title"
      :visible.sync="showDetail"
    >
      <div class="detail-content">
        {{ detail.content }}
      </div>
      <div class="detail-origin">
        <span> 来源： {{ detail.origin }} </span>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'Announcement',
  data() {
    return {
      detail: {
        title: '详情',
        content: '内容详情',
        origin: ''
      },
      showDetail: false,
      announcement: [
        {
          content: '各位老师，本周日我们将再次进行一场考试来测试系统',
          status: '完成',
          time: '2022-3-05',
          origin: '大学英语（四）课程组-张建国',
          detail: '各位老师，本周日我们将再次进行一场考试来测试系统，这次将进行2019年6月的四级考试的测试，请通知学生按时参加模拟考试！'
        },
        {
          content: '昨晚的考试已圆满完成，感谢大家的参与',
          status: '完成',
          time: '2022-3-04',
          origin: '大学英语（四）课程组-张建国'
        },
        {
          content: '今晚我们将进行第一次系统测试，请各位老师注意查看',
          status: '完成',
          time: '2022-3-03',
          origin: '大学英语（四）课程组-张建国'
        },
        {
          content: '欢迎各位老师使用我们的考试系统',
          status: '完成',
          time: '2022-3-02',
          origin: 'System'
        },
        {
          content: '部署完成，考试管理系统已上线',
          status: '完成',
          time: '2022-3-02',
          origin: 'System'
        }
      ],
      currentPage4: 1
    }
  },
  methods: {
    openDetail(row) {
      this.detail.title = '[' + row.time + ']  ' + row.content
      this.detail.content = row.detail
      this.detail.origin = row.origin
      this.showDetail = true
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

.detail-content{
  font-size: 15px;
  line-height: 30px;
}
.detail-origin{
  margin-top:20px;
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
}
</style>
