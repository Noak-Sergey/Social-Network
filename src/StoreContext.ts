import React from "react";
import {store, StoreType} from "./Redux/redux-store";

const StoreContext = React.createContext(store);

export type ProviderType = {
    store: StoreType,
    children: React.ReactNode
}

// export const Provider = (props: ProviderType) => {
//     return (
//         <StoreContext.Provider>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

export default StoreContext;