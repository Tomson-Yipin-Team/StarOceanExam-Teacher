<template>
  <div class="container">
    <el-row type="flex" justify="center" class="table">
      <el-col :span="23">
        <el-card>
          <el-row>
            <el-button type="danger" plain @click="clearFilter">清除所有过滤器</el-button>
            <el-button type="primary" @click="toCreate">添加题目<i class="el-icon-upload" /></el-button>
            <!--取消添加题型-->
            <!--<el-button icon="el-icon-circle-plus" type="primary">添加题型</el-button>-->
          </el-row>
          <el-table
            ref="filterTable"
            :data="tableData"
            style="width: 100%"
            border
            height="900px"
          >
            <el-table-column
              label="题目编号"
              width="150px"
            >
              <template #default="scope">
                {{ scope.row.id }}
              </template>
            </el-table-column>
            <el-table-column
              label="试题类型"
              column-key="name"
              :filters="[{text: '数学', value: '数学'}, {text: '英语', value: '英语'}, {text: '计算机', value: '计算机'}, {text: '物理', value: '物理'}]"
              :filter-method="filterHandler"
            >
              <template #default="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column
              label="试题数量"
              width="150px"
            >
              <template #default="scope">
                {{ scope.row.totalNumber }}
              </template>
            </el-table-column>
            <el-table-column
              prop="rest"
              label="未使用的试题数量（未被学生做过）"
              width="150px"
            />
            <el-table-column
              label="被使用次数"
              width="150px"
            >
              <template #default="scope">
                {{ scope.row.tag }}
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="200px"
            >
              <template>
                <el-row type="flex" justify="center">
                  <el-button-group>
                    <el-button type="primary" size="small" @click="onLook">查看</el-button>
                    <el-button type="primary" size="small" @click="onShare">分享</el-button>
                  </el-button-group>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!--查看弹出框-->
    <el-dialog
      title="听力题库"
      :visible.sync="dialogLook"
      width="60%"
      :before-close="handleClose"
    >
      <el-table
        :data="subQuestion"
        style="width: 100%"
        max-height="500px"
      >
        <el-table-column #default="scope" label="序号" width="200">
          {{ scope.$index +1 }}
        </el-table-column>
        <el-table-column label="分值" prop="score" />
        <el-table-column #default="scope" label="标签">
          <el-tag v-for="(item,index) in scope.row.knowledge" :key="index" class="tag">
            {{ item }}
          </el-tag>
        </el-table-column>

        <el-table-column #default="scope" label="难易度" fixed="right" width="100px">
          <el-tag :type="difficultyType(scope.row)">{{ scope.row.difficulty }}</el-tag>
        </el-table-column>
        <el-table-column #default="scope" label="操作" fixed="right" width="200px">
          <el-button-group>
            <el-button type="primary" plain @click="seeSubQuestion(scope.$index,scope.row)">查看</el-button>
            <el-button type="danger">删除</el-button>
          </el-button-group>
        </el-table-column>
      </el-table>
    </el-dialog>

  </div>
</template>

<script>

// import MarkdownEditor from '@/components/MarkdownEditor'
import questionContent from '@/api/question-content'

export default {
  components: {
    // MarkdownEditor
  },
  data() {
    return {
      tableData: questionContent.timuku,
      dialogLook: false,
      html: '',
      subQuestion: questionContent.timuku[0].questions,
      content: '',
      questionNumber: '',
      questionExample: {
        id: 104,
        name: '42',
        score: '6',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['讲座/演讲', '名人传记', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      }
    }
  }, mounted() {
    this.addQuestion()
  },
  methods: {
    // 重置学科过滤器
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('name')
    },
    // 重置所有过滤器
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    // 过滤器
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    // 创建试卷
    toCreate() {
      this.$router.push('/question/create-question')
    },
    // 分享按钮
    onShare() {
      this.$confirm('此操作将会创建一条分享链接，是否继续？', '分享提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$notify({
          type: 'success',
          title: '分享成功',
          message: '分享链接已复制到剪贴板上'
        })
      }).catch(() => {
        this.$notify({
          type: 'info',
          title: '信息',
          message: '已取消分享'
        })
      })
    },
    // 查看按钮
    onLook() {
      this.dialogLook = true
    },
    // 确认关闭
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // toNext() {
    //   this.html = this.$refs.markdownEditor.getHtml()
    // },
    // 查看子题目
    seeSubQuestion(index, row) {
      this.$router.push({ path: '/question/create-question', query: { name: row.name, categroy: row.category }})
    },
    // tag 颜色选择
    difficultyType(row) {
      if (row.difficulty === '简单') {
        return 'success'
      } else if (row.difficulty === '中等') {
        return 'warning'
      } else if (row.difficulty === '困难') {
        return 'danger'
      } else {
        return ''
      }
    },
    addQuestion() {
      setTimeout(() => {
        this.subQuestion.push(this.questionExample)
      }, 5000)
    }
  }
}
</script>

<style scoped>
.container{
  /* background-color: rgb(240, 242, 245); */
  margin:0;
  padding-top: 10px;
  padding-bottom: 20px;
}
.tag{
  margin-right: 5px;
}
</style>
