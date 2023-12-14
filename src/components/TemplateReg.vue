<template>
  <div class="template-modal template-reg">
    <h2>Регистрация</h2>
    <div class="input-box">
      <label for="">Email</label>
      <input type="email" v-model="email" placeholder="Введите Email" />
    </div>
    <div class="input-box">
      <label for="">Пароль</label>
      <div class="wrap-input">
        <input
          :type="typeInputPassword"
          v-model="password"
          placeholder="Введите пароль"
        />
        <div class="visible-input" @click="toggleVisiblePassword">
          <img
            class="img-1"
            src="../assets/glas.svg"
            v-if="visiblePasswordComp"
            alt="img"
          />
          <img class="img-2" src="../assets/glas-none.svg" v-else alt="img" />
        </div>
      </div>
    </div>
    <div class="input-box">
      <label for="">Пароль ещё раз</label>
      <div class="wrap-input">
        <input
          :type="typeInputConfirmPassword"
          v-model="confirmPassword"
          placeholder="Введите пароль ещё раз"
        />
        <div class="visible-input" @click="toggleVisibleConfirmPassword">
          <img
            class="img-1"
            src="../assets/glas.svg"
            v-if="visibleConfirmPasswordComp"
            alt="img"
          />
          <img class="img-2" src="../assets/glas-none.svg" v-else alt="img" />
        </div>
      </div>
    </div>
    <div class="button-box">
      <p>
        У вас нет аккаунта?
        <span @click="$emit('openModal', 'logIn')">Войдите</span>
      </p>
      <div class="button" @click="registration">Зарегистрироваться</div>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "TamplateReg",
  components: {},
  data() {
    return {
      visiblePassword: false,
      typeInputPassword: "password",
      visibleConfirmPassword: false,
      typeInputConfirmPassword: "password",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    visiblePasswordComp() {
      return this.visiblePassword;
    },
    typeInputPasswordComp() {
      return this.typeInputPassword;
    },
    visibleConfirmPasswordComp() {
      return this.visibleConfirmPassword;
    },
    typeInputConfirmPasswordComp() {
      return this.typeInputConfirmPassword;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  methods: {
    toggleVisiblePassword() {
      if (this.visiblePasswordComp) {
        this.typeInputPassword = "password";
        this.visiblePassword = false;
      } else {
        this.typeInputPassword = "text";
        this.visiblePassword = true;
      }
    },
    toggleVisibleConfirmPassword() {
      if (this.visibleConfirmPasswordComp) {
        this.typeInputConfirmPassword = "password";
        this.visibleConfirmPassword = false;
      } else {
        this.typeInputConfirmPassword = "text";
        this.visibleConfirmPassword = true;
      }
    },
    registration() {
      this.$store
        .dispatch("REGISTRATION", {
          email: this.email,
          password: this.password,
          confirm_password: this.confirmPassword,
        })
        .then(() => {
          if (!this.error) {
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
            this.$emit("openModal", "logIn");
          }
        });
    },
  },
};
</script>

<style>
.template-modal {
  text-align: left;
}
.template-modal h2 {
  color: #fff;

  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  margin: 0px;
  margin-bottom: 40px;
}
.template-modal .input-box {
  margin-bottom: 24px;
}
.template-modal .input-box label {
  color: #9da5af;
  text-overflow: ellipsis;
  display: inline-block;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-left: 24px;
  margin-bottom: 8px;
}
.template-modal .input-box input {
  height: 72px;
  width: 100%;
  padding-left: 28px;
  padding-right: 72px;
  box-sizing: border-box;
  color: #0a1f38;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 100px;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  border: 2px solid #fff;
}
.template-modal .input-box input::-webkit-input-placeholder {
  color: #9da5af;
}
.template-modal .input-box input:-moz-placeholder {
  color: #9da5af;
}
.template-modal .input-box input:focus {
  outline: none;
  border: 2px solid #b1c909;
}
.template-modal .input-box .wrap-input {
  position: relative;
}
.template-modal .input-box .wrap-input .visible-input {
  width: 72px;
  height: 72px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 110;
}
.template-modal .input-box .wrap-input .visible-input img.img-1 {
  position: absolute;
  top: 28px;
  right: 28px;
}
.template-modal .input-box .wrap-input .visible-input img.img-2 {
  position: absolute;
  top: 27px;
  right: 28px;
}
.template-modal .button-box {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.template-modal .button-box p {
  margin: 0px;
  color: #9da5af;
  text-overflow: ellipsis;

  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
.template-modal .button-box p span {
  color: #b1c909;
  text-overflow: ellipsis;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
}
.template-modal .button-box .button {
  background: #b1c909;
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 100px;
  cursor: pointer;
}
.template-modal .button-box .button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.template-modal .error {
  background: rgba(255, 116, 97, 0.1);
  color: #ff7461;
  height: 44px;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  padding: 0px 20px;
  border-radius: 100px;
}
@media (min-width: 1205px) and (max-width: 1600px) {
  .template-modal .button-box p {
    width: 328px;
  }
}
@media (min-width: 360px) and (max-width: 767px) {
  .template-modal h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    margin: 0px;
    margin-bottom: 28px;
  }
  .template-modal .button-box {
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    flex-flow: column wrap;
    align-items: center;
    margin-bottom: 20px;
  }
  .template-modal .button-box p {
    font-size: 14px;
    line-height: 24px;
    order: 1;
  }
  .template-modal .button-box p span {
    font-size: 14px;
    line-height: 24px;
  }
  .template-modal .button-box .button {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
    box-sizing: border-box;
    order: 0;
  }
}
</style>
