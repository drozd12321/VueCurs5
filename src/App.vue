<script>
import AppAlert from "./components/AppAlert.vue";
import colorDirectives from "./directives/colorDirectives";
import focucDirectives from "./directives/focucDirectives";
export default {
  inject: ["cnglang"],
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
      count: 0,
    };
  },
  components: { AppAlert },
  methods: {
    toggleAlert() {
      this.propsalert.isClose = !this.propsalert.isClose;
    },
    chgLnd() {
      this.cnglang("en");
      this.$forceUpdate();
    },
    increment() {
      this.count++;
    },
  },
  directives: { focus: focucDirectives, color: colorDirectives },
};
</script>

<template>
  <div class="item">
    <div class="counter">
      <transition name="flip" mode="out-in">
        <div :key="count" class="number">{{ count }}</div>
      </transition>
    </div>
    <button @click="increment">Увеличить</button>
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
      <h3>{{ $i18("app.title") }}</h3>
      <button class="btn" @click="chgLnd">{{ $i18("app.changeBtn") }}</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  position: relative;
  width: 50px;
  height: 50px;
  border: 2px solid #333;
  border-radius: 10px;
  overflow: hidden;
}

.number {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
}

.flip-enter-active,
.flip-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-enter-from {
  transform: rotateX(-180deg);
}

.flip-leave-to {
  transform: rotateX(180deg);
}
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
