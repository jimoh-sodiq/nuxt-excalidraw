import rough from "roughjs";
import { RoughCanvas } from "roughjs/bin/canvas";

export function useCanvas(canvasElement: HTMLCanvasElement) {
  const generator = rough.generator();
  let rc = ref<RoughCanvas>();
  let ctx = ref();
  onMounted(() => {
    ctx.value = canvasElement.getContext("2d") as CanvasRenderingContext2D;
    rc.value = rough.canvas(canvasElement);
  });
  return {
    rg: generator,
    rc: rc.value as RoughCanvas,
    ctx: ctx.value,
  };
}
