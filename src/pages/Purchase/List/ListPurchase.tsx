import React from 'react'
import { Button } from '../../../components/Button'
import { CashbackCard } from '../../../components/CashbackCard'
import { Table } from '../../../components/Table'

export const ListPurchase = () => {
  return (
    <div className="container">
      {/** Meu Cashback */}
      <div className="row p-3 mt-4 d-flex justify-content-center">
        <CashbackCard value={500} />
      </div>

      {/** Minhas Compras */}
      <div className="row mt-5">
        <div className="col">
          <h5>Minhas Compras</h5>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-md-end">
          <Button
            id="register-purchase"
            type="button"
            color="info"
          >
            Cadastrar compra
          </Button>
        </div>
        <Table />
      </div>
    </div>
  )
}