import React from 'react'

function Friends({friends, setNotif}) {
    let friendsArr = friends;

    //On click, update notifications in newsfeed 
    function showNotifications(e){
        let name = e.target.innerText;
        let personObj = friendsArr.find((person) => person.name === name);
        setNotif(personObj.notification);
    }
    
    //Display list of friends
    return (
        <div id="friends">
            <h3>Friends</h3>
            <ul>
                {friendsArr.map((friend) => <li key={friend.id} className="friends" onClick={showNotifications}>{friend.name}</li>)}
            </ul>
        </div>
    )
}


export default Friends