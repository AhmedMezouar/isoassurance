<template>
  <div>
    <div
      v-if="!visible ? '' : visible"
      class="inline-flex items-center border-2 border-slate-300 rounded-xl"
    >
      <div class="relative inline-block h-3 w-6 cursor-pointer rounded-full">
        <input
          :id="`switch-${index}`"
          @input="handleChange"
          :value="JSON.stringify(value)"
          :name="name"
          type="checkbox"
          class="peer absolute h-3 w-6 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
        />
        <label
          :for="`switch-${index}`"
          class="before:content[''] absolute top-2/4 -left-1 h-4 w-4 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-10 bg-slate-400 shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
        >
          <div
            class="top-2/4 left-3/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
            data-ripple-dark="true"
          ></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { useVisiteStore } from "../../pinia/useVisite";
import { reactive, computed } from "vue";
const appointement = useVisiteStore();
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  value: {
    type: Object,
    default: {},
  },
  name: {
    type: String,
    default: "",
  },
});

const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  customChange: (s) => {
    if (s && typeof s === "string") {
      return true;
    } else {
      console.warn(`Invalid submit event payload!`);
      return false;
    }
  },
});
const handleChange = (event) => {
  emit("switchChange", event.target.value,event.target.checked);
};

const visible = computed(() => appointement.isFamily);
</script>

<style lang="scss" scoped></style>
