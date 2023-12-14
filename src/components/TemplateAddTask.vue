<template>
  <div class="template-add-task">
    <h2>Добавление заметки</h2>
    <div class="input-box">
      <label for="">Название заметки</label>
      <input
        type="text"
        v-model="title"
        @input="changeTitle"
        placeholder="Введите название"
      />
      <p class="counter">
        <span>{{ titleCount }}</span
        >/64
      </p>
    </div>
    <div class="input-box">
      <label for="">Текст заметки</label>
      <textarea
        v-model="desk"
        @input="changeDesk"
        placeholder="Введите значение"
      ></textarea>
      <p class="counter">
        <span>{{ deskCount }}</span
        >/255
      </p>
    </div>

    <div class="button-box">
      <div class="button" @click="auth">Добавить</div>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "TamplateAddTask",
  components: {},
  data() {
    return {
      title: "",
      desk: "",
      titleCount: 0,
      deskCount: 0,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  methods: {
    changeTitle() {
      this.titleCount = this.title.length;
      if (this.title.length > 64) {
        this.title = this.title.slice(0, -1);
        this.titleCount = this.title.length;
      }
    },
    changeDesk() {
      this.deskCount = this.desk.length;
      if (this.desk.length > 255) {
        this.desk = this.desk.slice(0, -1);
        this.deskCount = this.desk.length;
      }
    },
    auth() {
      this.$store
        .dispatch("CREATE_TASK", {
          title: this.title,
          content: this.desk,
        })
        .then(() => {
          if (!this.error) {
            this.title = "";
            this.desk = "";
            this.titleCount = 0;
            this.deskCount = 0;
            this.$emit("closeModal");
          }
        });
    },
  },
};
</script>

<style>
.template-add-task {
  text-align: left;
}
.template-add-task h2 {
  color: #fff;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  margin: 0px;
  margin-bottom: 40px;
}
.template-add-task .input-box {
  margin-bottom: 24px;
}
.template-add-task .input-box label {
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
.template-add-task .input-box input {
  height: 72px;
  width: 100%;
  padding-left: 28px;
  padding-right: 28px;
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
  margin-bottom: 8px;
}
.template-add-task .input-box input::-webkit-input-placeholder {
  color: #9da5af;
}
.template-add-task .input-box input:-moz-placeholder {
  color: #9da5af;
}
.template-add-task .input-box input:focus {
  outline: none;
  border: 2px solid #b1c909;
}
.template-add-task .input-box textarea {
  height: 72px;
  width: 100%;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 26px;
  box-sizing: border-box;
  color: #0a1f38;
  text-overflow: ellipsis;
  border-radius: 36px;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  border: 2px solid #fff;
  margin-bottom: 8px;
  resize: none;
  height: 170px;
  overflow: hidden;
}
.template-add-task .input-box textarea::-webkit-input-placeholder {
  color: #9da5af;
}
.template-add-task .input-box textarea:-moz-placeholder {
  color: #9da5af;
}
.template-add-task .input-box textarea:focus {
  outline: none;
  border: 2px solid #b1c909;
}
.template-add-task .input-box .counter {
  color: #9da5af;
  text-align: right;
  text-overflow: ellipsis;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0px;
}
.template-add-task .button-box {
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.template-add-task .button-box .button {
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
.template-add-task .button-box .button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.template-add-task .error {
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
  .template-add-task .button-box p {
    width: 328px;
  }
}
@media (min-width: 360px) and (max-width: 767px) {
  .template-add-task h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    margin: 0px;
    margin-bottom: 28px;
  }
  .template-add-task .button-box {
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    flex-flow: column wrap;
    align-items: center;
    margin-bottom: 20px;
  }
  .template-add-task .button-box p {
    font-size: 14px;
    line-height: 24px;
    order: 1;
  }
  .template-add-task .button-box p span {
    font-size: 14px;
    line-height: 24px;
  }
  .template-add-task .button-box .button {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
    box-sizing: border-box;
    order: 0;
  }
}
</style>
