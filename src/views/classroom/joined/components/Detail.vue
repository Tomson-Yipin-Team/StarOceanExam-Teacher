<template>
  <div>
    <el-card style="margin:20px;">
      <el-page-header content="班级信息" style="margin-bottom: 20px" @back="goBack" />
      <el-table
        :data="classDetail"
        width="100%"
        border
      >
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
          fixed="left"
        />
        <el-table-column
          prop="number"
          label="学号"
          sortable
          width="200"
        />
        <el-table-column
          prop="sex"
          label="性别"
          width="180"
        />
        <el-table-column
          prop="identity"
          label="身份"
          width="180"
        />
        <el-table-column
          prop="date"
          label="加入时间"
          sortable
          width="200"
        />
        <el-table-column
          prop="class"
          label="所属班级"
        />
        <el-table-column
          #default="scope"
          prop="info"
          label="个人信息"
          width="150"
          fixed="right"
        >
          <template>
            <el-button-group>
              <el-button
                size="mini"
                type="primary"
                @click="handleSee(scope.row)"
              >查看</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index)"
              >删除</el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
      title="学生详情"
      :visible.sync="showStudent"
    >
      <el-row type="flex" justify="center" align="center">
        <el-col :span="8">
          <div class="student-container">
            <div><el-avatar src="https://lsky-picture.stdcdn.com/uploads/2022/04/2e9cb67423cf581b0486a430511feeb2.jpg" :size="100" shape="circle" /></div>
            <div id="name">{{ studentInfo.name }}</div>
            <div id="class">{{ studentInfo.classroom }}</div>
          </div>
        </el-col>
        <el-col :span="16" type="flex" justify="center">

          <el-descriptions :column="1" border>
            <el-descriptions-item label="用户名">{{ studentInfo.userName }}</el-descriptions-item>
            <el-descriptions-item label="姓名">{{ studentInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="学号">{{ studentInfo.number }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{ studentInfo.sex }}</el-descriptions-item>
            <el-descriptions-item label="加入时间">{{ studentInfo.date }}</el-descriptions-item>
            <el-descriptions-item label="加入班级">{{ studentInfo.classroom }}</el-descriptions-item>
          </el-descriptions>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import classdetail from '@/api/classdetail'
export default {
  data() {
    return {
      classDetail: classdetail.Students,
      showStudent: false,
      studentInfo: {
        name: '',
        classroom: '',
        userName: 'ZhangHome',
        email: '12345656@example.com',
        sex: '',
        date: '',
        number: 0
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: '首页' })
    },
    handleDelete(index) {
      this.$confirm('即将删除该名学生, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.classDetail.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSee(row) {
      this.studentInfo.name = row.name
      this.studentInfo.classroom = row.class
      this.studentInfo.number = row.number
      this.studentInfo.date = row.date
      this.studentInfo.sex = row.sex
      this.showStudent = true
    }
  }
}

</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
.el-row {
    margin-bottom: 20px;
  }

#name{
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
}
.student-container{
  display: inline-block;
  text-align: center;
  position: relative;
  top: 15%;
  left: 30%;
}
</style>
