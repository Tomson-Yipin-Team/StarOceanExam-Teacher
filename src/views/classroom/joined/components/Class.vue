<template>
  <div>
    <el-card class="box-card" :body-style="{padding:'0px'}" shadow="hover">
      <div :style="imageClass">
        <div id="term">{{ classInfo.date }}</div>
        <div id="name">{{ classInfo.name }}</div>
        <div class="classroom">
          <span v-for="(item, index) in classInfo.classrooms" :key="index">{{ item }} </span>
        </div>
        <div class="classroom">课程码: {{ classInfo.code }}</div>
      </div>
      <div class="manager">
        <span>教师: {{ classInfo.teacher }}</span>
        <span>
          <el-button type="text" @click="handleManager">管理</el-button>
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Class',
  props: {
    classInfo: {
      type: Object,
      default: function() {
        return {
          date: '学期名称',
          name: '课程名称',
          classrooms: ['班级1', '班级2'],
          code: '课程码',
          teacher: '教师名称',
          url: 'url("https://lsky-picture.stdcdn.com/uploads/2022/04/eb5c30a0ce1ac0429ceb43dd6103814a.png")'
        }
      }
    }
  },
  data() {
    return {
      imageClass: {
        backgrounImage: 'url("http://lsky.jujuh.top/i/2022/04/03/62497a4626769.png")',
        height: '160px',
        backgroundSize: 'cover',
        padding: '30px',
        width: ' 100%'
      }
    }
  },
  methods: {
    handleManager() {
      this.$router.push({
        name: 'Detail'
      })
    }
  },
  watch: {
    classInfo: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.imageClass.backgroundImage = newValue.url
      }
    }
  }
}
</script>

<style scoped>
.image-box{
  background-image: url("http://lsky.jujuh.top/i/2022/04/03/62497a4626769.png");
  height: 160px;
  background-size: cover;
  padding:30px;
  width: 100%;
}

.box-card{
  width: 100%;
  height: 240px;
}

#name{
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
}
.classroom{
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
}
#term{
  color: #e3eeff;
  font-size: 15px;
}
/*.manager{*/
/*  position: relative;*/
/*  top: 23px;*/
/*  padding: 20px;*/
/*  width: 100%;*/
/*}*/
.manager{
  position: relative;
  top: 35px;
  left: 15px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
