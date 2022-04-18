<template>
  <div>
    <el-card>
      <div slot="header" class="container">
        <span>编辑试卷</span>
        <span>
          <el-button-group>
            <el-button @click="getNextPage">下一题</el-button>
            <el-button @click="getPreviousPage">上一题</el-button>
            <el-button @click="changeMode">{{ seeMode=== true?'显示完整试卷':'显示小题' }}</el-button>
            <el-button type="primary" @click="previewExam">预览考试</el-button>
          </el-button-group>
        </span>
      </div>
      <el-row class="button" type="flex" justify="end" />
      <el-row type="flex" justify="space-between">
        <span>
          您当前正在浏览<br>
          <span class="question-number">{{ questionNumber+1 }}/{{ totalNumber }}题</span>
        </span>
      </el-row>
      <el-divider />
      <!--Tabs-->
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="预览" name="preview">
          <!--听力控件-->
          <transition name="el-fade-in-linear">
            <aplayer v-if="showListenAnswer" id="audio-player" :music="audioInfo" />
          </transition>
          <!--题目-->
          <div ref="tipsViewer" class="pop-tools-parent">
            <transition name="el-fade-in-linear">
              <Viewer v-if="showTips" style="margin: 10px" :initial-value="viewerText" />
            </transition>
            <div pop-tools="删除" />
          </div>
          <el-row type="flex" justify="center">
            <transition name="el-fade-in-linear">
              <!--作文输入框-->
              <el-input
                v-if="showInput"
                v-model="editorText"
                type="textarea"
                class="answer-input"
                :rows="10"
                placeholder="请输入内容"
              />
            </transition>
          </el-row>
          <!--听力题目-->
          <div v-if="showListenAnswer">
            <div v-for="(item,index) in answers" :key="index">
              <el-row>
                <el-divider />
              </el-row>
              <el-row>
                <el-col :span="2">
                  <span id="answer-number">{{ item.content }}.</span>
                </el-col>
                <el-col :span="22">
                  <el-radio-group v-model="totalAnswer[item.content].answer">
                    <el-radio class="answer-radio" :label="item.A">{{ item.A }}</el-radio>
                    <br>
                    <el-radio class="answer-radio" :label="item.B">{{ item.B }}</el-radio>
                    <br>
                    <el-radio class="answer-radio" :label="item.C">{{ item.C }}</el-radio>
                    <br>
                    <el-radio class="answer-radio" :label="item.D">{{ item.D }}</el-radio>
                    <br>
                  </el-radio-group>
                </el-col>
              </el-row>

            </div>
          </div>
          <!--阅读理解-->
          <div v-if="showReading">
            <div v-for="(item,index) in answers" :key="index">
              <el-row>
                <el-divider />
              </el-row>
              <el-row>
                <el-col :span="24">
                  <span id="reading-answer-title">{{ item.content }}</span>
                </el-col>
                <el-col :span="24">
                  <div>
                    <el-radio-group v-model="totalAnswer[item.number].answer">
                      <el-radio class="reading-choice" :label="item.A">{{ item.A }}</el-radio>
                      <br>
                      <el-radio class="reading-choice" :label="item.B">{{ item.B }}</el-radio>
                      <br>
                      <el-radio class="reading-choice" :label="item.C">{{ item.C }}</el-radio>
                      <br>
                      <el-radio class="reading-choice" :label="item.D">{{ item.D }}</el-radio>
                      <br>
                    </el-radio-group>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <!--十五选十-->
          <div v-if="showBlanks" style="margin-top: 10px">
            <el-divider style="margin-bottom: 20px" />
            <el-row v-for="(item,key,index) in answers" :key="index">
              <el-col id="blank-number" :span="2">
                {{ item }}.
              </el-col>
              <el-col id="blank-answer" :span="4">
                <el-input v-model="totalAnswer[item].answer" />
              </el-col>
            </el-row>
          </div>
          <!--信息匹配-->
          <div v-if="showMatch" style="margin-top: 30px">
            <el-divider />
            <el-row v-for="(item,key,index) in answers" :key="index" class="match-question">
              <el-col id="match-input" :span="1">
                <el-input v-model="totalAnswer[key].answer" />
              </el-col>
              <el-col id="match-text" :span="20">
                {{ key }}. {{ item }}
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="编辑" name="edit">
          <div v-loading="!showEditor" style="height: 750px">
            <markdown-editor
              v-if="showEditor"
              ref="markdownEditor"
              v-model="viewerText"
              language="zh"
              :options="{hideModeSwitch:true,previewStyle: 'vertical'}"
              height="700px"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
// 题目内容
import questionContent from '@/api/question-content'

import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Viewer } from '@toast-ui/vue-editor'
import markdownEditor from '@/components/MarkdownEditor'
import PaperContent from '@/api/exam-content'
import APlayer from 'vue-aplayer'
import '@toast-ui/editor/dist/i18n/zh-cn.js'

export default {
  name: 'Upload',
  components: { Viewer, markdownEditor, aplayer: APlayer },
  data() {
    return {
      showEditor: false,
      questionNumber: 0,
      content: '',
      category: '',
      selectContent: '',
      seeMode: true,
      totalNumber: this.$route.query.number,
      activeName: 'preview',
      // 试卷部分
      activeNames: ['answers'],
      paper: PaperContent.englishExam,
      questionIndex: 0,
      viewerText: '',
      editorText: '',
      showTips: false,
      showQuestion: false,
      showInput: false,
      showListenAnswer: false,
      showBlanks: false,
      showMatch: false,
      showReading: false,
      showHighLighter: false,
      question: {},
      number: 0,
      highLighterSource: [],
      answers: [],
      questionName: PaperContent.qusitonName,
      // chooseAnswer: {},
      // audioInfo: {},
      // blankAnswer: {},
      // matchAnswer: {},
      totalAnswer: [],
      showCommentDrawer: false,
      toolsCategory: 'pencil'
    }
  },
  // TODO：更改生成完整试卷的逻辑(生成标题和题目)
  computed: {
    allContent() {
      let content = ''
      for (const x in questionContent.question) {
        // console.log(x)
        content = content + '\n' + questionContent.question[x].question
      }
      // console.log(content)
      return content
    }
  },
  watch: {
    activeName(newValue) {
      if (newValue === 'edit') {
        setTimeout(() => {
          this.showEditor = true
        }, 1000)
      } else if (newValue === 'preview') {
        this.showEditor = false
      }
    },
    editorText: {
      immediate: false,
      // 计算字数
      handler(newString) {
        newString = newString.replace(/[\u4e00-\u9fa5]+/g, ' ')
        newString = newString.replace(/\n|\r|^\s+|\s+$/gi, '')
        newString = newString.replace(/\s+/gi, ' ')
        let length = 0
        const match = newString.match(/\s/g)
        if (match) {
          length = match.length + 1
        } else if (newString) {
          length = 1
        }
        // console.log(this.totalAnswer[this.question.name])
        this.totalAnswer[this.question.name].answer = this.editorText
        this.number = length
      }
    },
    questionIndex: {
      immediate: true,
      handler() {
        this.question = this.paper.question[this.questionIndex]
        this.answers = this.question.answers
        this.updateQuestion()
      }
    },
    questionNumber: {
      immediate: true,
      handler(newValue) {
        // console.log('跳转第' + newValue + '题')
        // console.log(questionContent.question[newValue])
        this.content = questionContent.question[newValue].question
        this.category = questionContent.question[newValue].category
      }
    }
  },
  mounted() {
    this.updateQuestion()
    this.createAnswer()
  },
  methods: {
    // 更新题目
    updateQuestion() {
      this.showTips = false
      this.showInput = false
      this.showQuestion = false
      this.showListenAnswer = false
      this.showBlanks = false
      this.showMatch = false
      this.showReading = false
      // this.question = this.paper.question[this.questionIndex]

      switch (this.question.category) {
        case 'writing':
          // 写作题
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showInput = true
          }, 300)
          break
        case 'tip':
          // 提示
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
          }, 300)
          break
        case 'listen':
          // 听力题
          this.viewerText = this.question.tip
          this.audioInfo = this.question.audioInfo
          // this.answers = this.question.answers
          setTimeout(() => {
            this.showTips = true
            this.showListenAnswer = true
          }, 300)
          break
        case 'blanks':
          // 十五选十
          // this.answers = this.question.answers
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showBlanks = true
          }, 300)
          break
        case 'match':
          // 信息匹配
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showMatch = true
          }, 300)
          break
        case 'reading':
          // 阅读理解
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showReading = true
          }, 300)
      }
    },
    // 下一题
    getNextPage() {
      this.questionNumber += 1
      this.questionIndex += 1
    },
    // 上一题
    getPreviousPage() {
      if (this.questionNumber > 0) { this.questionNumber -= 1 }
      if (this.questionIndex > 0) { this.questionIndex -= 1 }
    },
    // 切换显示模式
    changeMode() {
      this.seeMode = !this.seeMode
    },
    editQuestion() {
      console.log('修改题目')
    },
    previewExam() {
      this.$router.push({
        name: 'Preview'
      })
    },
    // 听力题目标记
    changeListenMark(item) {
      this.totalAnswer[item.content].mark = !this.totalAnswer[item.content].mark
    },
    // 阅读题标记
    changeReadingMark(item) {
      this.totalAnswer[item.number].mark = !this.totalAnswer[item.number].mark
    },
    // 十五选十标记
    changeBlankMark(item) {
      this.totalAnswer[item].mark = !this.totalAnswer[item].mark
    },
    // 信息匹配标记
    changeMatchMark(key) {
      this.totalAnswer[key].mark = !this.totalAnswer[key].mark
    },
    createAnswer() {
      const answer = []
      for (let i = 0; i <= 56; i++) {
        answer[i] = {
          name: i,
          answer: '',
          mark: false
        }
      }
      answer[0].name = '写作'
      answer[56].name = '翻译'
      this.totalAnswer = answer
    }
  }
}

</script>

<style scoped>

#match-text{
  font-size: 18px;
  position: relative;
  top: -5px;
}

/*阅读理解题干*/
#reading-answer-title{
  font-size: 18px;
  margin-left: 20px;
}

.reading-choice{
  font-size: 25px;
  margin: 10px 10px 10px 80px;
}
/*信息匹配输入框*/
#match-input{
  position: relative;
  top: -10px;
  margin-right: 20px;
}
/*信息匹配题文字*/
.match-question{
  margin: 10px;
}

/*十五选十题号*/
#blank-number{
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  top:-5px;
  left: 5px;
  font-weight: bold;
  font-size: 1.2em;
}
/*十五选十输入框*/
#blank-answer{
  margin-bottom: 20px;
}

/*答案输入框*/
.answer-input{
  margin: 10px;
  width: 100%;
}

/*音频播放器*/
#audio-player{
  margin: 10px 10px 20px;
}
/*答案选择器*/
.answer-radio{
  position: relative;
  top:6px;
  left: -10px;
  margin-bottom: 20px;
}
/*题号*/
#answer-number{
  font-size: 20px;
}
#listen-mark-button{
  position: relative;
  top: -3px;
  margin-left: 10px;
  margin-right: 10px;
}
.button{
  margin-top: 20px;
}
.question-number{
  font-size: 2em;
}
.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
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
