export function pointerDragging(pointerId) {
  let resolve;
  const abortController = new AbortController();
  const onPointerUp = e => {
    if (e.pointerId === pointerId) {
      abortController.abort();
      resolve(e);
    }
  };
  const signal = abortController.signal;
  const listenerOptions = { signal };
  addEventListener("pointermove", e => e.pointerId === pointerId && resolve(e), listenerOptions);
  addEventListener("pointerup", onPointerUp, listenerOptions);
  addEventListener("pointercancel", onPointerUp, listenerOptions);
  return {
    async *[Symbol.asyncIterator]() {
      while (!signal.aborted) yield await new Promise(r => (resolve = r));
    },
  };
};
