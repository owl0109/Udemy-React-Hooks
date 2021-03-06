import React,{ useState,useContext } from 'react'
import {CREATE_EVENT,
  DELETE_ALL_EVENT,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () =>{
  const {state,dispatch} = useContext(AppContext)
  const [title, setTitile] = useState('')
  const [body, setBody] = useState('')


  //e.prebentDefault()がかなり重要
  const addEvent = e => {
    e.preventDefault()
    //dispatch関数を呼ぶ
    dispatch({
        type: CREATE_EVENT,
        title,
        body 
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601()
    })
    
    setBody('')
    setTitile('')
  }

  const deleteAllEvents = e =>{
    e.preventDefault()
    const result = window.confirm('すべてのイベントを本当に削除してもよろしいですか？')
    if(result){ 
      dispatch({type: DELETE_ALL_EVENT})
      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'すべてのイベントを削除しました',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const unCreatable = title === '' || body === ''

  const deleteAllOperationsLogs = e =>{
    console.log("ここ通っている")
    e.preventDefault()
    const result = window.confirm('すべての操作ログを削除しても良いですか？')
    if( result ){
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }

  }



  return(
      <div>
          <h4>イベント作成フォーム</h4>
          <form>
              <div className="form-group">
              <label htmlFor="formEventTitle">タイトル</label>
              <input className = "form-control" id="formEventTitle" value={title} onChange={e => setTitile(e.target.value)} />
              </div>

              <div className="form-group">
              <label htmlFor="formEventBody">ボディー</label>
              <textarea className = "form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
              </div>

              <button className="btn btn-primary"onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
              <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0} >すべてのイベントを削除する</button>
              <button className="btn btn-danger" onClick={deleteAllOperationsLogs} disabled={state.operationLogs.length === 0}>すべての操作ログを削除する</button>
          </form>
          <p></p>
      </div>
  )
}

export default EventForm

/*
 <h4>イベント作成フォーム</h4>

      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className = "form-control" id="formEventTitle" value={title} onChange={e => setTitile(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className = "form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary"onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0} >すべてのイベントを削除する</button>
        <button className="btn btn-danger">すべてのログを削除する</button>
      </form>
      <p></p>


*/