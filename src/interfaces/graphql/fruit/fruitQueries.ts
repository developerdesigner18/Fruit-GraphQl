import { queryField, nonNull, arg, objectType } from 'nexus';

export const FruitObjectType = objectType({
  name: 'FruitLimit',
  definition(t) {
    t.string('name');
    t.string('description');
    t.int('limit');
    t.int('amount');
    t.boolean('forceDelete');
  },
});

export const findFruitQuery = queryField('findFruit', {
  type: FruitObjectType,
  args: {
    name: nonNull(arg({ type: 'String' })),
  },
  resolve: async (_, { name }, { fruitService }) => {
    const fruit = await fruitService.findFruitByName(name);
    return {
      name: fruit.name,
      description: fruit.description,
      limit: fruit.limit,
      amount: fruit.amount,
      forceDelete: fruit.forceDelete,
    };
  },
});
