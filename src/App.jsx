import { useState } from "react";
import { login, test } from "./services/api";

const App = () => {

 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [user, setUser] = useState();

 const handleSubmit = async () =>{
  const res = await login(username, password);
  console.log("res",res)
  // setUsername("");
  // setPassword("");
  if (res == true) {
    alert("mu bien")
  }else{
    alert("mu mal")
  }
 }

 const handleTest = async () => {
   test().then(data=>{
    console.log('111',data)
    setUser(data.data)
   
  })
 }

  return(
    <div>
    <input type="text" onChange={e=>setUsername(e.target.value)} value={username} placeholder='User' />
    <input type="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder='Password' />
    <button onClick={handleSubmit}>Ingresar</button>
    <button onClick={handleTest}>Test</button>

    {user?.map((user)=>
    <div key={user.id}>
      <p>{user.username}</p>
    </div>
    )}
  </div>
  )
};

export default App;