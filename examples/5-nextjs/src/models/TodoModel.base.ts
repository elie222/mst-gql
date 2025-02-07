/* This is a mst-sql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef, QueryBuilder } from "mst-gql"


import { RootStore } from "./index"

/**
 * TodoBase
 * auto generated base class for the model TodoModel.
 */
export const TodoModelBase = MSTGQLObject
  .named('Todo')
  .props({
    __typename: types.optional(types.literal("Todo"), "Todo"),
    id: types.identifier,
    text: types.maybeNull(types.string),
    complete: types.maybeNull(types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class TodoModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get text() { return this.__attr(`text`) }
  get complete() { return this.__attr(`complete`) }

}

export function selectFromTodo() {
  return new TodoModelSelector()
}

export const todoModelPrimitives = selectFromTodo().id.text.complete.toString()

