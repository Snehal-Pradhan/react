const Chai = {
  name: "Marsala chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger tea",
  price: 23,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const arakChai: Tea = {
  name: "Arak chai",
  price: 46,
  ingredients: ["ginger", "tea leaves"],
};

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with ", updates);
};

const removeChai = (updates: Required<Chai>) => {
  console.log("everything required ...", updates);
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

type ChaiStats = Omit<Chai, "isHot">;
