// 一个组件对应着reducer，reducer是一个纯函数
let initState = {
    showPlayer:true
};

const reducer = function (state=initState,action){
    switch (action.type){
        case 'MUSIC_STATE':
            return {
                ...state,
                showPlayer: action.payload.showPlayer//showplayer只有一个数据
                
            }
        default: 
            return state
    }
}

export default reducer;