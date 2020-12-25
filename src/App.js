import React,{ useState } from 'react'

const App = props =>{

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () =>{
    setPrice(props.price)
    setName(props.name)
  }

  return (
    
    <React.Fragment>
      <div>
        <p>Name：{name}</p>
        <p>Price：{price}</p>
        <div>
          <button onClick = {() => setPrice(price + 1)}>+1</button>
          <button onClick = {() => setPrice(price - 1)}>-1</button>
          <button onClick = {reset}>Reset</button>
          {/* onChange = {e => setName(e.target.value)}は割と使う表現記法 */}
          <input value = {name} onChange = {e => setName(e.target.value)}/>
        </div>
        <p>
        
        </p>
      </div>
    </React.Fragment>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}


export default App
