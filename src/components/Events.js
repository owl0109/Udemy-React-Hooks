import React from 'react'
import Event from './Event'

//引数のdispatchを違う場所で使い続ける=>バケツリレーをしている=>propDrilling問題


const Events = ({state,dispatch}) => {
    return(
        <div>
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

export default Events
