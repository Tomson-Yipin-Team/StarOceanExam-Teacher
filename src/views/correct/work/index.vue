<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">

        <el-card class="answer-container">
          <div slot="header">
            学生回答
          </div>
          <div v-loading="loading.answer" element-loading-text="加载内容中" style="min-height: 300px">
            <transition name="el-fade-in-linear">
              <Viewer v-if="show.answerContent" :initial-value="studentAnswerContent" />
            </transition>
          </div>
        </el-card>
        <el-card v-if="show.question" class="question-container">
          <div slot="header">
            原题
          </div>
          <div v-loading="loading.question" element-loading-text="加载内容中" style="min-height: 200px">
            <transition name="el-fade-in-linear">
              <Viewer v-if="show.questionContent" :initial-value="questionContent" height="500px" />
            </transition>
          </div>
        </el-card>
        <el-card v-if="show.trueAnswer" class="ture-answer-container">
          <div slot="header">
            参考答案
          </div>
          <div v-loading="loading.trueAnswer" element-loading-text="加载内容中" style="min-height: 200px">
            <transition name="el-fade-in-linear">
              <Viewer v-if="show.trueContent" :initial-value="trueAnswerContent" height="500px" />
            </transition>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <el-card :body-style="{padding:'0px'}" class="info-container">
          <div slot="header">
            试卷信息
          </div>
          <WorkInfo />
        </el-card>
        <el-card :body-style="{padding:'0px'}" class="action-container">
          <div slot="header">
            <el-row class="title-text">
              <el-col :span="4">评分</el-col>
            </el-row>
          </div>
          <Score @open="openDrawer" @change-number="changeNumber" @status="changeStatus" @change-question="changeQuestion" />
        </el-card>
      </el-col>
    </el-row>
    <el-drawer
      title="批注"
      :visible.sync="drawer"
      direction="btt"
      size="50%"
    >
      <markdown-editor
        ref="markdownEditor"
        v-model="content"
        language="zh"
        :options="{hideModeSwitch:true,previewStyle: 'tab'}"
        height="80%"
        class="markdown-editor"
      />
      <el-button type="primary">保存</el-button>
    </el-drawer>
  </div>
</template>

<script>
import WorkInfo from '@/views/correct/work/components/WorkInfo'
import Score from '@/views/correct/work/components/Score'
import MarkdownEditor from '@/components/MarkdownEditor'
import CorrectContent from '@/api/correct-content'
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'codemirror/lib/codemirror.css'
import { Viewer } from '@toast-ui/vue-editor'

export default {
  name: 'Work',
  components: {
    WorkInfo,
    Score,
    MarkdownEditor,
    Viewer
  },
  data() {
    return {
      drawer: false,
      content: '',
      show: {
        question: true,
        trueAnswer: true,
        answerContent: true,
        questionContent: true,
        trueContent: true,
        answer: true
      },
      studentIndex: 0,
      questionIndex: 0,
      studentAnswerContent: '',
      questionContent: '',
      questions: CorrectContent.question,
      students: CorrectContent.studentAnswer,
      currentStudent: {},
      trueAnswerContent: '',
      loading: {
        question: false,
        answer: false,
        trueAnswer: false
      }
    }
  },
  // watch: {
  //   studentIndex: {
  //     handle(newValue) {
  //       console.log(newValue)
  //       this.show.answer = false
  //       this.currentStudent = this.students[this.studentIndex]
  //       this.studentAnswerContent = this.currentStudent.answer[this.questionIndex].content
  //       setTimeout(() => {
  //         this.show.answer = true
  //         this.show.answerContent = false
  //       }, 2000)
  //     }
  //   }
  // },
  methods: {
    openDrawer(open) {
      this.drawer = open
    },
    // 更改学生
    changeNumber(number) {
      this.studentIndex = number
      this.loading.answer = true
      this.show.answerContent = false
      this.currentStudent = this.students[this.studentIndex]
      this.studentAnswerContent = this.currentStudent.answer[this.questionIndex].content
      setTimeout(() => {
        this.loading.answer = false
        this.show.answerContent = true
      }, 1000)
    },
    changeStatus(show) {
      this.show = show
    },
    // 改变题目
    changeQuestion(number) {
      this.loading.answer = true
      this.show.answerContent = false
      this.loading.question = true
      this.loading.trueAnswer = true
      this.show.questionContent = false
      this.show.trueContent = false
      this.questionIndex = number
      this.currentStudent = this.students[this.studentIndex]
      this.studentAnswerContent = this.currentStudent.answer[this.questionIndex].content
      this.questionContent = this.questions[this.questionIndex].content
      this.trueAnswerContent = this.questions[this.questionIndex].trueAnswer
      setTimeout(() => {
        this.loading.answer = false
        this.show.answerContent = true
        this.loading.question = false
        this.loading.trueAnswer = false
        this.show.questionContent = true
        this.show.trueContent = true
      }, 1000)
    }
  }
}
</script>

<style scoped>
.title-text{
  display: flex;
  justify-content: left;
  align-items: center;
}
.markdown-editor{
  margin-left: 20px;
  margin-right: 20px;
}

.action-container{
  margin: 10px;
}

.question-container{
  margin: 10px;
}
.ture-answer-container{
  margin: 10px;
}
.answer-container{
  margin: 10px;
}
.info-container{
  margin: 10px;
}
</style>

<style>
.toastui-editor-contents {
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-family: '微软雅黑','Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
  z-index: 20;
}
</style>
