type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

interface TeaRecipe {
  water: number;
  milk: number;
}

/*
class MasalaChai implements TeaRecipe {
water = 100;
  milk = 50;
}
*/
interface CupSize {
  size: "small" | "large";
}
class Chai implements CupSize {
  size: "small" | "large" = "large";
}

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };

type Extra = { masala: number };

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "somu" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Twitter",
  version: 1,
};
