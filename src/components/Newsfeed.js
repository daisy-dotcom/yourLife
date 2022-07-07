import React from 'react'

function Newsfeed({notifications}) {
    
    let notifArr = notifications;
    
    if (notifArr !== null){

        if (notifArr.length === 0){
            return (
                <div id="newsfeed">
                    <h3>Newsfeed</h3>
                    <p>No news</p>
                </div>
            )
        }
        else{
            return (
                <div id="newsfeed">
                    <h3>Newsfeed</h3>
                    <ul>
                        {notifArr.map((news, index) => <li key={index}>{news}</li>)}
                    </ul>
                </div>
            )
        }

    }

    //Default display - Empty newsfeed
    return (
        <div id="newsfeed">
            <h3>Newsfeed</h3>
        </div>
    )

}

export default Newsfeed
