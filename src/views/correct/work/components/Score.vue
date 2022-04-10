<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <!--学生信息-->
    <el-descriptions label-class-name="item" border :column="1" :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
      <el-descriptions-item label="学生姓名">{{ students[form.correctNumber].name }}</el-descriptions-item>
      <el-descriptions-item label="当前学生">{{ form.correctNumber+1 }} / {{ students.length }}</el-descriptions-item>
      <el-descriptions-item label="当前题目">{{ questionIndex + 1 }} / {{ correctContent.question.length }}</el-descriptions-item>
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
        <el-button type="primary" plain @click="previousQuestion">上一题</el-button>
        <el-button type="primary" @click="nextQuestion">下一题</el-button>
        <el-button @click="openAllQuestion">查看全部题目</el-button>
      </el-form-item>
      <el-form-item label="切换学生">
        <el-button type="primary" plain @click="previousStudent">上一个</el-button>
        <el-button type="primary" @click="nextStudent">下一个</el-button>
        <el-button @click="openAllStudent">查看全部学生</el-button>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="warning" @click="reportStudent">报告</el-button>
        <el-button class="drawer-button" @click="openDrawer">批注</el-button>
      </el-form-item>
    </el-form>
    <!--查看全部学生-->
    <el-dialog
      title="学生"
      :visible.sync="showAllStudents"
      width="50%"
    >
      <el-table :data="students">
        <el-table-column label="学生id" prop="id" />
        <el-table-column label="学生姓名" prop="name" />
        <el-table-column #default="scope" label="操作" width="100" fixed="right">
          <el-button type="text" @click="jumpStudent(scope.$index)">跳转</el-button>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!--查看全部题目-->
    <el-dialog
      title="题目"
      :visible.sync="showAllQuesiton"
      width="50%"
    >
      <el-table :data="correctContent.question">
        <el-table-column label="题目id" prop="questionId" />
        <el-table-column label="题目类型" prop="category" />
        <el-table-column #default="scope" label="题干">
          {{ scope.row.content.slice(0,10) }}...
        </el-table-column>
        <el-table-column #default="scope" label="操作" width="100" fixed="right">
          <el-button type="text" @click="jumpQuestion(scope.$index)">跳转</el-button>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
// import classrooms from '@/api/classrooms'
import ClassInfo from '@/api/class-info'
import CorrectContent from '@/api/correct-content'

export default {
  name: 'Score',
  data() {
    return {
      showAllQuesiton: false,
      showAllStudents: false,
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
          trueAnswer: true,
          answerContent: true,
          questionContent: true,
          trueContent: true,
          answer: true
        }
      },
      students: ClassInfo.students,
      content: '',
      correctContent: CorrectContent,
      questionIndex: 0
    }
  },
  watch: {
    form: {
      immediate: true,
      deep: true,
      handler(newValue) {
        // console.log(newValue)
        this.$emit('status', this.form.show)
      }
    }
  },
  mounted() {
    this.$emit('change-question', this.questionIndex)
    this.$emit('change-number', this.form.correctNumber)
  },
  methods: {
    jumpQuestion(index) {
      this.questionIndex = index
      this.$emit('change-question', this.questionIndex)
      this.showAllQuesiton = false
    },
    jumpStudent(index) {
      this.form.correctNumber = index
      this.$emit('change-number', this.form.correctNumber)
      this.showAllStudents = false
    },
    openAllQuestion() {
      this.showAllQuesiton = true
    },
    openAllStudent() {
      this.showAllStudents = true
    },
    // 下一个学生
    nextStudent() {
      if (this.form.correctNumber < this.students.length - 1) {
        this.form.correctNumber += 1
      }
      this.$emit('change-number', this.form.correctNumber)
    },
    // 上一个学生
    previousStudent() {
      if (this.form.correctNumber > 0) {
        this.form.correctNumber -= 1
      }
      this.$emit('change-number', this.form.correctNumber)
    },
    // 报告学生
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
    // 打开抽屉
    openDrawer() {
      this.$emit('open', true)
    },
    // 下一道题目
    nextQuestion() {
      if (this.questionIndex < this.correctContent.question.length - 1) {
        this.questionIndex += 1
      }
      // console.log(this.correctContent.question.length)
      this.$emit('change-question', this.questionIndex)
    },
    // 上一道题目
    previousQuestion() {
      if (this.questionIndex > 0) {
        this.questionIndex -= 1
      }
      this.$emit('change-question', this.questionIndex)
    }
  }
}
</script>

<style scoped>
.form{
  margin-top: 20px;
}
</style>
