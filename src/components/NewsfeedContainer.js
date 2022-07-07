import React from 'react'
import Newsfeed from "./Newsfeed"
import Friends from "./Friends"

function NewsfeedContainer(props) {
  return (
    <div id="newsContainer">
        <Newsfeed notifications={props.notifs}/>
        <Friends friends={props.data} setNotif={props.notifFunc}/>
    </div>
  )
}

export default NewsfeedContainer