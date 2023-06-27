import React from 'react'
import "./Filters.css"	

export default function Filters({setSort, handleSort, type}) {

  return (
    <div className="filterSantas-container">
                <select
                   name="filterSantas"
                  id=""
                  className="filters_style"
                   onChange={(e)=>handleSort(e, type)}
              >
                  <option value="Z-A">Z-A</option>
                  <option value="A-Z">A-Z</option>
                </select>
           </div>
  )
}
