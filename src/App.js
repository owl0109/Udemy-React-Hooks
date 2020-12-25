import React,{ useState } from 'react'

const App = props =>{

  const [state, setState] = useState(props)
  const {name,price} = state

  return (
    
    <React.Fragment>
      <div>
        <p>Name：{name}</p>
        <p>Price：{price}</p>
        <div>
          <button onClick = {() => setState({...state, price:price + 1})}>+1</button>
          <button onClick = {() => setState({...state, price:price - 1})}>-1</button>
          <button onClick = {() => setState(props)}>Reset</button>
          {/* onChange = {e => setName(e.target.value)}は割と使う表現記法 */}
          <input value = {name} onChange = {e => setState({...state , name: e.target.value})}/>
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
