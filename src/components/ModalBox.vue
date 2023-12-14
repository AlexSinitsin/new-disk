<template>
  <div class="modal" v-if="close">
    <div class="background" @click="$emit('close')"></div>
    <div :class="['body-modal', top]">
      <div class="close-button" @click="$emit('close')">
        <div>
          <img src="../assets/cross.svg" alt="img" />
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBox",
  components: {},
  props: ["close", "top"],
  methods: {},
};
</script>

<style>
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 100;
}
.modal .background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: #0a1f38;
  opacity: 0.7;
}
.modal .body-modal {
  padding: 80px;
  width: 780px;
  box-sizing: border-box;
  background: #1b2f46;
  position: absolute;
  left: calc(50vw - 390px);
  border-radius: 40px;
}
.modal .body-modal.TemplateLogIn {
  top: 164px;
}
.modal .body-modal.TemplateReg {
  top: 164px;
}
.modal .body-modal.TemplateAddTask {
  top: 74px;
}
.modal .body-modal .close-button {
  background: #b1c909;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
.modal .body-modal .close-button > div {
  display: flex;
  align-items: center;
}
.modal .body-modal .close-button img {
  width: 16px;
  height: 16px;
}
@media (min-width: 1205px) and (max-width: 1600px) {
  .modal .body-modal {
    padding: 56px;
    width: 594px;
    box-sizing: border-box;
    background: #1b2f46;
    position: absolute;
    left: calc(50vw - 297px);
    border-radius: 40px;
  }
  .modal .body-modal.TemplateLogIn {
    top: 34px;
  }
  .modal .body-modal.TemplateReg {
    top: 4px;
  }
  .modal .body-modal.TemplateAddTask {
    top: 20px;
  }
}
@media (min-width: 768px) and (max-width: 1205px) {
  .modal .body-modal {
    padding: 56px;
    width: 688px;
    box-sizing: border-box;
    background: #1b2f46;
    position: absolute;
    left: calc(50vw - 344px);
    top: 220px;
    border-radius: 40px;
  }

  .modal .body-modal.TemplateLogIn {
    top: 220px;
  }
  .modal .body-modal.TemplateReg {
    top: 154px;
  }
  .modal .body-modal.TemplateAddTask {
    top: 160px;
  }
}
@media (min-width: 360px) and (max-width: 767px) {
  .modal .body-modal {
    padding: 24px 16px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background: #1b2f46;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 40px;
  }
  .modal .body-modal.TemplateLogIn {
    top: 0px;
  }
  .modal .body-modal.TemplateReg {
    top: 0px;
  }
  .modal .body-modal.TemplateAddTask {
    top: 0px;
  }
  .modal .body-modal .close-button {
    background: #b1c909;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 56px;
    height: 56px;
    border-radius: 100px;
    position: absolute;
    right: 12px;
    top: 12px;
  }
}
</style>
