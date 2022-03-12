<template>
  <el-card>
    <div slot="header">
      <span style="text-align: center;display: block;">附件上传</span>
    </div>
    <el-row type="flex" justify="cneter">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">可以上传图片/音频文件，文件将会在题目中显示</div>
      </el-upload>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'Files'
}
</script>

<style scoped>

</style>
