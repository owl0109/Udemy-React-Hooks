import React , {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'

console.log({AppContext})

const App = () =>{
  //[配列(状態),関数(手段)]を渡す
  const initialState = 
  {
    events:[]
  }
  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <AppContext.Provider value = {{ state,dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events/>
      </div>
    </AppContext.Provider>
  )
}

export default App
