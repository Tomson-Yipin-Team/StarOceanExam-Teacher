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
  name: 'TureAnswer',
  components: {
    Viewer
  },
  data() {
    return {
      questionContent: 'Lanterns originated in the Eastern Han Dynasty, and were at first used primarily for lighting. In the Tang Dynasty, people used red lanterns to celebrate a stable life. Since then, lanterns have became popular in many parts of China. Lanterns are usually made of brightly-colored tissue paper in a variety of shapes and sizes. In traditional Chinese culture, red lanterns symbolize a happy life and flourishing business, usually hung during festivals like the Spring Festival, Lantern Festival and National Day. Today, red lanterns can be seen in many other parts of the world.'
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
