<template>
  <div>
    <Viewer :initial-value="studentAnswer" height="500px" />
  </div>
</template>

<script>
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'codemirror/lib/codemirror.css'
import { Viewer } from '@toast-ui/vue-editor'
export default {
  name: 'Answer',
  components: {
    Viewer
  },
  data() {
    return {
      studentAnswer: '学生的回答'
    }
  }
}
</script>

<style scoped>

</style>
