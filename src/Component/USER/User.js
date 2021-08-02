import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {


    const history=useHistory();

    const handleClick =(UserID)=>{

        history.push(`/userData/${UserID}`)
    }

    const {name , id, email,phone}=props.user;

    return (
        <div>
            <h1>USER-Name: {name}</h1>
            <p>< Link to={`/userData/${id}`}>User Details :{id}</Link></p>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={()=>handleClick(id) }> Go To USER-Details</button>
        </div>
    );
};

export default User;