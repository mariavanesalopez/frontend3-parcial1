import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Form.module.css";

const Form = () => {
  //logica

  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogger] = useState(false);

  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

 // console.log(user);

  const validateName = (str) => {
    const space = str.trim();
    if (space.length > 2 && space === str) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = validateName(user.name);
    const lastNameIsValid = user.lastName.length > 5;

    if (!nameIsValid || !lastNameIsValid) {
      //rechazo el envio
      setError(true);
      //guardamos el mensaje de error:
      setErrorMessage("Por favor chequea que la información sea correcta");

      return;
    }
    //Envío del formulario
    setIsLogger(true)
  };
  //console.log("formulario ejecutado");

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={(e) => handleChange(e, "name")}
        />

        <input
          className={styles.input}
          type="text"
          lastName="lastName"
          onChange={(e) => handleChange(e, "lastName")}
        />

        {error &&
          errorMessage.includes(
            "Por favor chequea que la información sea correcta"
          ) && (
            <span style={{ color: "red", fontSize: "0.7rem" }}>
              {errorMessage}
            </span>
          )}
        <button type="submit">Enviar</button>
      </form>
      {isLogged && <Card name={user.name} lastName={user.lastName} />}
    </div>
  );
};

export default Form;
