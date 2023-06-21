
import { Fruit, FruitLimit } from './fruit';

export interface FruitRepository {
  save(fruit: FruitLimit): Promise<void>;
  findByName(name: string): Promise<FruitLimit | null>;
  deleteByName(fruit: FruitLimit): Promise<void>;
  update(fruit: FruitLimit): Promise<FruitLimit | null>;
  addLimit(fruit: FruitLimit): Promise<FruitLimit | null>;
  removeLimit(fruit: FruitLimit): Promise<FruitLimit | null>;
}