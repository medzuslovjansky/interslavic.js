export function splitIterable(str: string, separator: string): IterableIterator<string> {
  if (!separator) {
    return splitPerCharacter(str);
  }

  const offset = separator.length;
  let previousIndex: number = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (previousIndex === -1) {
        return { done: true, value: '' };
      }

      const nextIndex = str.indexOf(separator, previousIndex);
      const to = nextIndex >= 0 ? nextIndex : undefined;
      const value = str.slice(previousIndex, to);

      previousIndex = to === undefined ? -1 : to + offset;
      return { value, done: false };
    }
  }
}

function splitPerCharacter(str: string): IterableIterator<string> {
  let previousIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (!str) {
        return { done: true, value: '' };
      }

      const currentIndex = previousIndex + 1;
      const result = {
        value: str.slice(previousIndex, currentIndex),
        done: currentIndex > str.length,
      };

      previousIndex = currentIndex;
      return result;
    }
  }
}
