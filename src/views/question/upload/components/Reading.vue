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
          <markdown-editor
            v-if="show.markdown"
            ref="markdownEditor"
            v-model="content"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="400px"
          />

          <el-divider />
          <el-form label-width="150px">
            <el-form-item label="添加或删除选项">
              <el-button-group>
                <el-button icon="el-icon-plus" @click="addQuestion" />
                <el-button icon="el-icon-minus" @click="deleteQuestion" />
              </el-button-group>
            </el-form-item>
            <!--<el-form-item label="小题题干">-->
            <!--  <el-switch v-model="choiceContent" />-->
            <!--</el-form-item>-->
            <!--<el-form-item label="启用多选">-->
            <!--  <el-switch v-model="multiply" />-->
            <!--</el-form-item>-->
          </el-form>

          <!--编辑答案-->
          <el-row v-for="(questionItem, questionIndex) in answers" :key="questionIndex">
            <el-divider />
            <el-row>
              第 {{ questionIndex+1 }} 题
            </el-row>
            <div>
              <markdown-editor
                v-if="choiceContent"
                ref="markdownEditor"
                v-model="questionItem.content"
                language="zh"
                :options="{hideModeSwitch:true,previewStyle: 'tab'}"
                height="100px"
                class="editor-container"
              />
            </div>
            <el-divider />
            <div v-for="(item, index ) in questionItem" :key="index">
              <el-row v-if="radioControl(index)">
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
  name: 'Choice',
  components: { Viewer, MarkdownEditor },
  data() {
    return {
      content: '',
      editorOptions: {
        hideModeSwitch: false,
        language: 'zh-CN'
      },
      activeName: 'edit',
      answers: questionContent.timuku[4].questions[0].answers,
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
      },
      multiply: false,
      choiceContent: true
    }
  },
  computed: {
    previewContent() {
      // let answerContent = '## 选项：\n'
      // for (const key in this.answers) {
      //   answerContent += key + ':' + this.answers[key] + '\n'
      // }
      return '12'
    }
  },
  watch: {
    content: {
      immediate: true,
      handler(newValue) {
        this.content = questionContent.timuku[4].questions[0].content
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
    },
    // 添加题目
    addQuestion() {
      this.answers.push(this.answerExample)
    },
    // 删除题目
    deleteQuestion() {
      if (this.answers.length > 1) {
        this.answers.splice(this.answers.length - 1, 1)
      } else {
        this.$notify({
          title: '警告',
          message: '请至少保留一道题目！',
          type: 'warning'
        })
      }
    },
    radioControl(index) {
      if (index === 'content' || index === 'correct') {
        return false
      } else {
        return true
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
