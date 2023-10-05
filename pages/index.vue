<script setup lang="ts">
import { useRefHistory, useWindowSize } from "@vueuse/core";
import rough from "roughjs";
import { RoughCanvas } from "roughjs/bin/canvas";

const { width, height } = useWindowSize();
const { x, y } = useMouse();
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

const startPoint = ref();
const selectedShape = ref("rectangle");
const isDrawing = ref(false);

function drawShape(x1: number, y1: number, x2: number, y2: number) {
  switch (selectedShape.value) {
    case "rectangle":
      (rc.value as RoughCanvas).circle(x1, y1, 50);
      // (ctx.value as CanvasRenderingContext2D).clearRect(x1, y1, 30, 30);

      break;

    default:
      break;
  }
}

function handleMouseDown(event: MouseEvent) {
  isDrawing.value = true;
}

function handleMouseUp(event: MouseEvent) {
  isDrawing.value = false;
}

function handleMouseMove(event: MouseEvent) {
  // console.log(event);
  const { clientX, clientY, movementX, movementY } = event;

  if (isDrawing.value) {
    drawShape(clientX, clientY, movementX, movementY);
  }
}
function handleDrag() {}
</script>

<template>
  <div class="relative">
    <NavBarMain />
    <canvas
      @mousemove="handleMouseMove"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      ref="canvas"
      class=""
      :class="canvasBackground"
      :width="width"
      :height="height"
    >
      It seems the canvas can not be rendered, please refresh the browser
    </canvas>
    <TheFooter />
  </div>
</template>
