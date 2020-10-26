export type Lemma = any;

export function split(str: string): Lemma[] {
  return str.split(' ');
}

export function join(lemmas: Lemma[]): string {
  return lemmas.join(' ');
}
