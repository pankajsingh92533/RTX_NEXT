//it provide layer of rtk outside nextjs
"use client"
import { Provider } from "react-redux"
import { store } from "./store.js"
export function Providers({children})
{
    return <Provider store={store}>
        {children}
    </Provider>
}
//it is used in layout.js
