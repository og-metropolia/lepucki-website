export function isValidInt(value) {
  return typeof value === 'number' && value > -2147483648 && value < 2147483647;
}

export function isValidVarchar(value, varcharLength) {
  return (
    typeof value === 'string' &&
    value.length === varcharLength &&
    value.length > 0 &&
    value.length < 65535
  );
}

export function isValidText(value) {
  return typeof value === 'string' && value.length > 0 && value.length < 65535;
}

export function isValidTimestamp(value) {
  const timestampRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  return timestampRegex.test(value);
}
