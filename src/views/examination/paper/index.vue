<template>
  <div class="card-container">
    <el-card>
      <el-row type="flex" justify="end">
        <el-button class="button" @click="createDialog =true">创建新的试卷</el-button>
      </el-row>
      <paper-list @handleLock="handleLock" />
    </el-card>
    <!--TODO: 修改图片-->
    <el-dialog :visible.sync="createDialog" width="80%" title="创建试卷">
      <el-row type="flex" justify="center">请选择一种创建试卷的方式</el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" class="content">
          <el-card :body-style="{ padding: '0px' }">
            <el-image src="https://lsky-picture.stdcdn.com/uploads/2022/04/5a7b56749939b1fd5d6f73bbd4f02cf2.jpg" style="width: 100%">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
            <!--<img src="https://source.jujuh.top/picture/1.jpg" class="image" style="width: 100%">-->
            <div style="padding: 14px;">
              <div class="text">智能组卷</div>
              <div>
                <el-button type="text" class="button" @click="toAIPaper">使用</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="7" :offset="1" class="content">
          <el-card :body-style="{ padding: '0px' }">
            <el-image src="https://lsky-picture.stdcdn.com/uploads/2022/04/3e22508cd8e44ee2e3cd1aa09814b640.jpg" style="width: 100%">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline" />
              </div>
            </el-image>
            <!--<img src="https://source.jujuh.top/picture/2.jpg" class="image" style="width: 100%">-->
            <div style="padding: 14px;">
              <div class="text">手动创建</div>
              <div>
                <el-button type="text" class="button" @click="toCreate">使用</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="7" :offset="1" class="content">
          <el-card :body-style="{ padding: '0px' }">
            <el-image src="https://lsky-picture.stdcdn.com/uploads/2022/04/8f7cf9c499a856193619575431ae6f3b.jpg" style="width: 100%">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
            <!--<img src="https://source.jujuh.top/picture/2.jpg" class="image" style="width: 100%">-->
            <div style="padding: 14px;">
              <div class="text">通过分享导入</div>
              <el-input v-model="shareId" placeholder="请输入ID" style="width: 50%" />
              <div>
                <el-button type="text" class="button" @click="toShare">提交</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!--创建试卷对话框-->
      <el-dialog
        width="50%"
        title="分享创建"
        :visible.sync="shareDialog"
        append-to-body
      >
        <el-descriptions
          :column="1"
          border
        >
          <el-descriptions-item label="创建时间">
            {{ share.date }}
          </el-descriptions-item>
          <el-descriptions-item label="ID">
            {{ share.id }}
          </el-descriptions-item>
          <el-descriptions-item label="名称">
            {{ share.name }}
          </el-descriptions-item>
          <el-descriptions-item label="来源">
            {{ share.origin }}
          </el-descriptions-item>
        </el-descriptions>
        <el-button :loading="shareButtonLoading" @click="handleConfirm">确认添加</el-button>
      </el-dialog>
    </el-dialog>
    <!--封存试卷对话框-->
    <el-dialog
      width="50%"
      title="分享创建"
      :visible.sync="LockDialog"
      append-to-body
    >
      <LockPaper :name="paperName" @closeDialog="closeDialog" />
    </el-dialog>
  </div>
</template>

<script>
import PaperList from './components/PaperList'
import LockPaper from './components/LockPaper'
export default {
  name: 'Index',
  components: {
    PaperList,
    LockPaper
  },
  data() {
    return {
      createDialog: false,
      shareId: '',
      shareDialog: false,
      LockDialog: false,
      share: {
        id: '1000075886',
        date: '2022-03-01',
        name: '2021-2022-2大学英语六级模拟考试（1）',
        origin: '汪美美'
      },
      shareButtonLoading: false,
      paperName: ''
    }
  },
  methods: {
    toCreate() {
      this.$router.push({
        path: '/examination/composition',
        query: {
          way: 'manual',
          name: '新建试卷'
        }
      })
    },
    toAIPaper() {
      this.$router.push({
        path: '/examination/composition',
        query: {
          way: 'ai',
          name: '新建试卷'
        }
      })
    },
    toShare() {
      this.shareDialog = true
    },
    handleConfirm() {
      this.shareButtonLoading = true
      setTimeout(() => {
        this.shareButtonLoading = false
        this.shareDialog = false
        this.createDialog = false
        this.$notify({
          title: '添加成功',
          message: '试卷已添加至列表',
          type: 'success'
        })
      }, 3000)
    },
    // 关闭对话框
    closeDialog() {
      this.LockDialog = false
    },
    // 打开封存
    handleLock(name) {
      this.paperName = name
      this.LockDialog = true
    }
  }
}
</script>

<style scoped>
.content{
  text-align: center;
  margin-top: 10px;
}
.card-container{
  margin: 10px;
}

.button{
  margin-bottom: 10px;
}

.text{
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
