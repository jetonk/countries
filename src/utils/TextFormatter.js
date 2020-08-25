export const TextFormatter = (string) => {
  return string.replace(/([a-z](?=[A-Z]))/g, '$1 ');
}