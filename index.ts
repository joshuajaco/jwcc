export function replaceCommentsAndCommas(text: string) {
  return text
    .replace(
      /"(?:[^"\\]|\\.)*"?|\/\/[^\n]*|\/\*(?:[^*]|\*[^/])*(?:\*\/)?/g,
      (match) => {
        if (match[0] === '"') return match;
        if (match[1] === "*" && match.slice(-2) !== "*/") return match;
        return match.replace(/\S/g, " ");
      }
    )
    .replace(/"(?:[^"\\]|\\.)*"?|,\s*[}\]]/g, (match) =>
      match[0] === '"' ? match : match.replace(",", " ")
    );
}

export function parse(
  ...args: Parameters<typeof JSON.parse>
): ReturnType<typeof JSON.parse> {
  const [text, ...rest] = args;
  return JSON.parse(replaceCommentsAndCommas(text), ...rest);
}
