import { useState, useReducer, useEffect, Suspense } from 'react'
import Filters from './Filters'
import Table from './Table'
import TableHeader from "./TableHeader"
import UserDetails from './UserDetails'
import requestConfig from './functions/requestConfig.json'

function App() {

  const [pageSize, setPageSize] = useState(requestConfig.defaultPaginationValues.pageSize)
  const [pageNumber, setPageNumber] = useState(requestConfig.defaultPaginationValues.pageNumber)
  const [totalPageNumber, setTotalPageNumber] = useState(1)

  const [filterType, setFilterType] = useState(null)
  const [filterValue, setFilterValue] = useState("")

  const [sortColumn, setSortColumn] = useState(null)
  const [sortType, setSortType] = useState(null)

  const [userDetailsDisplayed, setUserDetailsDisplayed] = useState(false)
  const [userId, setUserId] = useState(1)

  return (
    <>
      <div className='container'>
        <UserDetails isDisplayed={userDetailsDisplayed} setIsDisplayed={setUserDetailsDisplayed} userId={userId}></UserDetails>
        <Filters totalPageNumber={totalPageNumber} pageNumber={pageNumber} setPageNumber={setPageNumber} 
          setPageSize={setPageSize} setFilterType={setFilterType} setFilterValue={setFilterValue}></Filters>
        <table>
          <TableHeader setSortColumn={setSortColumn} setSortType={setSortType} sortType={sortType} sortColumn={sortColumn}></TableHeader>
          <Table setTotalPageNumber={setTotalPageNumber} pageSize={pageSize} pageNumber={pageNumber} filterType={filterType}
            filterValue={filterValue} sortKey={sortColumn} sortType={sortType} setDetailsIsDisplayed={setUserDetailsDisplayed} setUserId={setUserId}></Table>
        </table>
      </div>
    </>
  )
}

export default App