class Drink {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new Drink("chocolate", 12);
masalaChai.flavour = "chocolate";

// access modifiers

class Chai {
  public flavour: string = "Masala";
  private secretIngredients = "Cardamom";
  reveal() {
    return this.secretIngredients;
  }
}

const c = new Chai();

const a = c.reveal();

class Shop {
  protected shopName = "food corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

class Wallet {
  #balance = 100;
  readonly capacity: number = 100;
  getBalance() {
    return this.#balance;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const ca = new ModernChai();

ca.sugar = 3;
