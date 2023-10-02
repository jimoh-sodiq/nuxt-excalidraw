<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    isActive?: boolean;
    iconClass?: string;
    iconSize?: string;
    index?: number | string;
    title?: string;
  }>(),
  {
    isActive: false,
    iconSize: "16px",
  }
);

const emit = defineEmits<{
  (event: "click"): void;
}>();

const isButtonPressed = ref(false);
const isButtonHovered = ref(false);

function handleMouseUp() {
  isButtonPressed.value = false;
  emit("click");
}

const buttonClass = computed(() => {
  let value = "";
  if (props.isActive) {
    value += "bg-purple-300/50";
  }
  if (isButtonPressed.value) {
    value += " ring-[1.2px] ring-purple-600";
  }
  if (isButtonHovered.value && !isButtonPressed.value && !props.isActive) {
    value += " bg-gray-100";
  }
  return value;
});
</script>

<template>
  <button
    :title="title"
    @mouseup="handleMouseUp"
    @mousedown="isButtonPressed = true"
    @mouseover="isButtonHovered = true"
    @mouseleave="
      isButtonHovered = false;
      isButtonPressed = false;
    "
    :class="buttonClass"
    class="rounded select-none p-2.5 transition-all outline-none relative"
  >
    <Icon
      :class="isActive ? 'text-purple-700' : 'text-gray-500'"
      :size="iconSize"
      :name="name"
    />
    <span
      v-if="index"
      class="text-gray-400 absolute bottom-0 right-0 text-[9px]"
      >{{ index }}</span
    >
  </button>
</template>
