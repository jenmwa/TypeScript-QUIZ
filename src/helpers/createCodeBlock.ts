export function createCodeBlock(code: string): string {
  return `
    <pre class="code-block">
      <code>
        ${code}
      </code>
    </pre>
  `;
}
