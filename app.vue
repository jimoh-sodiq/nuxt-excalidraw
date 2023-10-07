<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import rough from "roughjs";
import { RoughCanvas } from "roughjs/bin/canvas";

const { width, height } = useWindowSize();
// const { x, y } = useMouse();
const canvas = ref();

const selectedElementType = ref("line");

const hexColorCode = ref("#0335fc");
const canvasBackground = computed(() => `bg-[${hexColorCode.value}]`);

const generator = ref(rough.generator());

const rc = ref<RoughCanvas>();
const ctx = ref<CanvasRenderingContext2D>();
onMounted(() => {
  ctx.value = canvas.value.getContext("2d");
  rc.value = rough.canvas(canvas.value);
});

enum EditorMode {
  isDrawing = "isDrawing",
  isMoving = "isMoving",
}

type ElementTypes = "rectangle" | "line";

const renderedElements = ref<any>([]);
const tempElements = ref<any>([]);

watch(renderedElements, () => {
  ctx.value?.clearRect(0, 0, canvas.value.width, canvas.value.height);
  renderedElements.value.forEach((item: any) =>
    rc.value?.draw(item.roughElement)
  );
});

const editorMode = ref<EditorMode>(EditorMode.isDrawing);

const drawingTools = [
  "text",
  "eraser",
  "pen",
  "arrow",
  "line",
  "picture",
  "diamond",
  "circle",
  "rectangle",
];

// const startPoint = ref<{ x: number; y: number }>({ x: 0, y: 0 });
// const selectedShape = ref<ElementTypes>("line");
const isDrawing = ref(false);

// const mode = ref<EditorMode>(EditorMode.isDrawing);

watchEffect(() => {
  if (!drawingTools.includes(selectedElementType.value)) {
    editorMode.value = EditorMode.isMoving;
  } else {
    editorMode.value = EditorMode.isDrawing;
  }
});

function createElement(x1: number, y1: number, x2: number, y2: number) {
  let roughElement;
  if (selectedElementType.value == "line") {
    roughElement = generator.value.line(x1, y1, x2, y2);
    return {
      x1,
      y1,
      x2,
      y2,
      roughElement,
    };
  } else if (selectedElementType.value == "rectangle") {
    roughElement = generator.value.rectangle(x1, y1, x2 - x1, y2 - y1);
    return {
      x1,
      y1,
      x2,
      y2,
      roughElement,
    };
  } else {
    roughElement = generator.value.circle(
      x1,
      y1,
      calculateDistance(x1, y1, x2, y2)
    );
    return {
      x1,
      y1,
      x2,
      y2,
      roughElement,
    };
  }
}

function handleMouseDown(event: MouseEvent) {
  if (editorMode.value == EditorMode.isDrawing) {
    isDrawing.value = true;
  } else return;
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
  if (!isDrawing.value) return;
  const index = renderedElements.value.length - 1;
  const { x1, y1 } = renderedElements.value[index];
  const updatedElement = createElement(x1, y1, event.clientX, event.clientY);

  const renderedElementsCopy = [...renderedElements.value];
  renderedElementsCopy[index] = updatedElement;
  renderedElements.value = renderedElementsCopy;
}

function resetCanvas() {
  (ctx.value as CanvasRenderingContext2D).reset();
}

function handleDrag() {}

const name = ref("");
</script>

<template>
  <VitePwaManifest />
  <div class="relative text-red-500">
    <NavBarMain @changed="(val) => (selectedElementType = val)" />
    <!-- <input type="radio" value="line" v-model="selectedElementType" />
    <input type="radio" value="rectangle" v-model="selectedElementType" /> -->
    <canvas
      class="bg-gray-200"
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
