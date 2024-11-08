import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/mensajes' });

// export const savePersonName = async (obj) => await instance.post('/', obj)

export const test = async () => await instance.get("/users");

// export const getPerson = async (id) => await instance.get(`/${id}`);

// export const deletePerson = async (id) => await instance.delete('/' + id);

// export const updatePerson = async (person) => await instance.put('/'+person.id, person);


export const login = async (username, password) => {
  console.log(1111,username, password);
  const token = btoa(username + ":" + password);
  const response = await instance.post("/login",{},
  {
      headers: {
          "Content-Type": "application/json",
          Authorization: "basic " + token,
      },
  });


  console.log("aaaaaaaaaaaa",response)
  if(response.data.resp === "Login exitoso"){
      setAuth(token);
      return true;
  }
  return false;
}


export const setAuth = async (token) => {
  instance.defaults.headers.common.Authorization = `basic ${token}`;
};
