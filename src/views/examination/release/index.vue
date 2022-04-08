<template>
  <div class="app-container">
    <el-card
      v-loading="loading"
      class="container"
      style="width: 70%"
      element-loading-text="正在加载数据"
      element-loading-spinner="el-icon-loading"
    >
      <!--表单-->
      <!--<el-row type="flex" justify="center">-->
      <el-form ref="basicForm" :rules="rules" :model="basicForm" label-width="120px">
        <!--考试名称-->
        <el-form-item label="考试名称" prop="name">
          <el-col :span="12">
            <el-input v-model="basicForm.name" />
          </el-col>
        </el-form-item>
        <!--试卷类型-->
        <!--<el-form-item label="试卷类型" prop="category">-->
        <!--  <el-select v-model="basicForm.category" placeholder="请选择试卷类型">-->
        <!--    <el-option label="A卷" value="shanghai" />-->
        <!--    <el-option label="B卷" value="beijing" />-->
        <!--  </el-select>-->
        <!--</el-form-item>-->
        <!--选择试卷-->
        <el-form-item label="选择试卷" prop="paper" required>
          <el-select v-model="basicForm.paper" placeholder="请选择试卷">
            <el-option
              v-for="item in papers"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>

        <!--开考班级-->
        <el-form-item label="开考班级" prop="classrooms">
          <el-cascader v-model="basicForm.classrooms" :options="classrooms.choices" :props="props" />
        </el-form-item>
        <!--考试时间 设置-->
        <el-form-item label="考试时间" prop="date1">
          <el-row>
            <el-col :span="6">
              <el-date-picker v-model="basicForm.date1" type="date" placeholder="选择考试日期" style="width: 100%;" />
            </el-col>
            <el-col :span="2" class="line" style="text-align: center">-</el-col>
            <el-col :span="6">
              <el-time-picker v-model="basicForm.beginTime" type="fixed-time" placeholder="选择考试开始时间" style="width: 100%;" />
            </el-col>
            <el-col :span="2" class="line" style="text-align: center">-</el-col>
            <el-col :span="6">
              <el-time-picker v-model="basicForm.endTime" type="fixed-time" placeholder="选择考试结束时间" style="width: 100%;" />
            </el-col>
          </el-row>
        </el-form-item>
        <!--高级功能开关-->
        <el-form-item label="高级功能">
          <el-switch
            v-model="basicForm.advanceMode"
          />
        </el-form-item>

      </el-form>
      <!--</el-row>-->

      <!--高级功能-->
      <!--<el-row type="flex" justify="center">-->
      <el-form v-if="basicForm.advanceMode" ref="advanceForm" :model="advanceForm" label-width="120px">
        <!--开启工具箱-->
        <el-form-item label="是否允许工具箱">
          <el-switch v-model="advanceForm.toolsMode" />
        </el-form-item>
        <!--工具箱功能-->
        <el-form-item v-if="advanceForm.toolsMode" label="工具箱功能">
          <el-checkbox-group v-model="advanceForm.tools">
            <el-checkbox label="批注" />
            <el-checkbox label="时钟计时" />
            <el-checkbox label="草稿纸 " />
          </el-checkbox-group>
        </el-form-item>
        <!--反作弊设置-->
        <el-form-item label="反作弊">
          <el-checkbox-group v-model="advanceForm.antiCheat">
            <el-checkbox label="题目乱序" />
            <el-checkbox label="选项乱序" />
            <el-checkbox label="学生离开页面强制收卷">
              学生离开><el-input style="width: 50px" class="inline-input" />次，自动收卷
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!--试卷设置-->
        <el-form-item label="试卷设置">
          <el-checkbox-group v-model="advanceForm.paperSetting">
            <el-checkbox label="允许学生考后查看试卷" />
            <el-checkbox label="允许学生查看分数" />
            <el-checkbox label="允许学生查看排名" />
            <el-checkbox label="允许学生粘贴答案" />
          </el-checkbox-group>
        </el-form-item>
        <!--通知选项-->
        <el-form-item label="通知选项">
          <el-checkbox v-model="advanceForm.examBeginCheck" label="考试开始时提醒" />
          <markdown-editor
            v-if="advanceForm.examBeginCheck"
            ref="markdownEditor"
            v-model="advanceForm.examBeginContent"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="200px"
          />
          <el-checkbox v-model="advanceForm.examBeforeFinishCheck" label="考试结束前提醒">
            考试结束前<el-input v-model="advanceForm.beforeMin" class="inline-input" style="width: 50px" />分钟提醒
          </el-checkbox>
          <markdown-editor
            v-if="advanceForm.examBeforeFinishCheck"
            ref="markdownEditor"
            v-model="advanceForm.examBeforeFinishContent"
            language="zh"
            :options="{hideModeSwitch:true,previewStyle: 'tab'}"
            height="200px"
          />
        </el-form-item>
        <!--多人阅卷-->
        <el-form-item label="分配到教学组">
          <el-switch v-model="advanceForm.groupsMode" />
        </el-form-item>
        <!--分配教师-->
        <el-form-item v-if="advanceForm.groupsMode" label="选择教学组">
          <el-select v-model="advanceForm.groupsContent" multiple placeholder="请选择">
            <el-option
              v-for="item in groups"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <!--阅卷方式-->
        <el-form-item v-if="advanceForm.groupsMode" label="阅卷方式">
          <el-select v-model="advanceForm.correctWay" placeholder="请选择">
            <el-option
              v-for="item in correct"
              :key="item.id"
              :label="item.value"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <!--备注-->
        <el-form-item label="组卷备注">
          <el-input v-model="basicForm.desc" type="textarea" />
        </el-form-item>

      </el-form>
      <!--</el-row>-->

      <!--操作-->
      <el-row type="flex" justify="end">
        <el-button @click="onRest">重置</el-button>
        <el-button type="primary" @click="onNext('basicForm')">下一步</el-button>
      </el-row>
    </el-card>

    <el-dialog v-loading="confirmLoading" title="确认发布" :visible.sync="submitDialog" element-loading-text="正在保存" width="70%">
      <el-descriptions :column="1" border>
        <el-descriptions-item>
          <template slot="label">
            试卷名称
          </template>
          {{ basicForm.name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            试卷类型
          </template>
          {{ basicForm.category }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            试卷
          </template>
          {{ basicForm.paper }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            开考班级
          </template>
          <span v-for="item in selectedClassrooms" :key="item.id">{{ item.name }} </span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            考试时间
          </template>
          {{ date }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            是否启用高级功能
          </template>
          {{ basicForm.advanceMode ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item v-if="advanceForm.toolsMode">
          <template slot="label">
            工具箱功能
          </template>
          <span v-for="(item,index) in advanceForm.tools" :key="index">{{ item }} </span>
        </el-descriptions-item>
        <el-descriptions-item v-if="advanceForm.antiCheat.length !==0">
          <template slot="label">
            反作弊功能
          </template>
          <span v-for="(item,index) in advanceForm.antiCheat" :key="index">{{ item }} </span>
        </el-descriptions-item>
        <el-descriptions-item v-if="advanceForm.paperSetting.length !==0">
          <template slot="label">
            试卷设置
          </template>
          <span v-for="(item,index) in advanceForm.paperSetting" :key="index">{{ item }} </span>
        </el-descriptions-item>
        <el-descriptions-item v-if="advanceForm.toastSetting.length !==0">
          <template slot="label">
            通知选项
          </template>
          <span v-for="(item,index) in advanceForm.toastSetting" :key="index">{{ item }} </span>
        </el-descriptions-item>
      </el-descriptions>
      <el-row type="flex" justify="end">
        <el-button @click="confirmSubmit">确认发布</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>

// import Create from '@/views/examination/release/components/Create'
// import Question from '@/views/examination/release/components/Question'
import classrooms from '@/api/classrooms'
import markdownEditor from '@/components/MarkdownEditor'
import groups from '@/api/groups'
import moment from 'moment'
import paperContent from '@/api/paper-content'
moment.locale('zh-cn')

export default {
  name: 'Index',
  components: { markdownEditor },
  data() {
    return {
      active: 0,
      basicForm: {
        name: '',
        // category: '',
        date1: '',
        paper: '',
        beginTime: '',
        endTime: '',
        delivery: false,
        resource: '',
        desc: '',
        subject: '',
        advanceMode: true,
        classrooms: []
      },
      advanceForm: {
        toolsMode: false,
        tools: [],
        antiCheat: [],
        toastSetting: [],
        examBeginContent: '',
        examBeforeFinishContent: '',
        beforeMin: '',
        examBeginCheck: false,
        examBeforeFinishCheck: false,
        paperSetting: [],
        groupsMode: false,
        groupsContent: [],
        correctWay: ''
      },
      classrooms,
      props: {
        multiple: true
      },
      rules: {
        name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        // category: [
        //   { required: true, message: '请选择试卷', trigger: 'change' }
        // ],
        classrooms: [
          { required: true, message: '请选择班级', trigger: 'change' }
        ],
        date1: [
          { required: true, message: '请输入考试时间', trigger: 'change' }
        ],
        paper: [
          { required: true, message: '请选择试卷', trigger: 'change' }
        ]
      },
      groups: groups.manager,
      submitDialog: false,
      confirmLoading: false,
      papers: paperContent.papers,
      correct: [{
        id: 1,
        value: '流水批阅'
      }, {
        id: 2,
        value: '普通阅卷'
      }],
      loading: true
    }
  },
  computed: {
    selectedClassrooms() {
      let crs = []
      // console.log(this.basicForm.classrooms)
      for (const basicIndex in this.basicForm.classrooms) {
        const temp = classrooms.ownClassroom.filter((item) => {
          return item.id === this.basicForm.classrooms[basicIndex][1]
        })
        crs = crs.concat(temp)
      }
      // console.log(crs)
      return crs
    },
    // 计算时间
    date() {
      const date = moment(this.basicForm.date1).format('YYYY MMMM Do')
      const begin = moment(this.basicForm.beginTime).format('HH:mm:ss')
      const end = moment(this.basicForm.endTime).format('HH:mm:ss')
      return date + ' ' + begin + ' - ' + end
    }

  },
  mounted() {
    this.getParams()
  },
  methods: {
    getParams() {
      const paperInfo = this.$route.params.paperInfo
      console.log(paperInfo)
      if (paperInfo) {
        setTimeout(() => {
          this.basicForm = paperInfo.basicForm
          this.advanceForm = paperInfo.advanceForm
          this.loading = false
        }, 2000)
      } else {
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    },
    // 下一步
    onNext(basicForm) {
      this.$refs[basicForm].validate((valid) => {
        if (valid) {
          this.submitDialog = true
        } else {
          this.$notify({
            title: '警告',
            message: '有表单没有填写完！',
            type: 'error'
          })
          return false
        }
      })
      // this.submitDialog = true
    },
    onRest() {
      this.active = 0
      this.$notify({
        title: '警告',
        message: '正在返回',
        position: 'bottom-right',
        type: 'warning'
      })
    },
    confirmSubmit() {
      this.$notify({
        title: '警告',
        message: '正在保存，请勿关闭页面',
        position: 'bottom-right',
        type: 'warning'
      })
      this.confirmLoading = true
      setTimeout(() => {
        this.$notify({
          title: '成功',
          message: '发布成功，正在跳转',
          position: 'bottom-right',
          type: 'success'
        })
        this.submitDialog = false
        this.confirmLoading = false
      }, 2000)
      setTimeout(() => {
        this.$router.push('/examination/all')
      }, 2000)
    }
  }
}
</script>

<style scoped>
.container{
  /*margin:20px 20px 20px*/
  padding-top: 20px;
}
.el-checkbox{
  display: block;
}
.app-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.inline-input{
  margin-left: 10px;
  margin-right: 10px;
}
</style>

