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

function App() {
  let [balance, setBalance] = useState(0)
  let [message, setMessage] = useState('default message')

  // START VendingMachinePanel
  // logic here
  // END VendingMachinePanel

  // START CoinSlot
  const validateCoin = coinType => {
    if (coinMapping[coinType]) {
      setBalance((balance += coinMapping[coinType]))
      setMessage(`Current Balance is: $${balance / 100}`)
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
    console.log(evt.target.innerText)
  }

  const itemList = []

  Object.keys(itemMapping).forEach(key => {
    itemList.push(<button onClick={evt => handleItemClick(evt)}>{key}</button>)
  })
  // END ItemSelector

  return (
    <div className="App">
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
