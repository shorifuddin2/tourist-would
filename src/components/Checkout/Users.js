import React from 'react';
import useUsers from '../../Huck/UseUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Users = () => {
    const allUsers = useUsers("https://jsonplaceholder.typicode.com/users")
    return (
        <div className='container row'>
            {
                allUsers?.map(user=><SingleUsers key={user.id} user={user}></SingleUsers>)
            }
        </div>
    );
};

export default Users;