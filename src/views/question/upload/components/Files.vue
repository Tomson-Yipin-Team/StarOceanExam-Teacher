<template>
  <el-card>
    <div slot="header">
      <span style="text-align: center;display: block;">附件上传</span>
    </div>
    <el-row type="flex" justify="center">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或点击上传</div>
        <div slot="tip" class="el-upload__tip">可以上传图片/音频文件，文件将会在题目中显示</div>
      </el-upload>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'Files',
  data() {
    return {
      fileList: [{ name: '新闻2.mp3', url: 'https://source.jujuh.top/audio/%E6%96%B0%E9%97%BB2.mp3' }, { name: '新闻1.mp3', url: 'https://source.jujuh.top/audio/%E6%96%B0%E9%97%BB1.mp3' }]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>

</style>
