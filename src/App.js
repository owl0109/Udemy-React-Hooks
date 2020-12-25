import React,{ useState } from 'react'

const App = () =>{
  const defaultValue = 0

  //useStateは配列。[0]=>セットした値[1]=>関数が格納されている
  //setCountは左の変数によって変化。priceならば、setPriceとする
  const [count,setCount] = useState(defaultValue)

  //使い方はsetStateと同じ変更する値を引数にする
  //引数には、関数を入れることができる
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(defaultValue)
  const double = () => setCount(count * 2)

  //関数ver
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const split3 = () => setCount(previousCount => judge3(previousCount))  

  const judge3 = (cnt) =>{
    if(cnt % 3 === 0){
      return cnt / 3
    }else{
      return cnt
    }
  }

  /*回答例1
    const split3 = () => setCount(previousCount => {
      if(previousCount % 3 === 0){
        return previousCount / 3
      }else{
      return previousCount
      }
    })  
  */

  /*回答例2(三項演算子の場合)
    const split3 = () => setCout(previousCount =>{
      retun previousCount % 3 === 0 ? previous / 3 : previousCount
    })

  */


  return (
    //<div>を一番上にすると、表示増える。
    <React.Fragment>
      <div>
        Count：{count}
      </div>
      <div>
        <button onClick = {increment}>+1</button>
        <button onClick = {decrement}>-1</button>
      </div>
      <div>
        <button onClick = {increment2}>+1</button>
        <button onClick = {decrement2}>-1</button>
      </div>
      <div>
        <button onClick = {reset}>Reset</button>
      </div>
      <div>
        <button onClick = {double}>×2</button>
      </div>
      <div>
        <button onClick = {split3}>3の倍数の時だけ、3で割る</button>
      </div>
    </React.Fragment>
  )
}

export default App
