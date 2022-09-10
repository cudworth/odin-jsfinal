function setStateHelper(fn, obj) {
  fn((prev) => {
    const next = { ...prev };
    Object.keys(obj).forEach((key) => {
      next[key] = obj[key];
    });
    return next;
  });
}

export { setStateHelper };
