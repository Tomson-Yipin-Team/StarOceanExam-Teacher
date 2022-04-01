<template>
  <div>
    <el-row :gutter="12">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <el-card>
          <div slot="header">
            原题
          </div>
          <Question />
        </el-card>
        <el-card>
          <div slot="header">
            学生回答
          </div>
          <Answer />
        </el-card>
        <el-card>
          <div slot="header">
            参考答案
          </div>
          <TrueAnswer />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <el-card :body-style="{padding:'0px'}">
          <div slot="header">
            试卷信息
          </div>
          <WorkInfo />
        </el-card>
        <el-card :body-style="{padding:'0px'}">
          <div slot="header">
            <el-row class="title-text">
              <el-col :span="4">评分</el-col>
            </el-row>
          </div>
          <Score @open="openDrawer" />
        </el-card>
      </el-col>
    </el-row>
    <el-drawer
      title="批注"
      :visible.sync="drawer"
      direction="btt"
      size="50%"
    >
      <markdown-editor
        ref="markdownEditor"
        v-model="content"
        language="zh"
        :options="{hideModeSwitch:true,previewStyle: 'tab'}"
        height="80%"
        class="markdown-editor"
      />
      <el-button type="primary">保存</el-button>
    </el-drawer>
  </div>
</template>

<script>
import WorkInfo from '@/views/correct/work/components/WorkInfo'
import Question from '@/views/correct/work/components/Question'
import Answer from '@/views/correct/work/components/Answer'
import TrueAnswer from '@/views/correct/work/components/TrueAnswer'
import Score from '@/views/correct/work/components/Score'
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
  name: 'Work',
  components: {
    WorkInfo,
    Question,
    Answer,
    TrueAnswer,
    Score,
    MarkdownEditor
  },
  data() {
    return {
      drawer: false,
      content: ''
    }
  },
  methods: {
    openDrawer(open) {
      this.drawer = open
    }
  }
}
</script>

<style scoped>
.title-text{
  display: flex;
  justify-content: left;
  align-items: center;
}
.markdown-editor{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
