<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <!--Markdown组件-->
      <el-row v-show="false">
        <div class="editor-container">
          <markdown-editor ref="markdownEditor" v-model="content" language="zh" :options="{hideModeSwitch:true,previewStyle:'vertical'}" height="400px" />
        </div>
      </el-row>

      <el-row class="button" type="flex" justify="end" />
      <el-row>
        <el-button type="primary" icon="el-icon-document" @click="getNextPage">
          Get HTML
        </el-button>
        <div v-html="html" />
      </el-row>
    </el-card>
  </div>
</template>

<script>

import content from '@/api/question-content'
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  name: 'Upload',
  components: { MarkdownEditor },
  data() {
    return {
      questionNumber: 0,
      content: '',
      html: ''
    }
  },
  watch: {
    questionNumber: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(newValue, oldValue)
        this.content = content.question[newValue]
        this.html = this.$refs.markdownEditor.getHtml()
      }
    }
  },
  methods: {
    getNextPage() {
      this.questionNumber += 1
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 20px;
}
</style>
