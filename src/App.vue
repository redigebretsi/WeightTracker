<script setup>
import { ref, shallowRef, computed, watch, nextTick } from "vue";
import chart from "chart.js/auto";

const weights = ref([]);

//const weightChart1 = ref(null);

//const weightChart = shallowRef(null);

const weightInput = ref(60.0);

const currentWeight = computed(() => {
  return weights.value.sort((a, b) => b.date - a.date)[0] || { weight: 0 };
});

const addWeight = () => {
  weights.value.push({
    weight: weightInput.value,
    date: new Date().getTime(),
  });
};
</script>

<template>
  <h1>Weight Tracker</h1>
  <div class="current">
    <span>{{ currentWeight.weight }}</span>
    <small>Current Weight in KG</small>
  </div>
  <form @submit.prevent="addWeight">
    <input type="number" v-model="weightInput" />
    <input type="submit" Value="Add Weight" />
  </form>
  <div v-if="weights.length > 0">
    <h2>Last 7 days</h2>

    <div class="canvas-book">
      <canvas ref="weightChart1"></canvas>
    </div>

    <div class="weight-history">
      <h2>Weight history</h2>
      <table>
        <tr>
          <th>Weight</th>
          <th>Registered Date</th>
        </tr>

        <tr v-for="weight in weights" :key="weight.Date">
          <td>{{ weight.weight }}</td>
          <td>{{ new Date(weight.date).toLocaleDateString() }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid;
}
table {
  width: 100%;
}
</style>
