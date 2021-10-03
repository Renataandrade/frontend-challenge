import React from 'react'
import { Status, StatusType } from 'components/Status'
import {
  APROVADO,
  EM_VALIDACAO,
  REPROVADO,
  STATUS
} from 'enums/status'
import { Currency } from 'helpers/currency'
import { IPurchaseList } from 'models/Purchase'

interface IRowTable {
  data: IPurchaseList
}

interface IStatusConfig {
  [APROVADO]: StatusType,
  [REPROVADO]: StatusType,
  [EM_VALIDACAO]: StatusType
}

const statusType: IStatusConfig = {
  [APROVADO]: "success",
  [EM_VALIDACAO]: "warning",
  [REPROVADO]: "danger"
}

export const Rows: React.FC<IRowTable> = (
  props
): JSX.Element => {
  const { data } = props
  
  const convertToPercent = (value: number) => {
    return (value * 100) + '%'
  }

  return (
    <tr className="small">
      <td>
        {data.code}
      </td>
      <td>
        {Currency.convertToBRL(data.price)}
      </td>
      <td>
        {data.date_purchase}
      </td>
      <td>
        {convertToPercent(data.percent_cashback)}
      </td>
      <td>
        {Currency.convertToBRL(data.cashback)}
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