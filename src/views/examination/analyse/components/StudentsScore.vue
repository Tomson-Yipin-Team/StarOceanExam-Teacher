<template>
  <div>
    <el-card style="height: 900px">
      <el-button>导出所有成绩</el-button>
      <!--表格-->
      <el-table ref="scoreTable" :data="students" max-height="800px">
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
        <el-table-column label="该题型的班级平均分" prop="avgscore" />
        <el-table-column label="该生的该项分数" prop="score" width="200px" />
        <!-- <el-table-column label="操作" width="200px" fixed="right">
          <el-button>查看原卷</el-button> -->
      </el-table>
      <el-row type="flex" justify="end">
        <el-button type="primary" plain style="margin: 10px">
          导出该名学生的成绩
          <svg-icon icon-class="share" />
        </el-button>
      </el-row>
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
