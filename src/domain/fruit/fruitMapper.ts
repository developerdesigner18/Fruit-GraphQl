
import { Fruit, FruitLimit } from './fruit';
import { FruitModel } from '../../infrastructure/persistence/models/fruitModel';

export class FruitMapper {
  static toDomain(fruitModel: FruitModel): Fruit {
    return new Fruit(fruitModel.name, fruitModel.description, fruitModel.limit);
  }

  static ToDomain(fruitModel: FruitModel): FruitLimit {
    return new FruitLimit(fruitModel.name, fruitModel.description, fruitModel.limit, fruitModel.amount, fruitModel.forceDelete);
  }

  static toPersistence(fruit: FruitLimit): FruitModel {
    return {
      name: fruit.name,
      description: fruit.description,
      limit: fruit.limit,
      amount: fruit.amount,
      forceDelete : fruit.forceDelete
    } as FruitModel;
  }
}
