import rough from "roughjs";
import { RoughCanvas } from "roughjs/bin/canvas";

type ElementTypes = "rectangle" | "line";

export function useCanvasState() {
  const selectedElementType = ref<ElementTypes>("line");

  function setSelectedType(type: ElementTypes) {
    selectedElementType.value = type;
  }

  return {
    selectedElementType,
    setSelectedType,
  };
}
