<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑试卷</span>
      </div>
      <el-row class="button" type="flex" justify="end" />
      <el-row>
        <el-col :span="6">
          <el-button-group>
            <el-button @click="getNextPage">下一题</el-button>
            <el-button @click="getPreviousPage">上一题</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="10" :offset="8">
          <el-button type="primary" @click="changeMode">切换显示</el-button>
          <el-button type="primary" plain @click="editQuestion">编辑题目</el-button>
        </el-col>
      </el-row>
      <!--内容显示-->
      <el-row>
        <viewer v-if="seeMode" :key="questionNumber" :initial-value="content" height="500px" />
        <viewer v-if="!seeMode" :initial-value="allContent" height="500px" />
      </el-row>
    </el-card>
  </div>
</template>

<script>
// 题目内容
import questionContent from '@/api/question-content'

import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Viewer } from '@toast-ui/vue-editor'

export default {
  name: 'Upload',
  components: { Viewer },
  data() {
    return {
      questionNumber: 0,
      content: '',
      editorOptions: '',
      category: '',
      selectContent: '',
      seeMode: true
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
  methods: {
    // 下一题
    getNextPage() {
      this.questionNumber += 1
    },
    // 上一题
    getPreviousPage() {
      if (this.questionNumber > 1) { this.questionNumber -= 1 }
    },
    // 切换显示模式
    changeMode() {
      this.seeMode = !this.seeMode
    },
    editQuestion() {
      console.log('修改题目')
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 20px;
}
</style>
