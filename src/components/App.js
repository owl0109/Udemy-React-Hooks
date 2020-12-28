import React , {useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Event from './Event'

const App = () =>{
  const [state, dispatch] = useReducer(reducer,[])
  const [title, setTitile] = useState('')
  const [body, setBody] = useState('')

  //e.prebentDefault()がかなり重要
  const addEvent = e => {
    e.preventDefault()
    //dispatch関数を呼ぶ
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body 
    })
    setBody('')
    setTitile('')
  }

  return (
    <div className="container-fluid">
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

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">すべてのイベントを削除する</button>
        <button className="btn btn-danger">すべてのログを削除する</button>
      </form>
      <p></p>
      <h4>イベント一覧</h4>
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event,index) => (<Event key = {index} event={event} dispatch = {dispatch}/>))}
        </tbody>

      </table>


    </div>
  )
}

export default App
