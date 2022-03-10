<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <el-row>
        <div class="editor-container">
          <markdown-editor ref="markdownEditor" v-model="content" :options="{hideModeSwitch:true,previewStyle:'tab'}" height="200px" />
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>

import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  name: 'Upload',
  components: { MarkdownEditor },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style scoped>

</style>
