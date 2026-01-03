function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("abc");

wrapInArray(23);

wrapInArray(true);

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("mass", "chai");
pair("food", 12);

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 100,
  data: { flavour: "chocolate" },
};
