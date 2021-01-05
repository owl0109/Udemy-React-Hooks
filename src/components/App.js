import React , {useEffect,useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import OperationLogs from '../components/OperationLogs'

const APP_KEY = 'appWithRedux'

const App = () =>{
  const appState = localStorage.getItem(APP_KEY)
  //[配列(状態),関数(手段)]を渡す
  const initialState = appState ? JSON.parse(appState):
  {
    events:[],
    operationLogs:[]
  }
  const [state, dispatch] = useReducer(reducer,initialState)

  useEffect(() => {
    JSON.stringify(state)
    localStorage.setItem(APP_KEY,JSON.stringify(state))
  },[state])

  return (
    <AppContext.Provider value = {{ state,dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events/>
        <OperationLogs />
        
      </div>
    </AppContext.Provider>
  )
}

export default App
