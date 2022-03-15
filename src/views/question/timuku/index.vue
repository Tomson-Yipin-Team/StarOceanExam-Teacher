<template>
  <div class="container">
    <el-row type="flex" justify="center" class="table">
      <el-col :span="23">
        <el-card>
          <el-row>
            <el-button type="danger" plain @click="clearFilter">清除所有过滤器</el-button>
            <el-button type="primary" @click="toCreate">添加题目 <i class="el-icon-upload" /></el-button>
            <el-button icon="el-icon-circle-plus" type="primary">添加题型</el-button>
          </el-row>
          <el-table
            ref="filterTable"
            :data="tableData"
            style="width: 100%"
            border
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
              width="180"
              column-key="subject"
              :filters="[{text: '数学', value: '数学'}, {text: '英语', value: '英语'}, {text: '计算机', value: '计算机'}, {text: '物理', value: '物理'}]"
              :filter-method="filterHandler"
            >
              <template #default="scope">
                {{ scope.row.subject }}
              </template>
            </el-table-column>
            <el-table-column
              label="试题数量"
              width="300px"
            >
              <template #default="scope">
                {{ scope.row.totalNumber }}
              </template>
            </el-table-column>
            <el-table-column
              prop="rest"
              label="未使用的试题数量（未被学生做过）"
              width="300px"
            />

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
      title="查看试题"
      :visible.sync="dialogLook"
      width="60%"
      :before-close="handleClose"
    >
      <el-form>
        <el-form-item label="请输入题号">
          <el-col :span="6">
            <el-input v-model="questionNumber" placeholder="请输入题目号" />
          </el-col>
          <el-col :offset="1" :span="3">
            <el-button type="primary" icon="el-icon-document" @click="toNext">
              跳转
            </el-button>
          </el-col>
        </el-form-item>
      </el-form>
      <div v-html="html" />
      <markdown-editor v-show="false" ref="markdownEditor" v-model="content" :options="{hideModeSwitch:true,isViewer:true}" height="400px" />
    </el-dialog>
  </div>
</template>

<script>

import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      tableData: [{
        id: '1',
        subject: '听力',
        totalNumber: '105',
        rest: '42',
        origin: '查看'
      }, {
        id: '2',
        subject: '单项选择',
        totalNumber: '807',
        rest: '301',
        origin: '查看'
      }, {
        id: '3',
        subject: '完型填空',
        totalNumber: '104',
        rest: '9',
        origin: '查看'
      }, {
        id: '4',
        subject: '十五选十',
        totalNumber: '88',
        rest: '44',
        origin: '查看'
      },
      {
        id: '5',
        subject: '段落信息匹配',
        totalNumber: '62',
        rest: '21',
        origin: '查看'
      },
      {
        id: '6',
        subject: '阅读理解',
        totalNumber: '533',
        rest: '115',
        origin: '查看'
      },
      {
        id: '7',
        subject: '句子翻译',
        totalNumber: '78',
        rest: '45',
        origin: '查看'
      },
      {
        id: '8',
        subject: '任务型阅读',
        totalNumber: '67',
        rest: '44',
        origin: '查看'
      },
      {
        id: '9',
        subject: '书面表达',
        totalNumber: '68',
        rest: '32',
        origin: '查看'
      },
      {
        id: '10',
        subject: '算法设计',
        totalNumber: '21',
        rest: '10',
        origin: '查看'
      }],
      dialogLook: false,
      html: '',
      content: '# 问题A：小程上楼\n' +
        '\n' +
        '## 问题描述\n' +
        '\n' +
        '小程的宿舍在六楼，小程每次上楼都可以选择向上跨一级台阶或者跨两级台阶，小程想知道\n' +
        '为了到达第n级台阶，他一共有多少种方案可取\n' +
        '## 输入格式\n' +
        '输入一行，包含一个整数n(1<n<100000)\n' +
        '## 输出格式\n' +
        '输出一个整数，表示小程可以采取的方案数\n' +
        '## 输入样例\n' +
        '10\n' +
        '## 输出样例\n' +
        '89\n',
      questionNumber: ''
    }
  },
  methods: {
    // 重置学科过滤器
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('subject')
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
    toNext() {
      this.html = this.$refs.markdownEditor.getHtml()
    }
  }
  // ,
  // watch: {
  //   content: {
  //     immediate: true,
  //     handler() {
  //       this.html = this.$refs.markdownEditor.getHtml()
  //     }
  //   }
  // }
}
</script>

<style scoped>
.container{
  background-color: rgb(240, 242, 245);
  margin:0;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
