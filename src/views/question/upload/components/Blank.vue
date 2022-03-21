<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <!--el标签页-->
      <el-tabs v-model="activeName">
        <!--编辑题目页面-->
        <el-tab-pane label="编辑题目" name="edit">
          <!--题目-->
          <markdown-editor
            ref="markdownEditor"
            v-model="content"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="400px"
          />
          <el-divider />
          <el-row>答案</el-row>
          <!--编辑答案-->
          <markdown-editor
            ref="markdownEditor"
            v-model="correct"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="200px"
          />
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
      activeName: 'edit'
    }
  },
  computed: {
    correct: {
      get() {
        return questionContent.timuku[0].questions[2].correct
      },
      set(value) {
        questionContent.timuku[0].questions[2].correct = value
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
        this.content = questionContent.timuku[0].questions[2].content
        console.log(newValue)
      }
    }
  },
  methods: {
    saveQuestion() {
      console.log('保存')
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 20px;
}
</style>
