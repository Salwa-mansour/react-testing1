import { useEffect,useState } from "react";

function UserProfile({userId}){
    const [user,setUser] = useState({name:"",email:""});

    useEffect(
        ()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
        },[userId]
    );

    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}

export default UserProfile