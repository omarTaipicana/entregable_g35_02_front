import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/FormUser.css";

const FormUser = ({
  path,
  createUser,
  userEdit,
  updateUser,
  setUserEdit,
  formIsClouse,
  setFormIsClouse,
}) => {
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    if (userEdit) {
      updateUser(path, userEdit.id, data);
      setUserEdit();
      setFormIsClouse(true)
    } else {
      createUser(path, data);
      setFormIsClouse(true)
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  useEffect(() => {
    reset(userEdit);
  }, [userEdit]);

  return (
    <div className={`form__continer ${formIsClouse && "form__close"}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <header className="form__header">
          <h2 className="form__title">
            {" "}
            {userEdit ? "ACTUALIZAR USUARIO" : "NUEVO USUARIO"}
          </h2>
          <div onClick={() => setFormIsClouse(true)} className="form__exit">
            ❌
          </div>
        </header>
        <label className="form__label" htmlFor="">
          <span className="form__field">Nombre</span>
          <input
            placeholder="Escriba sus nombres"
            className="form__field__value"
            {...register("first_name")}
            type="text"
          />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">Apellidos</span>
          <input
            placeholder="Escriba sus apellidos"
            className="form__field__value"
            {...register("last_name")}
            type="text"
          />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">Correo</span>
          <input
            placeholder="Escriba su correo electrónico"
            className="form__field__value"
            {...register("email")}
            type="email"
          />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">Contraseña</span>
          <input
            placeholder="Escriba una contraseña con numero letras y símbolos"
            className="form__field__value"
            {...register("password")}
            type="password"
          />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">Cumpleaños</span>
          <input
            className="form__field__value"
            {...register("birthday")}
            type="date"
          />
        </label>
        <button className="form__btn">
          {userEdit ? "Actualizar Usuario Actual" : "Agregar Nuevo Usuario"}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
