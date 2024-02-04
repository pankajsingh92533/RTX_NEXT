//it provide layer of rtk outside nextjs
"use Client"
const {provider}=require("react-redux")
import { store } from "./store"
export function Providers({children})
{
    return <provider store={store}>
        {children}
    </provider>
}
//it is used in layout.js
