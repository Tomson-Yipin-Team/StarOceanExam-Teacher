<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <el-row>
        <div class="editor-container">
          <markdown-editor ref="markdownEditor" v-model="content" :options="{hideModeSwitch:true,previewStyle:'vertical'}" height="400px" />
        </div>
      </el-row>
      <el-row class="button" type="flex" justify="end">
        <el-button type="primary">保存题目</el-button>
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
      content: '小程看一本故事书，第一天看了全书的15％少4页，这时已看的页数与剩下页数的比是1∶7。这本故事书共有多少页？'
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 20px;
}
</style>
