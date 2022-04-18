<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <!--el标签页-->
      <el-tabs v-model="activeName" v-loading="show.tabLoading">
        <!--编辑题目页面-->
        <el-tab-pane label="题目" name="edit">
          <div class="editor-container">
            <markdown-editor
              v-if="show.markdown"
              ref="markdownEditor"
              v-model="content"
              language="zh"
              :options="{hideModeSwitch:true,previewStyle: 'tab'}"
              height="400px"
            />
          </div>

          <!--编辑答案-->
          <el-row v-for="(questionItem, questionIndex) in question.answers" :key="questionIndex">
            <el-divider />
            <el-row>
              答案
            </el-row>
            <el-divider />
            <div v-for="(item, index ) in questionItem" :key="index">
              <el-row v-if="index!=='correct'" style="margin-top: 20px">
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
      activeName: 'edit',
      question: questionContent.timuku[0].questions[1],
      show: {
        tabLoading: false,
        markdown: true
      }
    }
  },
  computed: {
    previewContent() {
      // let answerContent = '## 选项：\n'
      // for (const key in this.answers) {
      //   answerContent += key + ':' + this.answers[key] + '\n'
      // }
      return '123'
    }
  },
  watch: {
    content: {
      immediate: true,
      handler(newValue) {
        this.content = questionContent.timuku[0].questions[1].content
        // console.log(newValue)
      }
    }
  },
  mounted() {
    this.updatePage()
  },
  methods: {
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
.editor-container{

}
</style>
