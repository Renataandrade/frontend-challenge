import React from 'react'
import CURRENCY from 'assets/svgs/currency.svg'

interface ICashbackCard {
  value: number
}

export const CashbackCard: React.FC<ICashbackCard> = (props): JSX.Element => {
  return (
    <section className="container">
      <div className="row bg-secondary rounded-3">
        <div className="col-md-9 col-12 bg-light border rounded-3">
          <h6 className="text-primary mt-3">Sabe o que é o seu cashback?</h6>
          <p>
            <small>
              Cashback quer dizer {`"dinheiro de volta"`}, e funciona de forma simples: <br/>
              Você faz uma compra e seu benefício vem com a devolução de parte do dinheiro gasto.
              Legal, né?
            </small>
          </p>
        </div>
        <div className="col-md-3 col-12 d-flex align-items-center justify-content-center">
          <div className="row text-white mt-2 ">
            <div className="col-4 text-center d-flex align-items-center">
              <img src={CURRENCY} alt="Currency" />
            </div>
            <div className="col-8">
              <p><small>Meu cashback</small></p>
              <h5>R$ {props.value}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}