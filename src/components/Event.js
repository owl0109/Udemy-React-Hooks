import React from 'react'


//{state.map((event,index) => (<Event key = {index} event={event} dispatch = {dispatch}/>))}
const Event = ({ dispatch,event }) => {
    const id = event.id
    const handleClickDeleteButton = () => {
        dispatch({type:'DELETE_EVENT',id})
    }
      
    return (
        //ここindexいらない理由は、App.jsにてkeyを宣言しているから
        <tr>
          <td>{id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
          <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event