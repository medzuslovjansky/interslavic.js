function compare(a: number, b: number) {
  return a - b;
}

export function compressToRanges(indices: number[]): string[] {
  indices.sort(compare);

  const n = indices.length;
  const result: string[] = [];
  let i = 0;
  let j = 0;

  while (i < n)
  {
    j = i;
    while ((j + 1 < n) && (indices[j + 1] === indices[j] + 1)) {
      j++;
    }
    if (i === j) {
      result.push(`${indices[i]}`);
      i++;
    } else {
      result.push(`${indices[i]}-${indices[j]}`);
      i = ++j;
    }
  }

  return result;
}
