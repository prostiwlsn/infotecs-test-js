import { useCallback, useState, useRef } from 'react'
import requestConfig from './functions/requestConfig.json'

function Filters({setPageSize, setPageNumber, setFilterType, setFilterValue, totalPageNumber, pageNumber}){

    const filterOptions = requestConfig.filterOptions
        .map(option => <option value={option.value}>{option.name}</option>)

    const [currentPageSize, setCurrentPageSize] = useState(requestConfig.defaultPaginationValues.pageSize)

    const filterTypeRef = useRef(null)
    const filterValueRef = useRef(null)

    const pageSizeRef = useRef(null)
    
    function applyFilter(){
        setPageNumber(1)
        setPageSize(currentPageSize)

        setFilterType(filterTypeRef.current.value)
        setFilterValue(filterValueRef.current.value)

        console.log(filterTypeRef.current.value, filterValueRef.current.value)
    }

    return (
        <>
            <div style={{margin: 2}}>
                Filter by:
                <select ref={filterTypeRef} style={{marginRight: "0.5em", marginLeft: "0.5em"}}>
                    {filterOptions}
                </select>
                <input type="text" placeholder="Filter value" ref={filterValueRef}></input>
            </div>
            <div style={{margin: 2}}>
                <div className='flex-row'>
                    <div style={{marginRight: "0.5em"}}>Page size: {currentPageSize}</div>
                    <input type="range" style={{padding: 0}} ref={pageSizeRef} min="1" max="100"
                        defaultValue={requestConfig.defaultPaginationValues.pageSize} onChange={(e) => setCurrentPageSize(e.target.value)}></input>
                </div>
            </div>
            <div style={{margin: 2}}>
                <button disabled={pageNumber == 1} style={{marginRight: "0.5em"}} onClick={() => setPageNumber(pageNumber-1)}>Previous</button>
                    Current page: {pageNumber}
                <button disabled={pageNumber >= totalPageNumber} style={{marginLeft: "0.5em"}} onClick={() => setPageNumber(pageNumber+1)}>Next</button>
            </div>
            <div style={{marginTop: 2, marginBottom: 4}}>
                <button onClick={applyFilter} style={{marginRight: "0.5em"}}>Apply</button>
                <button>Clear</button>
            </div>
        </>
    )
}

export default Filters