const optionalFieldSanitizer = (value) => {
  if (value !== undefined) {
    if (value.trim() == '') {
      return undefined;
    } else {
      return value;
    }
  }

  return value;
};

module.exports = {
  optionalFieldSanitizer,
};
