# pointer-dragging

`AsyncIterable<PointerEvent>` to simplify the drag handling.

## Installation

```sh
npm i luncheon/pointer-dragging
```

## Usage Example

https://codepen.io/luncheon/pen/PogzLEz

```js
import { pointerDragging } from "@luncheon/pointer-dragging";

el.addEventListener("pointerdown", async e0 => {
  if (e0.button !== 0) {
    return;
  }
  el.textContent = "dragging";
  for await (const e of pointerDragging(e0.pointerId)) {
    // e: PointerEvent & { type: "pointermove" | "pointerup" | "pointercancel" }
    if (e.type !== "pointercancel") {
      el.style.left = `${e.clientX - e0.offsetX}px`;
      el.style.top = `${e.clientY - e0.offsetY}px`;
    }
  }
  el.textContent = "drag me";
});
```

## License

WTFPL
