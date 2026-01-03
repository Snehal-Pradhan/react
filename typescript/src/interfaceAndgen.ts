interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const mass: Chai = {
  flavour: "masala",
  price: 30,
};

console.log(mass);

interface Discount {
  (price: number): number;
}

const apply50: Discount = (p) => p * 0.5;


