<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">

        <el-card class="answer-container">
          <div slot="header">
            学生回答
          </div>
          <Answer />
        </el-card>
        <el-card v-if="show.question" class="question-container">
          <div slot="header">
            原题
          </div>
          <Question />
        </el-card>
        <el-card v-if="show.trueAnswer" class="ture-answer-container">
          <div slot="header">
            参考答案
          </div>
          <TrueAnswer />
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
          <Score @open="openDrawer" @change-number="changeNumber" @status="changeStatus" />
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
import Question from '@/views/correct/work/components/Question'
import Answer from '@/views/correct/work/components/Answer'
import TrueAnswer from '@/views/correct/work/components/TrueAnswer'
import Score from '@/views/correct/work/components/Score'
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
  name: 'Work',
  components: {
    WorkInfo,
    Question,
    Answer,
    TrueAnswer,
    Score,
    MarkdownEditor
  },
  data() {
    return {
      drawer: false,
      content: '',
      show: {
        question: true,
        trueAnswer: true
      },
      studentIndex: 0
    }
  },
  methods: {
    openDrawer(open) {
      this.drawer = open
    },
    changeNumber(number) {
      this.studentIndex = number
    },
    changeStatus(show) {
      this.show = show
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
