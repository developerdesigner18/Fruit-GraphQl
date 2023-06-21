/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  FruitLimit: { // root type
    amount?: number | null; // Int
    description?: string | null; // String
    forceDelete?: boolean | null; // Boolean
    limit?: number | null; // Int
    name?: string | null; // String
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  FruitLimit: { // field return type
    amount: number | null; // Int
    description: string | null; // String
    forceDelete: boolean | null; // Boolean
    limit: number | null; // Int
    name: string | null; // String
  }
  Mutation: { // field return type
    createFruitForFruitStorage: string | null; // String
    deleteFruitFromFruitStorage: string | null; // String
    removeFruitFromFruitStorage: string | null; // String
    storeFruitToFruitStorage: string | null; // String
    updateFruitForFruitStorage: string | null; // String
  }
  Query: { // field return type
    findFruit: NexusGenRootTypes['FruitLimit'] | null; // FruitLimit
  }
}

export interface NexusGenFieldTypeNames {
  FruitLimit: { // field return type name
    amount: 'Int'
    description: 'String'
    forceDelete: 'Boolean'
    limit: 'Int'
    name: 'String'
  }
  Mutation: { // field return type name
    createFruitForFruitStorage: 'String'
    deleteFruitFromFruitStorage: 'String'
    removeFruitFromFruitStorage: 'String'
    storeFruitToFruitStorage: 'String'
    updateFruitForFruitStorage: 'String'
  }
  Query: { // field return type name
    findFruit: 'FruitLimit'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createFruitForFruitStorage: { // args
      description: string; // String!
      limit: number; // Int!
      name: string; // String!
    }
    deleteFruitFromFruitStorage: { // args
      forceDelete: boolean; // Boolean!
      name: string; // String!
    }
    removeFruitFromFruitStorage: { // args
      amount: number; // Int!
      name: string; // String!
    }
    storeFruitToFruitStorage: { // args
      amount: number; // Int!
      name: string; // String!
    }
    updateFruitForFruitStorage: { // args
      description: string; // String!
      name: string; // String!
    }
  }
  Query: {
    findFruit: { // args
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}