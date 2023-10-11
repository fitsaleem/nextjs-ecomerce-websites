'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import {persistor, store } from '@/redux/store'
import { PersistGate } from "redux-persist/integration/react";



const AuthProvider = ({children }:any) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SessionProvider>{children}</SessionProvider>
      </PersistGate>
    </Provider>
  )
}

export default AuthProvider;