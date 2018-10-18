// action cator
function changeMusicState(status){
    return {
        type:'MUSIC_STATE',
        payload:{showPlayer:status}
    }
}


export default changeMusicState;