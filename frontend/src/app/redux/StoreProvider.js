"use client"
import { Provider } from "react-redux"
import createStore from "./store"
import { useRef } from "react"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const Providers =({children}) => {
    const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = createStore()
  }
  let persistor = persistStore(storeRef.current)
    return (
      <Provider store={storeRef.current}>
        <PersistGate persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    )
}
export default Providers; 