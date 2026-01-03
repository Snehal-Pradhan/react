let subs: number | string = 10;

let apiRequest: "pending" | "success" | "error" = "pending";

apiRequest = "success";

const orders = ["12", "20", "28", "42"];

let currentOrder: string | undefined;
for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
