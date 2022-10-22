<script setup>
import { onMounted, ref } from "vue";
import useApi from "../composables/useApi.js";

const { currentState, fetchTariffList } = useApi();
const clickToggle = ref(false);

onMounted(() => fetchTariffList());
console.log("I am logged", currentState);

const toggleB = () => (clickToggle.value = !clickToggle.value);
</script>
<template>
  <div class="header">
    <div><h1>Weight Tracker</h1></div>
    <div v-if="clickToggle">
      currently you are using {{ currentState?.ip }} Ip
    </div>
  </div>
  <div class="ip">
    <button v-if="!clickToggle" @click="toggleB">show My IP</button
    ><button v-if="clickToggle" @click="toggleB">hide My IP</button>
  </div>
</template>

<style>
.header {
  width: 100%;
  background-color: pink;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.col {
  display: flex;
  height: 300px;
}
.col1 {
  background-color: aquamarine;
  width: 30%;
}
.col2 {
  background-color: rgb(11, 15, 15);
  width: 70%;
}
.ip {
  text-align: center;
}
</style>
