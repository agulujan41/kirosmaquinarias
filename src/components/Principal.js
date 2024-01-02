import React from "react";
import { Box } from "@mui/material";
import Carousel from "./utils/Carousel";
import Navbar from "./utils/Navbar";
import CardsTractores from "./utils/CardsTractores";
import Contact from "./utils/Contact";
import Feet from "./utils/Feet";
import ChatBot from "./utils/ChatBot";
import Empresa from "./utils/Empresa";
import WhatsappChatBot from "./utils/WhatsappChatBot";
const Principal = () => {
  return (
    <>
      {/*NAVBAR*/}
      <Navbar id="box_nav" />
      {/*MAIN*/}
      <section id="main_section" className="hidden">
        <Box
          id="lit_body"
          sx={{
            mt: "90px",
            "@media (max-width:1000px)": {
              mt: "60px",
            },
          }}
        >
          <Carousel />
        </Box>
      </section>
      <section id="tractores">
        
        <div className="tractoresContainer">
        <Box
          sx={{
            mr: 11,
            ml: 11,
            "@media (max-width:1000px)": {
              p:2
            },
          }}
        >
          <div className="cardDialog" id="tractoresCard">
            <h1>NUESTRAS MAQUINARIAS</h1>
          </div>
        </Box>
          <CardsTractores />
        </div>
      </section>
      <section className="empresaSection hidden2" id="empresa">
          <Empresa/>
      </section>
      <section id="contacto">
        <Box
          sx={{ m: 2, ml: 11, mr: 11, "@media (max-width:1000px)": { m: 2 } }}
        >
          <div className="cardDialog contdialog">
            <h1>Contactanos</h1>
          </div>
        </Box>

        <Contact />
        <Box
          sx={{ m: 2, ml: 11, mr: 11, "@media (max-width:1000px)": { m: 2 } }}
        >
          <div className="mapInfo">
            <h1>Nos encontramos en</h1>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.362656080501!2d-65.42566!3d-24.8172686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc31d0757fc63%3A0x6314503d37c4baf1!2sAv.%20Paraguay%202200%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1703822930393!5m2!1ses-419!2sar"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Box>
      </section>

      <section id="feet">
        <Feet />
      </section>
      <ChatBot/>
    </>
  );
};

export default Principal;
