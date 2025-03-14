<script>
import AppAlert from "./components/AppAlert.vue";
import colorDirectives from "./directives/colorDirectives";
import focucDirectives from "./directives/focucDirectives";
export default {
  data() {
    return {
      propsalert: {
        type: "primary",
        title: "Внимание!",
        text: "Важное сообщение обрати внимание",
        isClose: true,
      },
      color: "red",
      type: "color",
    };
  },
  components: { AppAlert },
  methods: {
    toggleAlert() {
      this.propsalert.isClose = !this.propsalert.isClose;
    },
  },
  directives: { focus: focucDirectives, color: colorDirectives },
};
</script>

<template>
  <div class="item">
    <AppAlert
      v-if="propsalert.isClose"
      :alert="propsalert"
      @close="propsalert.isClose = false"
    ></AppAlert>
    <div class="container">
      <button class="btn" @click="toggleAlert">
        {{ propsalert.isClose ? "Скрыть" : "Показать" }} сообщение
      </button>
    </div>
    <div class="container">
      <h3 v-color:[type].blink.hover="color">Свои директивы</h3>
      <input type="text" v-focus />
      <button class="btn" @click="color = 'gray'">Поменять цвет</button>
      <button
        class="btn"
        @click="type = type === 'color' ? 'backgroundColor' : 'color'"
      >
        Поменять тип
      </button>
    </div>
    <div class="container">
      <button class="btn" @click="$alert('Wow')">Плагины</button>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.btn {
  padding: 10px;
  margin: 6px;
  width: auto;
  font-size: 15px;
  border: none;
  border-radius: 7px;
  background-color: gray;
  color: white;
}
.container {
  background-color: white;
  width: 90%;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
input {
  outline: none;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
