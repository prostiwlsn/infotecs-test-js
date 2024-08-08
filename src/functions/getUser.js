import requestConfig from "./requestConfig.json"

export default async function getUser(id){
    if (isNaN(parseInt(id)) && typeof id != "number"){
        throw new Error("User ID is not a number")
    }

    try{
        const response = await fetch(requestConfig.address + requestConfig.users + "/" + id + '?' 
            + requestConfig.select + '=' + requestConfig.selectModalColumns.join(","));

        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status)
        }

        const data = await response.json();
        return data;
    } catch (error){
        console.error(error)
    }
}