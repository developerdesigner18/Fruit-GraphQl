

import { Fruit, FruitLimit } from './fruit';


export class FruitFactory {
  static create(name: string, description: string, limit: number): FruitLimit {



    let amount: number = 0
    let forceDelete: boolean = false
    if (!name) {
      throw new Error('Name is required.');
    }

    if (description.length > 30) {
      throw new Error('Description must be 30 characters or less.');
    }

    if (limit < 0) {
      throw new Error('Limit must be a positive number.');
    }

    return new FruitLimit(name, description, limit, amount, forceDelete);
  }
}
