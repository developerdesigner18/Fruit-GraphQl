
import { Document, model, Schema } from 'mongoose';

export interface FruitModel extends Document {
  name: string;
  description: string;
  limit: number;
  amount: number;
  forceDelete: boolean
}

const fruitSchema = new Schema<FruitModel>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 30 },
  limit: { type: Number, required: true, min: 0 },
  amount:{ type: Number, default: 0, min: 0},
  forceDelete: { type: Boolean, default: false}
},{timestamps: true});

export const FruitModel = model<FruitModel>('Fruit', fruitSchema);
