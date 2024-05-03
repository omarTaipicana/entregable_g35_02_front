import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./hooks/useCrud";
import FormUser from "./components/FormUser";
import CardUser from "./components/CardUser";

function App() {
  const BASEURL = "https://entregable-g35-02.onrender.com";
  const PATH = "/users/";
  const [userEdit, setUserEdit] = useState();
  const [formIsClouse, setFormIsClouse] = useState(true);
  const [
    users,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    hasError,
    isLoading,
  ] = useCrud(BASEURL);

  useEffect(() => {
    getUser(PATH);
  }, []);
  console.log(users);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Usuarios</h1>
        <button onClick={() => setFormIsClouse(false)} className="app__btn">
          + Crear Nuevo Usuario
        </button>
      </header>
      <FormUser
        path={PATH}
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        formIsClouse={formIsClouse}
        setFormIsClouse={setFormIsClouse}
      />
      <div className="card__content">
        {users?.map((user) => (
          <CardUser
            user={user}
            key={user.id}
            deleteUser={deleteUser}
            path={PATH}
            setUserEdit={setUserEdit}
            setFormIsClouse={setFormIsClouse}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
