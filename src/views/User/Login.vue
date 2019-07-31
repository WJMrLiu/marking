<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>面试评分系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-row :gutter="30">
              <el-col :span="14">
                <el-input
                  type="password"
                  placeholder="验证码"
                  v-model="loginForm.password"
                ></el-input>
              </el-col>
              <el-col :span="10">
                <el-button v-show="show" @click="getCode" type="info"
                  >获取验证码</el-button
                >
                <el-button v-show="!show" class="count" type="info" disabled
                  >等待 {{ count }} 秒</el-button
                >
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item>
            <el-button
              type="info"
              @click="submitForm('loginForm')"
              class="submit_btn"
              >登陆</el-button
            >
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    let checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      show: true,
      count: "",
      timer: null,
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: checkPhone, trigger: "blur" }],
        password: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      showLogin: false
    };
  },
  mounted() {
    this.showLogin = true;
  },
  computed: {},
  methods: {
    getCode() {
      const TIME_COUNT = 60;

      if (!this.timer) {
        this.count = TIME_COUNT;

        this.show = false;

        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;

            clearInterval(this.timer);

            this.timer = null;
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../Style/mixin";
.login_page {
  height: 100%;
  background-color: #324057;
}
.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer {
  .wh(320px, 210px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tip {
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
