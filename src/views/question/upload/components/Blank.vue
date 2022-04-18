<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <!--el标签页-->
      <el-tabs v-model="activeName" v-loading="show.tabLoading">
        <!--编辑题目页面-->
        <el-tab-pane label="编辑题目" name="edit">
          <!--题目-->
          <div class="markdown-container">
            <markdown-editor
              v-if="show.markdown"
              ref="markdownEditor"
              v-model="content"
              language="zh"
              :options="{hideModeSwitch:true,previewStyle: 'tab'}"
              height="400px"
            />
          </div>
          <el-divider />
          <el-row>答案</el-row>
          <!--编辑答案-->
          <div class="markdown-container">
            <markdown-editor
              v-if="show.markdown"
              ref="markdownEditor"
              v-model="correct"
              language="zh"
              :options="{hideModeSwitch:true,previewStyle: 'tab'}"
              height="200px"
              class="markdown"
            />
          </div>

        </el-tab-pane>

        <!--预览题目-->
        <el-tab-pane label="预览" name="preview">
          <div class="editor-container">
            <Viewer v-if="show.markdown" :initial-value="previewContent" height="500px" />
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

export default {
  name: 'Blank',
  components: { Viewer, MarkdownEditor },
  data() {
    return {
      content: '',
      editorOptions: {
        hideModeSwitch: false,
        language: 'zh-CN'
      },
      activeName: 'edit',
      show: {
        tabLoading: false,
        markdown: true
      },
      question: questionContent.timuku[0].questions[2]
    }
  },
  computed: {
    correct: {
      get() {
        return this.question.correct
      },
      set(value) {
        this.question.correct = value
      }
    },
    previewContent() {
      return '## 题目\n' + this.content
    }
  },
  watch: {
    content: {
      immediate: true,
      handler(newValue) {
        this.content = this.question.content
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
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 20px;
}
.markdown-container{
  margin-top: 20px;
}
</style>
