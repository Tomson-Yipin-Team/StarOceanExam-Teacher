<template>
  <div>
    <Viewer :initial-value="questionContent" height="500px" />
  </div>
</template>

<script>
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'codemirror/lib/codemirror.css'
import { Viewer } from '@toast-ui/vue-editor'

export default {
  name: 'Question',
  components: {
    Viewer
  },
  data() {
    return {
      questionContent: '## 这是一道题目'
    }
  }
}
</script>

<style scoped>
Viewer /deep/ .toastui-editor-contents{
  font-size: 20px;
  font-family: '微软雅黑';
}
</style>
