import "../styles/CardUsers.css";

const CardUser = ({ user, deleteUser, path, setUserEdit, setFormIsClouse }) => {
  const handleDelete = () => {
    deleteUser(path, user.id);
  };

  const handleEditUser = () => {
    setUserEdit(user);
    setFormIsClouse(false);
  };

  return (
    <article className="card">
      <h2 className="card__title">
        {user?.first_name} {user?.last_name}
      </h2>
      <ul className="card__ul">
        <li className="card__li">
          <span className="card__label">CORREO</span>
          <span className="card__value">{user?.email}</span>
        </li>
        <li>
          <span className="card__label">CUMPLEAÑOS</span>
          <span className="card__value">
            <img className="card__img__birthday" src="./birthday.png" alt="" />
            {user?.birthday}
          </span>
        </li>
        <hr className="card__hr" />

        <div className="card__btn__content">
          <button className="card__btn" onClick={handleDelete}>
            {" "}
            <img className="card__btn__img" src="./delete2.png" alt="" />
          </button>
          <button className="card__btn" onClick={handleEditUser}>
            <img className="card__btn__img" src="./edit.png" alt="" />
          </button>
        </div>
      </ul>
    </article>
  );
};

export default CardUser;
