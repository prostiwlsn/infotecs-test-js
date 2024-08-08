import requestConfig from "./requestConfig.json"

export default async function getUsers(take, page, filterKey, filterValue, sortKey, sortOrder){

    const url = requestConfig.address + requestConfig.users

    + (!filterKey || !filterValue ? "" : requestConfig.filter)

    + '?' 

    + (requestConfig.select + '=' + requestConfig.selectColumns.join(","))

    + (!take || !page ? "" : 
        "&" + requestConfig.take + "=" + take + "&" + requestConfig.skip + "=" + ((page-1)*take).toString())

    + (!filterKey || !filterValue ? "" : 
        "&" + requestConfig.filterKey + "=" + filterKey + "&" + requestConfig.filterValue + "=" + filterValue)

    + (!sortKey || !sortOrder ? "" : 
        "&" + requestConfig.sort + "=" + sortKey + "&" + requestConfig.order + "=" + sortOrder)

    console.log(take, page, filterKey, filterValue, sortKey, sortOrder)
    console.log(url)

    try{
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status)
        }

        const data = await response.json()

        return data;

    } catch (error){
        console.error(error)
    }
}