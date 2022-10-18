import { ref } from "vue";

export default function useApi() {
  const currentState = ref([]);

  const fetchTariffList = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();

      currentState.value = data;
    } catch (error) {
      console.log("error:", error);
    }
  };

  return { currentState, fetchTariffList };
}
