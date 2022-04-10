<template>
  <div>
    <el-card style="height: 450px">
      <el-button>导出所有成绩</el-button>
      <!--表格-->
      <el-table ref="scoreTable" :data="students">
        <el-table-column label="姓名" fixed width="120" prop="name" />
        <el-table-column label="学号" width="120" prop="id" />
        <el-table-column label="总分数" prop="totalScore" />
        <el-table-column #default="scope" label="操作" fixed="right" width="150px">
          <el-button-group>
            <el-button icon="el-icon-search" circle @click="handleSubScore(scope.$index,scope.row)" />
            <el-button type="primary" plain icon="el-icon-edit" circle />
          </el-button-group>
        </el-table-column>
      </el-table>
    </el-card>
    <!--小题分-->
    <el-dialog
      :visible.sync="showDialog"
      width="50%"
    >
      <div slot="title">
        {{ studentName }}的成绩
      </div>
      <el-table :data="singleStudent">
        <el-table-column label="题型" prop="name" />
        <!-- <el-table-column label="名称" prop="name" /> -->
        <el-table-column label="该生的该项分数" prop="score" fixed="right" width="200px" />
        <!-- <el-table-column label="操作" width="200px" fixed="right">
          <el-button>查看原卷</el-button> -->
      </el-table>
      <el-button>导出该名学生的成绩</el-button>
    </el-dialog>
  </div>
</template>

<script>
import correctedStudents from '@/api/corrected-students'
export default {
  name: 'StudentsScore',
  data() {
    return {
      students: correctedStudents.finished,
      showDialog: false,
      singleStudent: [],
      studentName: ''
    }
  },
  methods: {
    handleSubScore(index, row) {
      console.log(row)
      this.singleStudent = row.subScore
      this.studentName = row.name
      this.showDialog = true
    }
  }
}
</script>

<style scoped>

</style>
