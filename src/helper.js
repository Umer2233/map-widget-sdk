const initResponsiveMap = (map) => {
  window.addEventListener("resize", () => {
    map.resize();
  });
};

export { initResponsiveMap };
