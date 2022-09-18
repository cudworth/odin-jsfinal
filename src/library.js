function stateHelper(setStateFn, obj) {
  setStateFn((prev) => {
    const next = { ...prev };
    Object.keys(obj).forEach((key) => {
      next[key] = obj[key];
    });
    return next;
  });
}

function logError(error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(`Error code: ${errorCode}`);
  console.log(`Error message: ${errorMessage}`);
}

export { stateHelper, logError };
