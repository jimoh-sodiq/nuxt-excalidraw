<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import rough from "roughjs";
import { RoughCanvas } from "roughjs/bin/canvas";

const { width, height } = useWindowSize();
// const { x, y } = useMouse();
const canvas = ref();

const hexColorCode = ref("#0335fc");
const canvasBackground = computed(() => `bg-[${hexColorCode.value}]`);

const generator = rough.generator();

const rc = ref<RoughCanvas>();
const ctx = ref<CanvasRenderingContext2D>();
onMounted(() => {
  ctx.value = canvas.value.getContext("2d");
  rc.value = rough.canvas(canvas.value);
});

type ElementTypes = "rectangle" | "line";

const renderedElements = ref<any>([]);
const tempElements = ref<any>([]);

watch(renderedElements, () => {
  ctx.value?.clearRect(0, 0, canvas.value.width, canvas.value.height);
  renderedElements.value.forEach((item: any) => rc.value?.draw(item.roughElement));
});

const startPoint = ref<{ x: number; y: number }>({ x: 0, y: 0 });
const selectedShape = ref<ElementTypes>("line");
const isDrawing = ref(false);

function createElement(x1: number, y1: number, x2: number, y2: number) {
  switch (selectedShape.value) {
    case "line":
      const roughElement = generator.rectangle(x1, y1, x2-x1, y2-y1);
      return {
        x1,
        y1,
        x2,
        y2,
        roughElement,
      };
    default:
      break;
  }
}

// function handleTouchDown(event: TouchEvent) {}
// function handleTouchMove(event: TouchEvent) {}
// function handleTouchUp(event: TouchEvent) {}

function handleMouseDown(event: MouseEvent) {
  isDrawing.value = true;
  const element = createElement(
    event.clientX,
    event.clientY,
    event.clientX,
    event.clientY
  );
  renderedElements.value.push(element);
}

function handleMouseUp(event: MouseEvent) {
  isDrawing.value = false;
}

function handleMouseMove(event: MouseEvent) {
  // console.log(event);
  // ctx.value?.clearRect(0, 0, canvas.value.width, canvas.value.height);
  if (!isDrawing.value) return;
  const index = renderedElements.value.length - 1;
  const { x1, y1 } = renderedElements.value[index];
  const updatedElement = createElement(x1, y1, event.clientX, event.clientY);

  const renderedElementsCopy = [...renderedElements.value];
  renderedElementsCopy[index] = updatedElement;
  renderedElements.value = renderedElementsCopy;
  console.log(renderedElements.value)
  // console.log(x1, y1);
}

function resetCanvas() {
  (ctx.value as CanvasRenderingContext2D).reset();
}

function handleDrag() {}
</script>

<template>
  <div class="relative text-red-500">
    <!-- <button @click="resetCanvas" class="text-red-500">Reset Canvas</button> -->
    <NavBarMain />
    <!-- {{ tempElements }} -->
    <!-- {{ renderedElements.length }} -->
    <canvas
      @mousemove="handleMouseMove"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      ref="canvas"
      :width="width"
      :height="height"
    >
      It seems the canvas can not be rendered, please refresh the browser
    </canvas>
    <TheFooter />
  </div>
</template>
