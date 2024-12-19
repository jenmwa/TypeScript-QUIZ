export function createCodeBlock(code: string) {
  const preElement = document.createElement('pre');
  const codeElement = document.createElement('code');
  codeElement.textContent = code;
  preElement.appendChild(codeElement);
  return preElement;
}
