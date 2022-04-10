<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <!--学生信息-->
    <el-descriptions label-class-name="item" border :column="1" :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
      <el-descriptions-item label="学生姓名">{{ students[form.correctNumber].name }}</el-descriptions-item>
      <el-descriptions-item label="当前学生">{{ form.correctNumber+1 }} / {{ students.length }}</el-descriptions-item>
    </el-descriptions>
    <!--评分控件-->
    <el-form label-width="120px" class="form">
      <!--分数显示-->
      <el-form-item label="分数">
        <el-col :span="12">
          <el-input v-model="form.score[form.correctNumber]">
            <template slot="append"> / 10 分</template>
          </el-input>
        </el-col>
      </el-form-item>
      <!--操作区域-->
      <el-form-item label="显示原题">
        <el-switch v-model="form.show.question" />
      </el-form-item>
      <el-form-item label="显示参考答案">
        <el-switch v-model="form.show.trueAnswer" />
      </el-form-item>
      <el-form-item label="切换题目">
        <el-button type="primary" plain @click="nextStudent">上一题</el-button>
        <el-button type="primary" @click="nextStudent">下一题</el-button>
      </el-form-item>
      <el-form-item label="切换学生">
        <el-button type="primary" plain @click="previousStudent">上一个</el-button>
        <el-button type="primary" @click="nextStudent">下一个</el-button>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="warning" @click="reportStudent">报告</el-button>
        <el-button class="drawer-button" @click="openDrawer">批注</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import classrooms from '@/api/classrooms'
import ClassInfo from '@/api/class-info'
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
        score: [],
        correctNumber: 0,
        show: {
          question: true,
          trueAnswer: true
        }
      },
      students: ClassInfo.students,
      content: ''
    }
  },
  watch: {
    form: {
      immediate: true,
      deep: true,
      handler(newValue) {
        console.log(newValue)
        this.$emit('status', this.form.show)
      }
    }
  },
  methods: {
    nextStudent() {
      if (this.form.correctNumber < this.students.length - 1) {
        this.form.correctNumber += 1
      }
      this.$emit('chang-number', this.form.correctNumber)
    },
    previousStudent() {
      if (this.form.correctNumber > 0) {
        this.form.correctNumber -= 1
      }
      this.$emit('change-number', this.form.correctNumber)
    },
    reportStudent() {
      this.$confirm('这将会将该学生的试卷报告给课程组组长，是否继续？', '提示', {
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

<style scoped>
.form{
  margin-top: 20px;
}
</style>
