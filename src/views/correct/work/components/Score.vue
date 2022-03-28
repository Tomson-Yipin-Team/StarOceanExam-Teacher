<template>
  <div>
    <!--学生信息-->
    <el-descriptions label-class-name="item" border :column="1" :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS ">
      <el-descriptions-item label="学生姓名">{{ students[form.correctNumber].name }}</el-descriptions-item>
      <el-descriptions-item label="当前学生">{{ form.correctNumber+1 }} / {{ students.length }}</el-descriptions-item>
    </el-descriptions>
    <!--评分控件-->
    <el-form label-width="50px">
      <el-form-item label="分数">
        <el-input v-model="form.score">
          <template slot="append">/ 10 分</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button type="primary" plain @click="previousStudent">上一个</el-button>
          <el-button type="primary" @click="nextStudent">下一个</el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="warning" @click="reportStudent">报告</el-button>
          <el-button class="drawer-button" @click="openDrawer">批注</el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import classrooms from '@/api/classrooms'
export default {
  name: 'Score',
  data() {
    return {
      descriptionsPram: {
        CS: {
          'text-align': 'center', // 文本居中
          'min-width': '250px', // 最小宽度
          'word-break': 'break-all'
        },
        LS: {
          // 'color': '#000',
          'text-align': 'center',
          'font-weight': '600',
          'height': '40px',
          // 'background-color': 'rgba(255, 97, 2, 0.1)',
          'min-width': '110px',
          'word-break': 'keep-all'
        }
      },
      form: {
        score: '',
        correctNumber: 0
      },
      students: classrooms.students,
      content: ''
    }
  },
  methods: {
    nextStudent() {
      if (this.form.correctNumber < this.students.length - 1) {
        this.form.correctNumber += 1
      }
    },
    previousStudent() {
      if (this.form.correctNumber > 0) {
        this.form.correctNumber -= 1
      }
    },
    reportStudent() {
      this.$confirm('这将会将该学生报告给教学秘书，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '报告成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        })
      })
    },
    openDrawer() {
      this.$emit('open', true)
    }
  }
}
</script>

<style>

</style>
<style scoped>

</style>
