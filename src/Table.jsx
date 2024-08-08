import { useEffect, useState } from "react"
import getUsers from "./functions/getUsers"
import mapUsers from "./functions/mapUsers"

function Table({setTotalPageNumber, pageSize, pageNumber, filterType, filterValue, sortKey, sortType, setUserId, setDetailsIsDisplayed}) {
  let data = {}
  const [users, setUsers]= useState([])

  useEffect(() => {

    const fetchData = async () => {
      data = await getUsers(pageSize, pageNumber, filterType, filterValue, sortKey, sortType)
      
      setTotalPageNumber(Math.floor(data.total%pageSize > 0 ? data.total/pageSize + 1 : data.total/pageSize))

      setUsers(mapUsers(data.users).map(e => 
        <tr onClick={() => {setUserId(e.id); setDetailsIsDisplayed(true);}}>
          <td>
            <div class="ellipsis"><span>{e.fullName}</span></div>
          </td>
          <td>
            <div class="ellipsis"><span>{e.age}</span></div>
          </td>
          <td>
            <div class="ellipsis"><span>{e.gender}</span></div>
          </td>
          <td>
            <div class="ellipsis"><span>{e.phone}</span></div>
          </td>
          <td>
            <div class="ellipsis"><span>{e.address}</span></div>
          </td>
        </tr>))
    }
    fetchData()

  }, [pageSize, pageNumber, filterType, filterValue, sortKey, sortType])
  
  return (
    <>
      {users}
    </>
  )
}
  
export default Table