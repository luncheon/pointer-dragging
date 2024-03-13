export declare function pointerDragging(pointerId: number): AsyncIterable<PointerEvent & { readonly type: "pointermove" | "pointerup" | "pointercancel" }>;
