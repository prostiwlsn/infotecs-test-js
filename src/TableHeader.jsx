import requestConfig from './functions/requestConfig.json'
import { useEffect, useState } from "react"

function TableHeader({ setSortColumn, setSortType, sortType, sortColumn }) {
    const [columns, setColumns] = useState(requestConfig.columns.map(col => ({ ...col, width: 100 })))

    function sortData(column) {
        if (sortColumn !== column) {
            setSortType("asc")
            setSortColumn(column)
            return
        }

        setSortColumn(column);
        setSortType(sortType == null ? "asc" : (sortType === "asc" ? "desc" : null))
    }

    const handleMouseDown = (index) => (e) => {
        e.preventDefault();
        const startX = e.clientX
        const startWidth = columns[index].width

        const handleMouseMove = (e) => {
            const newWidth = startWidth + (e.clientX - startX)
            setColumns((prevColumns) =>
                prevColumns.map((col, i) =>
                    i === index ? { ...col, width: Math.max(newWidth, 50) } : col
                )
            )
        }

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const header = columns.map((column, index) =>
        <th onClick={() => sortData(column.sortBy)} key={column.id} style={{ width: column.width, position: 'relative' }}>
            <div class="ellipsis"><span>{column.name}</span></div>
            <div
                onMouseDown={handleMouseDown(index)}
                style={{
                    cursor: 'col-resize',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: '100%',
                    width: '5px',
                    zIndex: 1,
                }}
            />
            <div className='tableHeaderSort'>
                {(sortColumn === column.sortBy && sortType) &&
                    <div>
                        {sortType === "asc" ? "▲" : "▼"}
                    </div>
                }
            </div>
        </th>
    )

    return (
        <tr>
            {header}
        </tr>
    )
}

export default TableHeader