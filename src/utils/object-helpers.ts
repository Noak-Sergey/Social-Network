import {UserType} from "../Redux/storeType";

type newObjPropsType = {
    followed: boolean
}

export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: string, newObjProps: newObjPropsType) => {
    return items.map(u => {
        // @ts-ignore
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}