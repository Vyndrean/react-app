import React from "react";
import InputForm from "../components/InputForm";

const contact = () => {
  const submitRequest = (e) => {
    alert("Informacion enviada correctamente!");
  };

  return (
    <div className="container">
      <div className="title-area">
        <h1>Contacto</h1>
      </div>
      <div className="content">
        <p>
          ¡Nos encantaría saber de ti! Si tienes alguna pregunta, consulta o
          simplemente quieres saludar, no dudes en ponerte en contacto con
          nosotros. Puedes comunicarte con nuestro equipo completando el
          formulario a continuación o utilizando la información de contacto
          proporcionada. Estamos aquí para ayudarte y responderemos a tu mensaje
          lo antes posible. ¡Gracias por visitar nuestra página web!
        </p>
        <div className="contact-area">
          <div className="contact-form">
            <form onSubmit={submitRequest}>
              <InputForm label={"Nombre"} />
              <InputForm label={"Asunto"} />
              <div>
                <label>Descripcion</label>
                <textarea required></textarea>
              </div>
              <button>Enviar</button>
            </form>
          </div>
          <div className="contact-info">
            <div>
              <p>
                <strong>Correo Electrónico: </strong>info@miempresa.com
              </p>
            </div>
            <div>
              <p>
                <strong>Teléfono: </strong>+1234567890
              </p>
            </div>
            <div>
              <p>
                <strong>Dirección: </strong>Calle Principal #123, Ciudad, País
              </p>
            </div>
            <div>
              <p>
                <strong>Horario de Atención: </strong>Lunes a Viernes, de 9:00
                am a 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
