// utils/suppressThreeNaN.js
export function silenceThreeComputeSphereWarning() {
  if (typeof window === "undefined" || window.__hideThreeNaN) return;

  window.__hideThreeNaN = true;

  const originalConsoleError = console.error;

  console.error = (...args) => {
    const first = args[0];

    if (
      typeof first === "string" &&
      first.includes(
        "THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN"
      )
    ) {
      return;
    }

    originalConsoleError(...args);
  };
}
