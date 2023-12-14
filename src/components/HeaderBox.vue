<template>
  <div class="header">
    <router-link class="logo" to="/">
      <img src="../assets/logo.svg" v-if="!isAuth" alt="img" />
      <div v-else class="logo-auth"></div>
    </router-link>
    <div class="right-box">
      <div class="log-in" v-if="!isAuth" @click="$emit('openModalLogIn')">
        <img src="../assets/logIn.svg" alt="img" />
        <span>Вход</span>
      </div>
      <div class="user" v-else @click="logOut">
        <span>{{ user.email }}</span>
        <div class="logo-user">
          <img src="../assets/user.svg" alt="img" />
        </div>
        <div class="popup">Выйти</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBox",
  components: {},
  computed: {
    user() {
      return this.$store.getters.user;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("LOG_OUT");
    },
  },
};
</script>

<style>
.header {
  margin: 0px 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .logo {
  width: 219px;
  height: 50px;
  display: inline-block;
}
.header .logo img {
  height: 50px;
}
.header .logo .logo-auth {
  height: 50px;
  background: url("../assets/logo.svg") no-repeat;
}
.header .log-in {
  background: #b1c909;
  border-radius: 32px;
  display: flex;
  height: 56px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.header .log-in img {
  width: 32px;
  height: 32px;
}
.header .log-in span {
  color: var(--white, #fff);
  /* Text-normal */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
}
.header .log-in span {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.header .user {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.header .user .logo-user {
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: #1b2f46;
}
.header .user .logo-user img {
  width: 20px;
  height: 28px;
  position: relative;
  top: 12px;
}
.header .user span {
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-right: 12px;
}
.header .user .popup {
  display: none;
  color: #b1c909;
  text-overflow: ellipsis;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  padding: 40px;
  border-radius: 12px;
  background: #1b2f46;
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
  position: absolute;
  right: 0px;
  top: 70px;
  z-index: 90;
}
.header .user .popup:before {
  content: "";
  display: block;
  position: absolute;
  border-top: 9px solid transparent;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid #1b2f46;
  right: 20px;
  top: -18px;
}
.header .user:hover .popup {
  display: inline-block;
}
@media (min-width: 320px) and (max-width: 1600px) {
  .header {
    margin: 0px 0px 20px;
  }
}
@media (min-width: 360px) and (max-width: 767px) {
  .header {
    margin: 0px 0px 20px;
  }
  .header .logo {
    height: 36px;
  }
  .header .logo img {
    width: 154px;
    height: auto;
  }
  .header .logo .logo-auth {
    background: url("../assets/logo-small.svg") no-repeat;
  }
  .header .user .logo-user {
    width: 36px;
    height: 36px;
  }
  .header .user .logo-user img {
    width: 13px;
    height: 18px;
    position: relative;
    top: 9px;
  }
  .header .user span {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
