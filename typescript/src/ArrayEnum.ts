const flavour: string[] = [];

const prices: number[] = [];

const rating: Array<number> = [4.5, 5.0];

type pokemon = {
  name: string;
  type: string;
  level: number;
};

const pokedex: pokemon[] = [{ name: "pikachu", type: "electric", level: 13 }];

const cities: readonly string[] = ["Delhi", "Pune"];

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["masala", 20];

let userInfo: [string, number?];

const location: readonly [string, string] = ["24.3", "25.2"];

// named tuples

const chaiItems: [name: string, price: number] = ["masala", 23];

// enums

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`making ${type}`);
}

makeChai(ChaiType.GINGER);

enum RandomEnum {
  ID = 1,
  NAME = "chai",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.HIGH;

let t: [string, number] = ["chai", 10];
