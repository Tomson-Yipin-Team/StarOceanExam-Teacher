<template>
  <div>
    <el-card>
      <div slot="header">
        <span style="text-align: center;display: block">编辑题目</span>
      </div>
      <!--el标签页-->
      <el-tabs v-model="activeName">
        <!--编辑题目页面-->
        <el-tab-pane label="编辑题目" name="edit">
          <markdown-editor
            ref="markdownEditor"
            v-model="content"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="400px"
          />
          <!--答案-->
          <el-row v-for="(item, index) in answers" :key="index">
            <el-col :span="2">
              <el-button>{{ index }}</el-button>
            </el-col>
            <el-col :span="16">
              <markdown-editor
                ref="markdownEditor"
                v-model="content"
                language="zh"
                :options="{hideModeSwitch:true,previewStyle: 'tab'}"
                height="100px"
              />
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--预览题目-->
        <el-tab-pane label="预览" name="preview">
          <div class="editor-container">
            <editor
              :initial-value="content"
              :options="editorOptions"
              height="500px"
              initial-edit-type="wysiwyg"
              preview-style="vertical"
            />
          </div>
        </el-tab-pane>
      </el-tabs>

      <el-row class="button" type="flex" justify="end">
        <el-button type="primary">保存题目</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import MarkdownEditor from '@/components/MarkdownEditor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import questionContent from '@/api/question-content'

export default {
  name: 'Upload',
  components: { Editor, MarkdownEditor },
  data() {
    return {
      content: '',
      editorOptions: {
        hideModeSwitch: false,
        language: 'zh-CN'
      },
      activeName: 'edit'
    }
  },
  computed: {
    answers() {
      return questionContent.question[2].answers
    }
  },
  watch: {
    content: {
      immediate: true,
      handler(newValue) {
        this.content = questionContent.question[0].question
        console.log(newValue)
      }
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 20px;
}
</style>
