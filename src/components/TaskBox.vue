<template>
  <div class="task">
    <div class="wrap-task">
      <div class="title">{{ task.title }}</div>
      <div class="desk">{{ task.content }}</div>
      <div class="button-box">
        <div class="button" @click="deleteTask(task.id)">
          <img src="../assets/cross.svg" alt="img" /><span>Удалить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskBox",
  props: ["task"],
  components: {},
  methods: {
    deleteTask(id) {
      this.$store.dispatch("DELETE_TASK", id);
    },
  },
};
</script>

<style>
.task {
}
.task .wrap-task {
  background: #b1c909;
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  position: relative;
}
.task .wrap-task:before {
  content: "";
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;
  background: url("../assets/tr.svg") no-repeat;
  width: 40px;
  height: 40px;
}
.task .title {
  padding: 20px 28px;
  border-bottom: 1px solid #97ab0d;
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
}
.task .desk {
  padding: 20px 28px 28px;
  color: #fff;
  text-overflow: ellipsis;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  width: 100%;
}
.task .button-box {
  display: flex;
  justify-content: flex-end;
}
.task .button-box .button {
  background: transparent;
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  align-content: center;
  margin: 8px;
}
.task .button-box .button img {
  margin-right: 12px;
  width: 16px;
  position: relative;
  top: -1px;
}
.task .button-box .button span {
  line-height: 56px;
}
</style>
