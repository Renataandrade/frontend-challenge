import React from 'react'
import { useHistory } from 'react-router'
import { Button, CashbackCard } from '../../../components'
import { PAGES } from '../../../enums/pages'
import { TableList } from './TableList'

export const ListPurchase: React.FC = (): JSX.Element => {
  const history = useHistory()

  return (
    <div className="container">
      {/** My Cashback */}
      <div className="row p-3 mt-4 d-flex justify-content-center">
        <CashbackCard value={500} />
      </div>

      {/** My Purchases */}
      <div className="row mt-5 mb-4">
        <div className="col">
          <h5>Minhas Compras</h5>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-md-end">
          <Button
            id="register-purchase"
            type="button"
            color="info"
            onClick={() => {
              history.push(PAGES.CREATE_PURCHASE)
            }}
          >
            Cadastrar compra
          </Button>
        </div>
      </div>
      <TableList />
    </div>
  )
}