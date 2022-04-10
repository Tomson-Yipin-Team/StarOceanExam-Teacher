<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <!--el标签页-->
      <el-tabs v-model="activeName">
        <!--编辑题目页面-->
        <!--音频组件-->
        <el-tab-pane v-loading="show.tabLoading" label="编辑题目" name="edit">
          <aPlayer
            :music="audio"
          />
          <!--题目-->
          <markdown-editor
            v-if="show.markdown"
            ref="markdownEditor"
            v-model="content"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="400px"
          />
          <el-divider />
          <el-row type="flex" justify="space-between" style="align-items: center">
            <span>添加或删除题目</span>
            <el-button-group>
              <el-button icon="el-icon-plus" round @click="addQuestion" />
              <el-button icon="el-icon-minus" round @click="deleteQuestion" />
            </el-button-group>
          </el-row>

          <!--编辑答案-->
          <el-row v-for="(questionItem, questionIndex) in question.answers" :key="questionIndex">
            <el-divider />
            <el-row>
              第 {{ questionIndex+1 }} 题
            </el-row>
            <el-divider />
            <div v-for="(item, index ) in questionItem" :key="index">
              <el-row v-if="index!=='correct'">
                <el-col :span="2">
                  <el-radio v-model="questionItem.correct" :label="index" class="answer-radio" />
                </el-col>
                <el-col :span="16">
                  <div class="editor-container">
                    <markdown-editor
                      v-if="show.markdown"
                      ref="markdownEditor"
                      v-model="questionItem[index]"
                      language="zh"
                      :options="{hideModeSwitch:true,previewStyle: 'tab'}"
                      height="100px"
                    />
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-row>
        </el-tab-pane>

        <!--预览题目-->
        <el-tab-pane label="预览" name="preview">
          <div class="editor-container">
            <Viewer :initial-value="previewContent" height="500px" />
          </div>
        </el-tab-pane>
      </el-tabs>

      <el-row class="button" type="flex" justify="end">
        <el-button type="primary" @click="saveQuestion">保存题目</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>

import 'codemirror/lib/codemirror.css'
import MarkdownEditor from '@/components/MarkdownEditor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/vue-editor'
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import questionContent from '@/api/question-content'
import aPlayer from 'vue-aplayer'

export default {
  name: 'EnglishListen',
  components: { Viewer, MarkdownEditor, aPlayer },
  data() {
    return {
      content: '',
      editorOptions: {
        hideModeSwitch: false,
        language: 'zh-CN'
      },
      activeName: 'edit',
      question: questionContent.timuku[0].questions[3],
      audio: {
        title: '测试音频',
        artist: '测试',
        src: 'http://source.jujuh.top/audio/test.mp3'
      },
      show: {
        tabLoading: false,
        markdown: true
      },
      answerExample: {
        A: '1',
        B: '2',
        C: '3',
        D: '4',
        correct: 'A'
      }
    }
  },
  computed: {
    previewContent() {
      return '123'
    }
  },
  watch: {
    content: {
      immediate: true,
      handler(newValue) {
        this.content = questionContent.timuku[0].questions[3].content
        // console.log(newValue)
      }
    }
  },
  mounted() {
    this.updatePage()
  },
  methods: {
    saveQuestion() {
      console.log('保存')
    },
    updatePage() {
      this.show.tabLoading = true
      this.show.markdown = false
      setTimeout(() => {
        this.show.tabLoading = false
        this.show.markdown = true
      }, 1000)
    },
    // 添加题目
    addQuestion() {
      this.question.answers.push(this.answerExample)
    },
    // 删除题目
    deleteQuestion() {
      if (this.question.answers.length > 1) {
        this.question.answers.splice(this.question.answers.length - 1, 1)
      } else {
        this.$notify({
          title: '警告',
          message: '请至少保留一道题目！',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 20px;
}

.answer-radio{
  margin: 10px;
  position: relative;
  top: 10px;
}
.editor-container{
  margin: 10px;
}
</style>
