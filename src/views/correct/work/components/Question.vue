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
      questionContent: '灯笼起源于东汉，最初主要用于照明。在唐代，人们用红灯笼来庆祝安定的生活。从那时起，灯笼在中国的许多地方流行起来。灯笼通常用色彩鲜艳的薄纸，形状和尺寸各异。在中国传统文化中，红灯笼象征生活美满和生意兴隆，通常在春节、元宵节和国庆等节日期间悬挂。如今，世界上许多其他地方也能看到红灯笼。'
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
