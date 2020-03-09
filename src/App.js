import React, { useState } from 'react'
import './App.css'

const coinMapping = {
  '10c': 10,
  '20c': 20,
  '50c': 50,
  '$1.00': 100,
  '$2.00': 200
}

const itemMapping = {
  Caramel: 250,
  Hazelnut: 310,
  'Organic Raw': 200
}

export const formatCentToDollars = cents => {
  return `$${cents / 100}`
}

function App() {
  let [balance, setBalance] = useState(0)
  let [message, setMessage] = useState('')

  // START VendingMachinePanel
  const validatePurchase = (balance, desiredItem) => {
    const balanceDiff = balance - itemMapping[desiredItem]

    if (balanceDiff >= 0) {
      setMessage(
        `Enjoy your ${desiredItem}. Here your change of ${formatCentToDollars(Math.abs(balanceDiff))} <dispense item>`
      )
      // TODO break down total change into coins
      setBalance(0)
    } else {
      setMessage(
        `Sorry your current balance of ${formatCentToDollars(
          balance
        )} is not enough. Please insert at least ${formatCentToDollars(
          Math.abs(balanceDiff)
        )} to purchase ${desiredItem}`
      )
    }
  }
  // END VendingMachinePanel

  // START CoinSlot
  const validateCoin = coinType => {
    if (coinMapping[coinType]) {
      setBalance((balance += coinMapping[coinType]))
      setMessage(`Current Balance is: ${formatCentToDollars(balance)}`)
    } else {
      setMessage(`Sorry we do not accept ${coinType} at the moment. <return coin>`)
    }
  }

  const insertCoin = () => {
    const coinType = prompt(`Insert your coin. Accepted coins are: ${Object.keys(coinMapping)}`)
    validateCoin(coinType)
  }
  // END CoinSlot

  // START ItemSelector
  const handleItemClick = evt => {
    validatePurchase(balance, evt.target.innerText)
  }

  const itemList = []

  Object.keys(itemMapping).forEach(key => {
    itemList.push(
      <div key={key}>
        <button onClick={evt => handleItemClick(evt)}>{key}</button>
        Costs: {`${formatCentToDollars(itemMapping[key])}`}
      </div>
    )
  })
  // END ItemSelector

  return (
    <div className="App">
      <h1>Delicious Vegan Chocolate</h1>

      <div id="VendingMachinePanel">
        <div id="CoinSlot">
          CoinSlot:
          <button onClick={insertCoin}>Insert Coin</button>
        </div>

        <div id="ItemSelector">
          ItemSelector:
          {itemList}
        </div>

        <div id="Message">{message}</div>
      </div>
    </div>
  )
}

export default App
