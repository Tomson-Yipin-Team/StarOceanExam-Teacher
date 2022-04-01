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
        <el-tab-pane label="编辑题目" name="edit">
          <aPlayer
            :music="audio"
          />
          <!--题目-->
          <markdown-editor
            ref="markdownEditor"
            v-model="content"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="400px"
          />
          <el-divider />
          <!--编辑答案-->
          <el-row v-for="(questionItem, questionIndex) in question.answers" :key="questionIndex">
            <el-row>
              第 {{ questionIndex+1 }} 题
            </el-row>
            <el-divider />
            <el-row v-for="(item, index ) in questionItem" :key="index">
              <el-col :span="2">
                <el-button>{{ index }}</el-button>
              </el-col>
              <el-col :span="16">
                <div class="editor-container">
                  <markdown-editor
                    ref="markdownEditor"
                    v-model="questionItem[index]"
                    language="zh"
                    :options="{hideModeSwitch:true,previewStyle: 'tab'}"
                    height="100px"
                  />
                </div>
              </el-col>
            </el-row>
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
      }
    }
  },
  computed: {
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
