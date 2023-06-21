
import { Fruit, FruitLimit } from '../../../domain/fruit/fruit';
import { FruitRepository } from '../../../domain/fruit/fruitRepository';
import { FruitModel } from '../../persistence/models/fruitModel';
import { FruitMapper } from '../../../domain/fruit/fruitMapper';

export class FruitRepositoryImpl implements FruitRepository {
  async save(fruit: FruitLimit): Promise<void> {
    const fruitPersistence = FruitMapper.toPersistence(fruit);
    await FruitModel.create(fruitPersistence);
  }

  async findByName(name: string): Promise<FruitLimit | null> {
    const fruitModel = await FruitModel.findOne({ name }).exec();
    if (!fruitModel) {
      return null;
    }
    return FruitMapper.ToDomain(fruitModel);
  }

  async deleteByName(fruit: FruitLimit): Promise<void> {
    const fruitModel = await FruitModel.findOneAndUpdate({ name: fruit.name },{$set:{forceDelete: fruit.forceDelete}}).exec();
  }

  async update(fruit: FruitLimit): Promise<FruitLimit | null> {
    const fruitModel = await FruitModel.findOneAndUpdate({ name: fruit.name },{$set:{description: fruit.description, limit: fruit.limit, amount: fruit.amount}}).exec();
    if (!fruitModel) {
      return null;
    }
    return FruitMapper.ToDomain(fruitModel);
  }

  async addLimit(fruit: FruitLimit): Promise<FruitLimit | null> {
    const fruitModel = await FruitModel.findOneAndUpdate({ name: fruit.name },{$set:{description: fruit.description, limit: fruit.limit}}).exec();
    if (!fruitModel) {
      return null;
    }
    return FruitMapper.ToDomain(fruitModel);
  }

  async removeLimit(fruit: FruitLimit): Promise<FruitLimit | null> {
    const fruitModel = await FruitModel.findOneAndUpdate({ name: fruit.name },{$set:{description: fruit.description, limit: fruit.limit}}).exec();
    if (!fruitModel) {
      return null;
    }
    return FruitMapper.ToDomain(fruitModel);
  }
}
