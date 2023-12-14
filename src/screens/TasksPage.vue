<template>
  <div class="tasks-page">
    <div class="tasks">
      <TaskBox v-for="task in tasks" :task="task" :key="task.id" />
    </div>
    <div class="button-add-task" @click="$emit('openModal', 'addTask')">
      <img src="../assets/cross-2.svg" alt="img" />
    </div>
  </div>
</template>

<script>
import TaskBox from "../components/TaskBox.vue";

export default {
  name: "TasksPage",
  components: { TaskBox },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  mounted() {
    this.$store.dispatch("GET_TASKS");
  },
};
</script>

<style>
.tasks-page {
  padding-top: 40px;
}
.tasks-page .tasks {
  display: grid;
  grid-template-columns: calc(33.33% - 26px) calc(33.33% - 26px) calc(
      33.33% - 26px
    );
  grid-template-rows: auto;
  gap: 40px;
}
.tasks-page .button-add-task {
  background: #b1c909;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  position: fixed;
  right: 12px;
  bottom: 50px;
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
  z-index: 100;
  cursor: pointer;
}
.tasks-page .button-add-task img {
  width: 16px;
  height: 16px;
  position: relative;
  top: 20px;
}
@media (min-width: 1206px) and (max-width: 1600px) {
  .tasks-page .tasks {
    grid-template-columns: calc(33.33% - 13px) calc(33.33% - 13px) calc(
        33.33% - 13px
      );
    gap: 20px;
  }
}
@media (min-width: 768px) and (max-width: 1205px) {
  .tasks-page .tasks {
    grid-template-columns: 100%;
    gap: 20px;
  }
}
@media (min-width: 360px) and (max-width: 767px) {
  .tasks-page {
    padding-top: 20px;
  }
  .tasks-page .tasks {
    grid-template-columns: 100%;
    gap: 20px;
  }
}
</style>
