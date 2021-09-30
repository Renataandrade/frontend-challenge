import React from 'react'

interface IColumnTable {
  columns: string[]
}

export const Columns: React.FC<IColumnTable> = (
  props
): JSX.Element => {
  const { columns } = props
  
  return (
    <thead className="bg-light">
      <tr>
        {columns.map((col, i) => {
          return (
            <th key={i} scope="col">{col}</th>
          )
        })}
      </tr>
    </thead>
  )
}