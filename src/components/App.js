import React , {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'

console.log({AppContext})

const App = () =>{
  //[配列(状態),関数(手段)]を渡す
  const [state, dispatch] = useReducer(reducer,[])

  return (
    <AppContext.Provider value = {"HELLO I am a Provider"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  )
}

export default App
