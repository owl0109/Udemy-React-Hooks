//==飛んでくるデータ(イベント)==
//action = {
//  type: "CREATE_EVENT",
//  title: "2021年東京オリンピックについて",
//  body : "2020年の東京オリンピックは延期になりました..."
//}
//
//# before
//state = []
//
//# after
//state = [
//  {
//      id: 1,
//      title: "2020年東京オリンピックについて",
//      body : "2020年の東京オリンピックは延期になりました..."
//   }
//]
//
//# before
//state = [
//    {id: 1, titele: "タイトル1", body: "ボディー1"}
//    {id: 2, titele: "タイトル2", body: "ボディー2"}
//    {id: 3, titele: "タイトル3", body: "ボディー3"}
//]
//
//# after
//state = [
//    {id: 1, titele: "タイトル1", body: "ボディー1"}
//    {id: 2, titele: "タイトル2", body: "ボディー2"}
//    {id: 3, titele: "タイトル3", body: "ボディー3"}
//    {
//      id: 4,(この値が状態によって変化する),
//      title: '2020東京オリンピックについて',
//      body: '2020年の東京オリンピックは、中止になりました'
//    }
//]


const events =(state = [],action) => {
    switch(action.type){
        case 'CREATE_EVENT':
            const event = {title:action.title,body:action.body}
            const length = state.length
            const id = length === 0?  1 : state[length -1].id + 1
            return [...state,{id,...event}]
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENT':
            return state
        default:
            return state
    }
}

export default events