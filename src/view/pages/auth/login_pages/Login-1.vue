<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{
        'login-signin-on': this.state == 'signin',
        'login-signup-on': this.state == 'signup',
        'login-forgot-on': this.state == 'forgot'
      }"
      id="kt_login">
      <!--begin::Aside-->
      <div
        class="login-aside d-flex flex-column flex-row-auto"
        style="background-color: #F2C98A; background-image: url('media/bg/bg-6.jpg');
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;">
        <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <a href="#" class="text-center mb-10">
            <img
              src="media/logos/logo-letter-1.png"
              class="max-h-70px"
              alt="" />
          </a>
          <h3
            class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
            style="color: #ffffff;">
            欢迎使用 <br />运行管理与维护系统
          </h3>
        </div>
        <div
          class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div>
      <!--End::Aside-->
      <!--begin::Content-->
      <div
        class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div class="d-flex flex-column-fluid flex-center">
          <!--begin::Signin-->
          <div class="login-form login-signin">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signin_form">
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                  {{$t('AUTH.LOGIN.BUTTON')}}
                </h3>
                <span class="text-muted font-weight-bold font-size-h4"
                  >{{$t('AUTH.GENERAL.NEW_HERE')}}
                  <a
                    id="kt_login_signup"
                    class="text-primary font-weight-bolder"
                    @click="showForm('signup')"
                    >{{$t('AUTH.GENERAL.CREATE_ACCOUNT')}}</a
                  ></span
                >
              </div>
              <div role="alert" class="alert alert-info">
                <div class="alert-text" v-if="this.$i18n.locale === 'ch'">
                  使用 {{$t('AUTH.INPUT.USERNAME')}}
                  <strong>gis</strong> 和 {{$t('AUTH.INPUT.PASSWORD')}}
                  <strong>gis</strong> 继续.
                </div>
                <div class="alert-text" v-else-if="this.$i18n.locale === 'en'">
                  Use {{$t('AUTH.INPUT.USERNAME')}}
                  <strong>gis</strong> and {{$t('AUTH.INPUT.PASSWORD')}}
                  <strong>gis</strong> to continue.
                </div>
                <div class="alert-text" v-else>
                  使用 {{$t('AUTH.INPUT.USERNAME')}}
                  <strong>gis</strong> 和 {{$t('AUTH.INPUT.PASSWORD')}}
                  <strong>gis</strong> 继续.
                </div>
              </div>
              <div class="form-group">
                <label class="font-size-h6 font-weight-bolder text-dark"
                  >{{$t('AUTH.INPUT.USERNAME')}}</label>
                <div
                  id="example-input-group-1"
                  label=""
                  label-for="example-input-1">
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="username"
                    ref="username"
                    v-model="form.username"/>
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mt-n5">
                  <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                    >{{$t('AUTH.INPUT.PASSWORD')}}</label>
                  <!--<a
                    class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                    id="kt_login_forgot"
                    @click="showForm('forgot')"
                    >Forgot Password ?</a
                  >-->
                </div>
                <div
                  id="example-input-group-2"
                  label=""
                  label-for="example-input-2">
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    ref="password"
                    v-model="form.password"
                    autocomplete="off"/>
                </div>
              </div>
              <div class="pb-lg-0 pb-5">
                <button
                  ref="kt_login_signin_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3">
                  {{$t('AUTH.LOGIN.BUTTON')}}
                </button>
                <!--<button
                  type="button"
                  class="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg">
                  <span class="svg-icon svg-icon-md">
                    <inline-svg
                      src="media/svg/social-icons/google.svg"
                    /> </span
                  >Sign in with Google
                </button>-->
              </div>
            </form>
          </div>
          <!--end::Signin-->
          <!--begin::Signup-->
          <div class="login-form login-signup">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signup_form">
              <div class="kt-login__title">
                <div class="non-register-tip">{{$t('PROMPT.REGISTRATION_CLOSED')}}</div>
              </div>
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                  {{$t('AUTH.REGISTER.TITLE')}}
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  {{$t('AUTH.REGISTER.DESC')}}
                </p>
              </div>
              <!--<div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Fullname"
                  name="fullname"
                  ref="fullname"
                  autocomplete="off"
                />
              </div>-->
              <div class="form-group">
                <!--<input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref="remail"
                  autocomplete="off"/>-->
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="input"
                  :placeholder="$t('AUTH.INPUT.USERNAME')"
                  name="username"
                  ref="rusername"
                  autocomplete="off"/>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  :placeholder="$t('AUTH.INPUT.PASSWORD')"
                  name="password"
                  ref="rpassword"
                  autocomplete="off"/>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  :placeholder="$t('AUTH.INPUT.CONFIRM_PASSWORD')"
                  name="cpassword"
                  ref="cpassword"
                  autocomplete="off"/>
              </div>
              <div class="form-group">
                <label class="checkbox mb-0">
                  <input type="checkbox" name="agree" />
                  <span class="mr-2"></span>
                  {{$t('AUTH.GENERAL.AGREE')}}
                  <a href="#" class="ml-2">{{$t('AUTH.GENERAL.TERMS_CONDITIONS')}}</a>.
                </label>
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                <button
                  ref="kt_login_signup_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                  style="width:150px;">
                  {{$t('ACTION.SUBMIT')}}
                </button>
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')">
                  {{$t('ACTION.CANCEL')}}
                </button>
              </div>
            </form>
          </div>
          <!--end::Signup-->
          <!--begin::Forgot-->
          <!--<div class="login-form login-forgot">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form">
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                  Forgotten Password ?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your email to reset your password
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"/>
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button
                  type="button"
                  id="kt_login_forgot_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')">
                  Cancel
                </button>
              </div>
            </form>
          </div>-->
          <!--end::Forgot-->
        </div>
        <!--begin::Content footer-->
        <div
          class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">
          <!--<a href="#" class="text-primary font-weight-bolder font-size-h5"
            >GIS</a>-->
          <!--<a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >Plans</a>-->
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >{{$t('COPYRIGHT.COMPANY.NAME')}}</a>
        </div>
        <!--end::Content footer-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";

/** 文字闪烁效果 **/
.non-register-tip {
  font-size: 20px;
  color: #4cc134;
  margin: 10px;
  animation: changeshadow 1.5s ease-in infinite ;
  /* 其它浏览器兼容性前缀 */
  -webkit-animation: changeshadow 1.5s linear infinite;
  -moz-animation: changeshadow 1.5s linear infinite;
  -ms-animation: changeshadow 1.5s linear infinite;
  -o-animation: changeshadow 1.5s linear infinite;
}
@keyframes changeshadow {
  0%{ text-shadow: 0 0 4px #4cc134}
  50%{ text-shadow: 0 0 40px #4cc134}
  100%{ text-shadow: 0 0 4px #4cc134}
}
/* 添加兼容性前缀 */
@-webkit-keyframes changeshadow {
  0%{ text-shadow: 0 0 4px #4cc134}
  50%{ text-shadow: 0 0 40px #4cc134}
  100%{ text-shadow: 0 0 4px #4cc134}
}
@-moz-keyframes changeshadow {
  0%{ text-shadow: 0 0 4px #4cc134}
  50%{ text-shadow: 0 0 40px #4cc134}
  100%{ text-shadow: 0 0 4px #4cc134}
}
@-ms-keyframes changeshadow {
  0%{ text-shadow: 0 0 4px #4cc134}
  50%{ text-shadow: 0 0 40px #4cc134}
  100%{ text-shadow: 0 0 4px #4cc134}
}
@-o-keyframes changeshadow {
  0%{ text-shadow: 0 0 4px #4cc134}
  50%{ text-shadow: 0 0 40px #4cc134}
  100%{ text-shadow: 0 0 4px #4cc134}
}

</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import { LOGIN, LOGOUT, REGISTER } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "login-1",
  data() {
    return {
      state: "signin",
      // Remove this dummy login info
      form: {
        username: "gis",
        password: "gis"
      }
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return 'process.env.BASE_URL + "media/svg/illustrations/working.svg"';
    }
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_signup_form");
    //const forgot_form = KTUtil.getById("kt_login_forgot_form");

    this.fv = formValidation(signin_form, {
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: "请输入用户名"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "请输入密码"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    this.fv1 = formValidation(signup_form, {
      fields: {
        username:{
          validators: {
            notEmpty: {
              message: "请输入用户名"
            },
          }
        },
        fullname: {
          validators: {
            notEmpty: {
              message: "请输入真实姓名"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "请输入Email"
            },
            emailAddress: {
              message: "输入的不是有效邮箱地址"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "请输入密码"
            }
          }
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "请输入确认密码"
            },
            identical: {
              compare: function() {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: "密码和确认密码输入不一致"
            }
          }
        },
        agree: {
          validators: {
            notEmpty: {
              message: "请同意条款和条件"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    /*this.fv2 = formValidation(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "请输入邮箱"
            },
            emailAddress: {
              message: "输入的不是有效邮箱地址"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });*/

    this.fv.on("core.form.valid", () => {
      var username = this.form.username;
      var password = this.form.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // 使用axios和mock.service.js实现交互,并且使用axios-mock-adapter进行数据调试
      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, { username, password })
          // go to which page after successfully login
          .then(() => this.$router.push({ name: "bs" }))
          .catch(() => {});

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 10);
    });

    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "请填写正确的数据!",
        icon: "error",
        confirmButtonText: "确定",
        heightAuto: false
      });
    });

    this.fv1.on("core.form.valid", () => {
      //const email = this.$refs.remail.value;
      const username = this.$refs.rusername.value;
      const password = this.$refs.rpassword.value;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      Swal.fire({
        title: "温馨提示",
        text: "不开放注册!",
        icon: "warning",
        heightAuto: false,
        timer: 2000,
        timerProgressBar: true,
        position: 'center',
        showConfirmButton: false
      });

      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );

      // dummy delay
      /*setTimeout(() => {
        // send register request
        this.$store
          .dispatch(REGISTER, {
            //email: email,
            username: username,
            password: password
          })
          .then(() => this.$router.push({ name: "dashboard" }));

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 10);*/
    });

    this.fv1.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "请填写正确的数据!",
        icon: "error",
        confirmButtonText: "确定",
        heightAuto: false,
      });
    });

    this.showWarmPrompt();
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    },
    showWarmPrompt() {
      let routeParams = this.$route.params;
      if (JSON.stringify(routeParams) !== '{}') {
        console.log(routeParams.warmPrompt);
        Swal.fire({
          toast: true,
          title: "温馨提示",
          text: routeParams.warmPrompt,
          icon: "warning",
          heightAuto: false,
          timer: 5000,
          timerProgressBar: true,
          position: 'top-end',
          showConfirmButton: false
        });
      }
    }
  }
};
</script>
