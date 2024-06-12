import { configureStore } from '@reduxjs/toolkit'
import {userApi} from './services/userApi'
import {catPhrasesApi} from './services/catPhrases'
import { setupListeners } from '@reduxjs/toolkit/query'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [userApi.reducerPath]: userApi.reducer,
      [catPhrasesApi.reducerPath]: catPhrasesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware()
        .concat(catPhrasesApi.middleware)
        .concat(userApi.middleware),
  })
}

setupListeners(makeStore().dispatch)



// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']