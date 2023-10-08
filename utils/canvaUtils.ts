export function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  return distance;
}

export function isWithinElementBoundary(
  x: number,
  y: number,
  mainElement: any
) {
  const { type } = mainElement;
  if (
    !["rectangle", "line", "circle", "diamond", "text", "arrow"].includes(type)
  )
    return false;

  if (type == "line") return checkLineBoundary(x, y, mainElement);
  if (type == "rectangle" || type == "diamond")
    return checkRectangleBoundary(x, y, mainElement);
  if (type == "circle") return checkCircleBoundary(x, y, mainElement);
}

export function checkRectangleBoundary(x: number, y: number, element: any) {
  const { x1, y1, x2, y2 } = element;
  return x >= x1 && x <= x2 && y >= y1 && y <= y2;
}

export function checkCircleBoundary(x: number, y: number, element: any) {
  const { x1, y1, x2, y2 } = element;
  const distance = calculateDistance(x, y, x1, y1);
  const radius = calculateDistance(x1, y1, x2, y2) / 2;

  return distance < radius;
}

export function checkLineBoundary(x: number, y: number, element: any) {
  const { x1, y1, x2, y2 } = element;
  const A = x - x1;
  const B = y - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = -1;

  if (lenSq !== 0)
    // in case of 0 length line
    param = dot / lenSq;

  let xx, yy;

  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  const dx = x - xx;
  const dy = y - yy;
  const distance = Math.sqrt(dx * dx + dy * dy);
  console.log(distance);
  return distance < 4.5; // 4.5 is my chosen offset
}

export function getElementAtPosition(x: number, y: number, elements: any[]) {
  return elements.find((element) => element.x === x && element.y === y);
}
