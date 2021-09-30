import React from 'react'
import { Status, StatusType } from '../../../../../components/Status'
import {
  APROVADO,
  EM_ANDAMENTO,
  REPROVADO,
  STATUS
} from '../../../../../enums/status'
import { IPurchase } from '../../../../../models/Purchase'

interface IRowTable {
  data: IPurchase
}

interface IStatusConfig {
  [APROVADO]: StatusType,
  [REPROVADO]: StatusType,
  [EM_ANDAMENTO]: StatusType
}

const statusType: IStatusConfig = {
  [APROVADO]: "success",
  [EM_ANDAMENTO]: "warning",
  [REPROVADO]: "danger"
}

export const Rows: React.FC<IRowTable> = (
  props
): JSX.Element => {
  const { data } = props

  return (
    <tr className="small">
      <td>
        {data.id}
      </td>
      <td>
        {data.price}
      </td>
      <td>
        {data.date_purchase}
      </td>
      <td>
        {data.percent_cashback}
      </td>
      <td>
        {data.cashback}
      </td>
      <td>
        <Status
          type={statusType[data.status]}
          title={STATUS[data.status]}
        />
      </td>
    </tr>
  )
}