import React,{ useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

//引数のdispatchを違う場所で使い続ける=>バケツリレーをしている=>propDrilling問題


const Events = () => {
    const {state} = useContext(AppContext)
    return(
        <div>
        {/* これで呼べる
            <div>{value}</div>
        */}
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
                    {state.map((event,index) => (<Event key = {index} event={event} />))}
                </tbody>
            </table>
        </div>
    )
}

export default Events
