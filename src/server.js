import { createServer } from "miragejs"
import { faker } from '@faker-js/faker';

const objects = ['photo', 'post', 'comment'];
const actions = ['liked a', 'commented on a', 'disliked a', 'added'];

//Create a random number of notifications for each friend
function makeNotification(name){
    var notif = [];
    for(let i=0 ; i < Math.floor(Math.random()*21); i++){

        let indexAct = Math.floor(Math.random()*actions.length) ;
        let action = actions[indexAct];

        if (action !== 'added'){
            let indexObj = Math.floor(Math.random()*objects.length) ;
            notif.push(`${name} ${action} ${objects[indexObj]}`);
        }

        else{
            notif.push(`${name} ${action} ${faker.name.findName()} as a friend`);
        }
    }

    return notif;
}

createServer({
  routes() {
    this.namespace = "api"
        
    var friends = [];

    //Generate 20 fake friends and their corresponding notifications
    for(let i=0; i<20; i++){
        let person = { 
            id: i, 
            name: faker.name.findName(), 
            notification : []
        }

        person.notification = makeNotification(person.name);
        friends.push(person);
    }
        
    let allOption = {
        id: 27,
        name: 'All',
        notification: []
    }

    friends.forEach((friend) => {
        friend.notification.forEach((element) => {
            allOption.notification.push(element);
        })
    });

    friends.unshift(allOption);

    //Intercept GET request & return array of friends
    this.get("/friends", () => {
        //console.log(friends);
        return friends;
    })
  },
})

  
