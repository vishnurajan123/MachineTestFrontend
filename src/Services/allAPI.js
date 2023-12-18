import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register
export const registerAPI=async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/users/register`,user,"")
}
// login
export const loginAPI=async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/users/login`,user,"")
}
// add item
export const addCarAPI=async(car)=>{
    return await commonAPI("POST",`${BASE_URL}/cars/add`,car,"")
}
