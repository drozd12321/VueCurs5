<template>
  <div class="alert">
    <div :class="alert.type"></div>
    <div class="content">
      <h2>{{ alert.title }}</h2>
      <p>{{ alert.text }}</p>
      <button class="btn" :class="alert.type" @click="$emit('close')">
        Закрыть
      </button>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["close"],
  props: {
    alert: Object,
  },
};
</script>
<style>
.btn {
  padding: 7px;
  margin: 6px;
  width: 100px;
  font-size: 15px;
  border: none;
  border-radius: 7px;
}
.btn.danger {
  background-color: red;
  color: rgb(255, 255, 255);
}
.btn.primary {
  background-color: rgb(30, 255, 0);
  color: black;
}
.btn.warning {
  background-color: rgb(247, 223, 6);
  color: black;
}
.alert {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  background-color: white;
  border-radius: 10px;
  width: 90%;
  display: flex;
}
.danger {
  flex: 0.01;
  background-color: red;
  height: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.primary {
  flex: 0.01;
  background-color: rgb(30, 255, 0);
  height: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.warning {
  flex: 0.01;
  background-color: rgb(247, 223, 6);
  height: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.content {
  flex: 0.9;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
