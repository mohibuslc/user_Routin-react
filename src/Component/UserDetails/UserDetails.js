import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useState , useEffect} from 'react';

;

const UserDetails = () => {
    const {userInformation}= useParams();

    const [user,setUser]=useState({});

    useEffect(()=>{

        const url =`https://jsonplaceholder.typicode.com/users/${userInformation}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))


    },[])

    const {name, website, phone, email,}= user;

    const history = useHistory();

    const handleClick = ()=>{


        const url =("/home");
        history.push(url);

    }

    return (
        <div>
            <h1>User Details:{userInformation} </h1>
            <p> user_name: {user.name}</p>
            <p>website:{website}</p>
            <p>Phone:{phone}</p>
            <p>Email: {email}</p>
            <div>

                <button onClick={handleClick }>Go Back to Home Page</button>
            </div>
        </div>
    );
};

export default UserDetails;