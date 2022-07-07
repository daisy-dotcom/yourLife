import Header from './components/Header';
import NewsfeedContainer from './components/NewsfeedContainer';
import './index.css';
import { useState, useEffect } from 'react';
import './server';

//Attempt to override console
/*var console = {};
console.log = function(msg){
  return(`log: ${msg}`)
};

window.console = console;*/

function App() {

  const [friends, setFriends] = useState ([]);
  const [notifs, setNotifs] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('/api/friends')
    .then( res => res.json())
    .then((json) => {setFriends(json); console.log(json);
    })
    .catch(err => {
        console.log("Error in retrieving data");
        console.log(err);
    })
  // Empty dependency array means this effect will only run once 
  }, []);

  return (
    <div className="App">
      <Header/>
      <NewsfeedContainer data={friends} notifs={notifs} notifFunc={setNotifs}/>
    </div>
  );
}

export default App;
