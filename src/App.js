import React,{ useEffect,useState } from 'react'

const App = props =>{

  const [state, setState] = useState(props)
  const {name,price} = state

  //レンダリング終了後、useEffectが走る
  useEffect(() => {
    console.log("UseEffect is invoked.")
  })
  
  //空の配列を渡すと、初回のみ起動
  useEffect(() => {
    console.log("DidMount.")
  },[])

  //nameが変更された時に走る
  useEffect(() => {
    console.log("this call back is name onley.")
  },[name])

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
