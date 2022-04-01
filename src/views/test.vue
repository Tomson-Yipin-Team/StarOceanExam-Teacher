<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-card class="card-container" header="输入框">
        <el-form ref="form" label-width="120px">
          <el-form-item label="输入">
            <el-input v-model="formData.inputContent" style="width: 50%;margin-right: 10px" />
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button type="danger" plain>重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
    <el-row type="flex" justify="center">
      <el-card class="card-container" header="显示">
        <div v-html="showContent" />
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      formData: {
        inputContent: ''
      },
      showContent: ``
    }
  },
  methods: {
    handleSubmit() {
      if (this.formData.inputContent === '苹果') {
        this.showContent = `<h2>苹果->水果=>手机=>其他<hr></h2>
<h3>图文场景(声文图形数)->先粗后细=>事件动作=>你的应用</h3>
<img style="height: 200px" src=https://lsky-picture.stdcdn.com/uploads/2022/03/30cb566bb076a7f1de2206ac0d314fd7.jpg /><br>
<img style="height: 200px" src=https://lsky-picture.stdcdn.com/uploads/2022/03/07da12bb18b28c0741d3819df4969a41.jpg /><br>
<img style="height: 200px" src=https://lsky-picture.stdcdn.com/uploads/2022/03/ccc2f9b28b85d81cead5190867c47518.jpg /><br>
<img style="height: 200px" src=https://lsky-picture.stdcdn.com/uploads/2022/03/05015a55baeb4c746e8bb9f4f2799e5c.jpg /><br>`
      } else if (this.formData.inputContent === '方程求解') {
        this.showContent = `<h2>方程求解<hr></h2>
ID------a--------b--------c<br>
1------1.0------4.0-----3.0<br>
 <br>方程具有两个实根解<br>
<br>r1=-1.0,r2=-3.0<br><hr>
ID------a--------b--------c<br>
2------0.0------2.0-----2.0<br>
<br>方程不是正规解<br><hr>
ID------a--------b--------c<br>
3------4.0------2.0-----1.0<br>
 <br>方程无实根<br><hr>
ID------a--------b--------c<br>
4------2.0------4.0-----2.0<br>
 <br>方程具有两个实根解<br>
<br>r1=r2=-1.0<br><hr>
ID------a--------b--------c<br>
5------0.0------0.0-----0.0<br>
<br>方程不是正规解<br>`
      } else if (this.formData.inputContent === '智能体') {
        this.showContent = `<h1>这是智能体设计、实现、写作的实验测试</h1>
        <h3>可信度量:6500.0</h3>`
      } else if (this.formData.inputContent === '小八哥吃大花生') {
        this.showContent = `小/八哥/吃/大/花生<br>
<h3>词法元Token识别:小</h3>
<h3>词法元Token识别:八哥</h3>
<h3>词法元Token识别:吃</h3>
<h3>词法元Token识别:大</h3>
<h3>词法元Token识别:花生</h3>`
      }
    }
  }
}
</script>

<style scoped>
.card-container{
  width: 80%;
  margin-bottom: 10px;
}
</style>
