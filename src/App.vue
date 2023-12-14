<template>
  <div id="app">
    <div class="wrap">
      <HeaderBox @openModalLogIn="openModalLogIn" />
      <!-- <div class="content">
        <router-view v-slot="{ Component, route }">
          <transition name="fade-route">
            <component
              :is="Component"
              :key="route.path"
            />
          </transition>
        </router-view>
      </div> -->
      <div class="pages">
        <MainPage v-if="!isAuth" />
        <TasksPage v-else @openModal="openModalAddTask" />
      </div>
      <Modal
        @close="closeModal"
        :close="isCloseModalComp || isOpenModalLogInComp"
        :top="isModalTypeComp"
      >
        <component
          @openModal="openModal"
          @closeModal="closeModal"
          :is="isModalTypeComp"
        ></component>
      </Modal>
    </div>
  </div>
</template>

<script>
import HeaderBox from "./components/HeaderBox.vue";
import Modal from "./components/ModalBox.vue";
import TemplateLogIn from "./components/TemplateLogIn.vue";
import TemplateReg from "./components/TemplateReg.vue";
import TemplateAddTask from "./components/TemplateAddTask.vue";
import MainPage from "./screens/MainPage.vue";
import TasksPage from "./screens/TasksPage.vue";

export default {
  name: "App",
  components: {
    HeaderBox,
    Modal,
    TemplateLogIn,
    TemplateReg,
    MainPage,
    TasksPage,
    TemplateAddTask,
  },
  data() {
    return {
      isOpenModalLogIn: false,
      isCloseModal: false,
      modalType: {
        logIn: "TemplateLogIn",
        reg: "TemplateReg",
        addTask: "TemplateAddTask",
      },
      isModalType: "TemplateLogIn",
    };
  },
  computed: {
    isOpenModalLogInComp() {
      return this.isOpenModalLogIn;
    },
    isCloseModalComp() {
      return this.isCloseModal;
    },
    isModalTypeComp() {
      return this.isModalType;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    openModalLogIn() {
      this.isOpenModalLogIn = true;
      this.isModalType = this.modalType["logIn"];
    },
    closeModal() {
      this.isCloseModal = false;
      this.isOpenModalLogIn = false;
    },
    openModal(type) {
      this.isModalType = this.modalType[type];
      this.isCloseModal = true;
    },
    openModalAddTask(type) {
      this.isModalType = this.modalType[type];
      this.isCloseModal = true;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-Bold.eot");
  src:
    url("./fonts/Montserrat-Bold.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Bold.woff2") format("woff2"),
    url("./fonts/Montserrat-Bold.woff") format("woff"),
    url("./fonts/Montserrat-Bold.ttf") format("truetype"),
    url("./fonts/Montserrat-Bold.svg#Montserrat-Bold") format("svg");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-ExtraLight.eot");
  src:
    url("./fonts/Montserrat-ExtraLight.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-ExtraLight.woff2") format("woff2"),
    url("./fonts/Montserrat-ExtraLight.woff") format("woff"),
    url("./fonts/Montserrat-ExtraLight.ttf") format("truetype"),
    url("./fonts/Montserrat-ExtraLight.svg#Montserrat-ExtraLight") format("svg");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-Medium.eot");
  src:
    url("./fonts/Montserrat-Medium.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Medium.woff2") format("woff2"),
    url("./fonts/Montserrat-Medium.woff") format("woff"),
    url("./fonts/Montserrat-Medium.ttf") format("truetype"),
    url("./fonts/Montserrat-Medium.svg#Montserrat-Medium") format("svg");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-Thin.eot");
  src:
    url("./fonts/Montserrat-Thin.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Thin.woff2") format("woff2"),
    url("./fonts/Montserrat-Thin.woff") format("woff"),
    url("./fonts/Montserrat-Thin.ttf") format("truetype"),
    url("./fonts/Montserrat-Thin.svg#Montserrat-Thin") format("svg");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-ExtraBold.eot");
  src:
    url("./fonts/Montserrat-ExtraBold.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-ExtraBold.woff2") format("woff2"),
    url("./fonts/Montserrat-ExtraBold.woff") format("woff"),
    url("./fonts/Montserrat-ExtraBold.ttf") format("truetype"),
    url("./fonts/Montserrat-ExtraBold.svg#Montserrat-ExtraBold") format("svg");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-Light.eot");
  src:
    url("./fonts/Montserrat-Light.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Light.woff2") format("woff2"),
    url("./fonts/Montserrat-Light.woff") format("woff"),
    url("./fonts/Montserrat-Light.ttf") format("truetype"),
    url("./fonts/Montserrat-Light.svg#Montserrat-Light") format("svg");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-SemiBold.eot");
  src:
    url("./fonts/Montserrat-SemiBold.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-SemiBold.woff2") format("woff2"),
    url("./fonts/Montserrat-SemiBold.woff") format("woff"),
    url("./fonts/Montserrat-SemiBold.ttf") format("truetype"),
    url("./fonts/Montserrat-SemiBold.svg#Montserrat-SemiBold") format("svg");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-Black.eot");
  src:
    url("./fonts/Montserrat-Black.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Black.woff2") format("woff2"),
    url("./fonts/Montserrat-Black.woff") format("woff"),
    url("./fonts/Montserrat-Black.ttf") format("truetype"),
    url("./fonts/Montserrat-Black.svg#Montserrat-Black") format("svg");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat-Regular.eot");
  src:
    url("./fonts/Montserrat-Regular.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Regular.woff2") format("woff2"),
    url("./fonts/Montserrat-Regular.woff") format("woff"),
    url("./fonts/Montserrat-Regular.ttf") format("truetype"),
    url("./fonts/Montserrat-Regular.svg#Montserrat-Regular") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  margin: 0px;
  background: #0a1f38;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
  width: 100vw;
}
.wrap {
  margin: 0px auto;
  padding-top: 40px;
  box-sizing: border-box;
  width: 1600px;
}
@media (min-width: 1206px) and (max-width: 1600px) {
  .wrap {
    width: 1206px;
    padding-top: 20px;
  }
}
@media (min-width: 768px) and (max-width: 1205px) {
  .wrap {
    margin: 0px 40px;
    width: calc(100vw - 80px);
    padding-top: 20px;
  }
}
@media (min-width: 360px) and (max-width: 767px) {
  .wrap {
    margin: 0px 20px;
    width: calc(100vw - 40px);
    padding-top: 20px;
  }
}
</style>
