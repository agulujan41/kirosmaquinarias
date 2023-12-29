import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactUsContainer">
        <form action="action_page.php">
          <label htmlFor="fname">Nombre</label>
          <input className='entrada'
            type="text"
            id="fname"
            name="firstname"
            placeholder="Tu nombre"
          />

          <label htmlFor="lname">Email</label>
          <input className='entrada'
            type="text"
            id="email"
            name="email"
            placeholder="Tu email"
          />

          <label htmlFor="consulta">Consulta sobre</label>
          <select id="consultaCB" name="country">
            <option value="">Producto</option>
            <option value="">Servicios POST Venta: Servicio Técnico - Respuestos</option>
            <option value="">Otras consultas</option>
          </select>

      

          <input type="submit" value="Enviar" id='btnEnviar' href='#main_section'/>
        </form>
      </div>
    </>
  );
};

export default Contact;
