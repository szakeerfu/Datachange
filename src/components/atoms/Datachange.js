import React, { useEffect, useState } from 'react'
import './data.css'

const Datachange = () => {

    const [users, setUsers] = useState([]);



    const GetUsers = async () => {
        try {


            const responce = await fetch('https://reqres.in/api/users/ ')
            const data = await responce.json();
            setUsers(data.data)


        } catch (error) {
            console.error(error);
        }


        // id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}
    }

    useEffect(() => {
       

    },[users])

    return (

        <div className='container '>

            <>
                <button onClick={GetUsers}>getGet user</button>
                <div className='card'>

                    {
                        users && users.map((user) => {
                            return (
                                <div key={user.id} className='sub-card'>

                                    <img src={user.avatar} className="img-circle" alt='dogeimage' />
                                    <div className='name'>
                                        <p> <b>firstName :</b>{user.first_name}</p>
                                        <p> <b> last_name :</b>{user.last_name}</p>
                                        <p><b>Email:</b>{user.email}</p>
                                    </div>




                                </div>
                            )
                        })
                    }

                </div>
            </>






        </div>

    )
}

export default Datachange
