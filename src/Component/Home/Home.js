import React from 'react';
import {useEffect, useState} from 'react';
import User from '../../Component/USER/User';

const Home = () => {

const [user, setUser] = useState([]);
useEffect(()=>{

    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data));

},[])
    return (
        <div>
            <h4>USER-LENGTH : {user.length}</h4>

            {

                user.map(us=> <User user={us}></User>)
            }
        </div>
    );
};

export default Home;