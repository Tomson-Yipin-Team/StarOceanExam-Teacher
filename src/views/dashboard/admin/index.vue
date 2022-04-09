<template>
  <div class="dashboard-editor-container">
    <!--<panel-group @handleSetLineChartData="handleSetLineChartData" />-->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
        <Welcome />
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
        <panel-group panel-name="班级数量" :panel-number="12" svg-name="pull-door" color-style="#40c9c6" />
        <panel-group panel-name="学生数量" :panel-number="230" svg-name="peoples" color-style="#40c9c6" />
        <panel-group panel-name="等待批阅" :panel-number="2" svg-name="log" color-style="#518ff9" />
        <panel-group panel-name="即将进行" :panel-number="1" svg-name="hourglass-full" color-style="#518ff9" />
        <panel-group panel-name="正在考试" :panel-number="1" svg-name="pie-five" color-style="#518ff9" />
        <!--<Tips />-->
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <announcement />
        <user-logs />
      </el-col>
    </el-row>
  </div>
</template>

<script>

import PanelGroup from './components/PanelGroup'
import Announcement from '@/views/dashboard/admin/components/Announcement'
import UserLogs from '@/views/dashboard/admin/components/UserLogs'
import Welcome from '@/views/dashboard/admin/components/Welcome'
// import Tips from '@/views/dashboard/admin/components/Tips'
export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    Announcement,
    UserLogs,
    Welcome
  },
  data() {
    return {
    }
  },
  methods: {
    handleSetLineChartData(type) {
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  padding-top: 10px;
  //background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .announcement {
    background: #ffffff;
    //padding: 16px 16px 0;
    font-family: 微软雅黑;
  }
}

//@media (max-width:1024px) {
//  .announcement {
//    padding: 8px;
//  }
//}
.chat{
  position: fixed;  // 浮动
  z-index: 999999;
}
</style>
