import { removeFruitMutation, storeFruitMutation } from './../../interfaces/graphql/fruit/fruitMutations';


import { FruitRepository } from '../../domain/fruit/fruitRepository';
import { FruitFactory } from '../../domain/fruit/fruitFactory';
import { Fruit, FruitLimit } from '../../domain/fruit/fruit';
import { CreateFruitCommand } from '../commands/createFruitCommand';
import { RemoveFruitCommand } from '../commands/removeFruitCommand';
import { StoreFruitCommand } from '../commands/storeFruitCommand';
import { UpdateFruitCommand } from '../commands/updateFruitCommand';
import { DeleteFruitCommand } from '../commands/deleteFruitCommand';

export class FruitService {
  constructor(private readonly fruitRepository: FruitRepository) { }

  async createFruit(command: CreateFruitCommand): Promise<void> {
    const { name, description, limit } = command;
    const existingFruit = await this.fruitRepository.findByName(name);
    if (existingFruit) {
      throw new Error('Fruit already exists.');
    }
    const fruit = FruitFactory.create(name, description, limit);
    await this.fruitRepository.save(fruit);
  }

  async updateFruit(command: UpdateFruitCommand): Promise<void> {
    const { name, description } = command;
    const fruit = await this.fruitRepository.findByName(name);
    if (!fruit) {
      throw new Error('Fruit not found.');
    }
    const updatedFruit = fruit.updateDescription(description);
    await this.fruitRepository.update(updatedFruit);
  }

  async storeFruit(command: StoreFruitCommand): Promise<void> {
    const { name, amount } = command;
    const fruit = await this.fruitRepository.findByName(name);
    if (!fruit) {
      throw new Error('Fruit not found.');
    }
    if (fruit.limit - fruit.amount < amount) {
      throw new Error('Not have enough limit.');
    }
    const updatedFruit = fruit.addLimit(amount);
    await this.fruitRepository.update(updatedFruit);
  }

  async removeFruit(command: RemoveFruitCommand): Promise<void> {
    const { name, amount } = command;
    const fruit = await this.fruitRepository.findByName(name);
    if (!fruit) {
      throw new Error('Fruit not found.');
    }
    if (fruit.amount < amount) {
      throw new Error('Not have enough limit.');
    }
    const updatedFruit = fruit.removeLimit(amount);
    await this.fruitRepository.update(updatedFruit)
  }

  async deleteFruit(command: DeleteFruitCommand): Promise<void> {
    const { name, forceDelete } = command
    const fruit = await this.fruitRepository.findByName(name);
    if (!fruit) {
      throw new Error('Fruit not found.');
    }
    const updatedFruit = fruit.updateStatus(forceDelete);
    await this.fruitRepository.deleteByName(updatedFruit)
  }

  async findFruitByName(name: string): Promise<FruitLimit | null> {
    const fruit = await this.fruitRepository.findByName(name);
    if (!fruit) {
      throw new Error('Fruit not found.');
    }
    return fruit;
  }

}
