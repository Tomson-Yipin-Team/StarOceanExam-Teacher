<template class="user-card">
  <!--TODO: 更改图标样式-->
  <div>
    <!--卡片-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户</span>
      </div>
      <!--用户信息-->
      <div class="user-items">
        <div class="user-avatar">
          <el-avatar shape="circle" :size="100" :fit="fit" :src="url" />
        </div>
        <div class="user-name">
          <span id="user-name">{{ $store.state.user.name }}</span>
        </div>
        <div class="user-role">
          {{ user.role }}
        </div>
        <div class="user-info-header">
          <i class="el-icon-user" /><span>个人简介:</span>
        </div>
        <div class="user-intro">
          <!--          TODO: 添加vuex实现简介数据互通-->
          {{ user.intro }}
        </div>
        <div class="user-info-header">
          <i class="el-icon-user" />
          <span>社交方式:</span>
        </div>
        <div>
          <div>
            <span class="user-social-icon">
              <svg-icon style="color: #349f59" icon-class="wechat" />
            </span>
            <span class="user-social-text">一场秋梦</span>
          </div>
          <div style="margin-top: 10px">
            <span class="user-social-icon"><svg-icon style="color: #23b4e8" icon-class="qq" /></span>
            <span class="user-social-text">一场秋梦</span>
          </div>
        </div>

      </div>
    </el-card>

  </div>
</template>

<script>

export default {
  name: 'UserCard',
  data() {
    return {
      user: {
        name: '郁闷の酱油瓶',
        role: '教师',
        intro: '这里是个人简介'
      },
      fit: 'contain',
      url: 'https://lsky-picture.stdcdn.com/uploads/2022/04/3a0a8e75734f1bd42e2f20b64786d888.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
//.user-items{
//  height:200px;
//}

.user-avatar,{
  text-align: center;
}

.user-name,.user-role{
  margin-top: 10px;
  text-align: center;
}
.user-role{
  margin-bottom: 10px;
}
.user-info-header{
  border-bottom: 1px solid #dfe6ec;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.user-intro{
  height: 50px;
}

.user-social-icon{
  font-size:25px
}
.user-social-text{
  margin-left:10px
}
.user-name{
  font-size: 30px;
}
</style>
