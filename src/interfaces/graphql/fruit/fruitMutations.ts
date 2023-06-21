

import { mutationField, nonNull, arg } from 'nexus';

export const storeFruitMutation = mutationField('storeFruitToFruitStorage', {
  type: 'String',
  args: {
    name: nonNull(arg({ type: 'String' })),
    amount: nonNull(arg({ type: 'Int' })),
  },
  resolve: async (_, { name, amount }, { fruitService }) => {
    await fruitService.storeFruit({ name, amount });
    return 'Fruit stored successfully.';
  },
});

export const removeFruitMutation = mutationField('removeFruitFromFruitStorage', {
  type: 'String',
  args: {
    name: nonNull(arg({ type: 'String' })),
    amount: nonNull(arg({ type: 'Int' })),
  },
  resolve: async (_, { name, amount }, { fruitService }) => {
    await fruitService.removeFruit({ name, amount });
    return 'Fruit removed successfully.';
  },
});

export const createFruitMutation = mutationField('createFruitForFruitStorage', {
  type: 'String',
  args: {
    name: nonNull(arg({ type: 'String' })),
    description: nonNull(arg({ type: 'String' })),
    limit: nonNull(arg({ type: 'Int' })),
  },
  resolve: async (_, { name, description, limit }, { fruitService }) => {
    await fruitService.createFruit({ name, description, limit });
    return 'Fruit created successfully.';
  },
});

export const updateFruitMutation = mutationField('updateFruitForFruitStorage', {
  type: 'String',
  args: {
    name: nonNull(arg({ type: 'String' })),
    description: nonNull(arg({ type: 'String' })),
  },
  resolve: async (_, { name, description }, { fruitService }) => {
    await fruitService.updateFruit({ name, description })
      .then((result: any) => {
        console.log(result, '....result')
      }).catch((err: any) => {
        console.log(err.message, '....result')
      });
    return 'Fruit updated successfully.';
  },
});

export const deleteFruitMutation = mutationField('deleteFruitFromFruitStorage', {
  type: 'String',
  args: {
    name: nonNull(arg({ type: 'String' })),
    forceDelete: nonNull(arg({ type: 'Boolean' })),
  },
  resolve: async (_, { name, forceDelete }, { fruitService }) => {
    await fruitService.deleteFruit({ name, forceDelete });
    return 'Fruit deleted successfully.';
  },
});
