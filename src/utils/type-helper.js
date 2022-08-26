export function strToBool(str) {
  return str !== "false";
}

export function boolToStr(bool) {
  return bool === false ? "false" : "true";
}
