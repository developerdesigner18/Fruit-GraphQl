export class Fruit {
  constructor(public readonly name: string, public readonly description: string, public readonly limit: number) { }
}

export class FruitLimit {
  constructor(public readonly name: string, public readonly description: string, public readonly limit: number, public readonly amount: number, public readonly forceDelete: boolean) { }
  
  updateDescription(description: string): FruitLimit {
    return new FruitLimit(this.name, description, this.limit, this.amount, this.forceDelete);
  }

  addLimit(limit: number): FruitLimit {
    return new FruitLimit(this.name, this.description, this.limit, (this.amount + limit),this.forceDelete);
  }

  removeLimit(limit: number): FruitLimit {
    return new FruitLimit(this.name, this.description, this.limit, (this.amount - limit),this.forceDelete);
  }

  updateStatus(forceDelete: boolean): FruitLimit {
    return new FruitLimit(this.name, this.description, this.limit, this.amount , forceDelete);
  }


}
