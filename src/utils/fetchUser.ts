export const getData = async <T>(url:string):Promise<T> => {
 
    const data=await fetch(url)
    const json=await data.json()
    return await json


}
 
