<template>
  <div class="modal">
    <h3>Это модальное окно</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quod.
    </p>
    <button class="btn" @click="$emit('modal')">Закрыть окно</button>
  </div>
</template>
<script>
export default {
  emits: ["modal"],
};
</script>
<style scoped>
.modal {
  background-color: rgb(240, 234, 240);
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.btn {
  padding: 7px;
  margin: 6px;
  width: 100px;
  font-size: 15px;
  border: none;
  border-radius: 7px;
  background-color: rgb(82, 80, 82);
  color: white;
}
</style>
