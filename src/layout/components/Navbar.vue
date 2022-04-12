<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div style="float: right">
      <span class="message">
        <el-badge :value="12" class="item">
          <svg-icon class="message-button" icon-class="message" />
        </el-badge>
      </span>
      <span class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <el-avatar shape="square" :src="avatar+'?imageView2/1/w/100/h/100'" class="user-avatar" />
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <!--个人信息说明-->
            <div class="user-name">
              {{ $store.state.user.name }}
            </div>
            <div class="user-role">
              教师
            </div>
            <!--跳转首页-->
            <router-link to="/">
              <el-dropdown-item class="dropdown-item">
                <span class="link-title">
                  首页
                </span>
                <span class="link-icon">
                  <svg-icon icon-class="right" />
                </span>
              </el-dropdown-item>
            </router-link>
            <!--跳转监考-->
            <router-link to="/personal/personal">
              <el-dropdown-item class="dropdown-item">
                <span class="link-title">
                  监考
                </span>
                <span class="link-icon">
                  <svg-icon icon-class="right" />
                </span>
              </el-dropdown-item>
            </router-link>
            <!--跳转批改-->
            <router-link to="/personal/personal">
              <el-dropdown-item class="dropdown-item">
                <span class="link-title">
                  批改
                </span>
                <span class="link-icon">
                  <svg-icon icon-class="right" />
                </span>
              </el-dropdown-item>
            </router-link>
            <!--跳转个人中心-->
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item class="dropdown-item">
                <span class="link-title">
                  个人中心
                </span>
                <span class="link-icon">
                  <svg-icon icon-class="right" />
                </span>
              </el-dropdown-item>
            </a>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">登出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    //float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
    .user-dropdown{
      .user-name{
        font-size: 20px;
      }
    }
  }
  .message{
    position: relative;
    left: -30px;
    top:-15px
  }
  .message-button{
    font-size: 25px;
    color: #1f434f;
  }
}
.user-name{
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 10px;
}
.user-role{
  text-align: center;
  font-size: 13px;
  color: #99a9bf;
  margin: 10px;
}
.link-icon{
  color: #99a9bf;
}
.dropdown-item{
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
