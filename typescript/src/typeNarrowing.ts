function getSomething(something: string | number):string {
    if (typeof something === "string") {
        return `making ${something} good`
    }
    return `${something} is a just a num`
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }

    return `serving default message`;
}


type ChaiOrder = {
    type: string
    sugar:number
}


function isChaiOrder(obj: any): obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }

    return `Serving custom chai : ${item}`
}


type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; spicelevel: number };
type ElaichiChai = { type: "elaici"; spicelevel: number };