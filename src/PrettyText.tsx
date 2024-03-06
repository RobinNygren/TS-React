//Skapa komponenten PrettyText som har: textfält, kryssrutor, knapp och p-tagg. Kryssrutorna har olika val: fet stil, kursiv och textstorlek större (dvs ett kryssalternativ som sätter textstorleken till en större storlek). Användaren skriver en text och klickar i sina val sen klickar på knappen. Då visas texten ifrån textfältet i p-taggen och valen i kryssrutorna formaterar texten.

//UTMANING: Lägg till en till textruta där användaren kan skriva i en färg som sedan blir bakgrundsfärg på texten.

//UTMANING: Lägg till en till textruta där användaren kan skriva i en färg som sedan blir färgen på texten.

//UTMANING: Lägg till fler kryssrutealternativ: bara små bokstäver (dvs texten formatteras till bara små bokstäver), bara stora bokstäver, understruken text, omvänd text (dvs ordet spegelvänds så man läser det baklänges).

//UTMANING: Lägg till en Ångra-knapp, dvs en knapp som om man klickar på den ändrar texten tillbaka till det som den var innan. Man ska bara kunna ångra den senaste ändringen.
import { useState } from "react";

const PrettyText = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
  };

  const handleClick = () => {};
  return (
    <>
      <h1>PrettyText</h1>
      Text: <input type="text" />
      <br />
      <div>
        <input type="checkbox" name="bold" onChange={handleChange} /> Bold,("")
        <input type="checkbox" name="italic" onChange={handleChange} />{" "}
        Italics,("")
        <input type="checkbox" name="large" onChange={handleChange} /> Larger
        text ("")
      </div>
      <button onClick={handleClick}>Make pretty</button> <br />
      <p>{text}</p>
    </>
  );
};

export default PrettyText;
