<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <!--el标签页-->
      <el-tabs v-model="activeName">
        <!--编辑题目页面-->
        <el-tab-pane label="题目" name="edit">
          <markdown-editor
            ref="markdownEditor"
            v-model="content"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="400px"
          />
          <!--答案-->
          <el-row v-for="(item, index) in answers" :key="index">
            <!--判断选项-->
            <el-col :span="2">
              <el-button>{{ index }}</el-button>
            </el-col>
            <el-col :span="16">
              <markdown-editor
                ref="markdownEditor"
                v-model="answers[index]"
                language="zh"
                :options="{hideModeSwitch:true,previewStyle: 'tab'}"
                height="100px"
              />
            </el-col>
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
        <el-button type="primary">保存题目</el-button>
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
  name: 'Judge',
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
    answers: {
      get() {
        return questionContent.timuku[0].questions[1].answers
      },
      set(value) {
        questionContent.timuku[0].questions[1].answers = value
      }
    },
    previewContent() {
      let answerContent = '## 选项：\n'
      for (const key in this.answers) {
        answerContent += key + ':' + this.answers[key] + '\n'
      }
      return '## 题目\n' + this.content + '\n' + answerContent
    }
  },
  watch: {
    content: {
      immediate: true,
      handler(newValue) {
        this.content = questionContent.timuku[0].questions[1].content
        console.log(newValue)
      }
    }
  }
}
</script>

<style scoped>

</style>
