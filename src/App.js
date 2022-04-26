import { useState } from "react";
import React from "react";
import "./App.css";
import emailjs from "emailjs-com";
export default function App() {
  const [first, setfirst] = useState(true);
  const [firs, setfirs] = useState(false);
  const [fir, setfir] = useState(false);
  const [fi, setfi] = useState(false);
  const [f, setf] = useState(false);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_47beik9",
        "template_9we2wmg",
        e.target,
        "VNer3fzfkY8lCfRFy"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const answer = () => {
    console.log();
  };
  return (
    <div className="App">
      <header>
        <h1>Análisis de anoche hasta el extremo detalle. </h1>
        <h3>(sentido del humor es requerido)</h3>
      </header>
      <br />

      <button onClick={() => setfirst(!first)}>
        {first ? (
          <p>"¿Se enteró realmente de la hora o hizo una "Mayte"?</p>
        ) : (
          <p>"¿Se enteró realmente de la hora o hizo una "Mayte"?</p>
        )}
      </button>
      {first ? (
        <h1> </h1>
      ) : (
        <h1>
          Quien sabe, quizás era una tecnica parecida a la utilizada por los
          detectives antes del interrogatorio , mantener a la persona en un
          estado de expectación y ansiedad.
        </h1>
      )}

      <button onClick={() => setfirs(!firs)}>
        {firs
          ? "¿Que clase de persona considera pipas como una sorpresa?"
          : "¿Que clase de persona considera pipas como una sorpresa?"}
      </button>
      {firs ? <h1> Mayte y una psicopata...</h1> : <h1>{null}</h1>}

      <button onClick={() => setfir(!fir)}>
        {fir
          ? "Prueba de que Mayte es mitad gato "
          : "Prueba de que Mayte es mitad gato"}
      </button>
      {fir ? <h1>Le gusta resfregar su cara contra ti.</h1> : <h1>{null}</h1>}

      <button onClick={() => setfi(!fi)}>
        {fi
          ? "¿Como sé lo que pasa dentro de su cabeza? "
          : "¿Como sé lo que pasa dentro de su cabeza?"}
      </button>
      {fi ? (
        <h1>
          ¿Cúal es el sentido de la vida? ¿Existe Dios? ¿Porque llueve para
          abajo?
        </h1>
      ) : (
        <h1>{null}</h1>
      )}
      <button onClick={() => setf(!f)}>
        {f
          ? "¿Tengo todavia su perfume en mi cazadora?"
          : "¿Tengo todavia su perfume en mi cazadora?"}
      </button>
      {f ? <h1>Si, y me encanta.</h1> : <h1>{null}</h1>}
      <br />

      <form onSubmit={sendEmail} action="/action_page.php">
        <input
          type="radio"
          id="html"
          name="messag"
          value="Quiere conocerme más."
          onChange={answer}
        />
        <label htmlFor="html">
          <h2>Quiere conocerme más.</h2>
        </label>
        <br />
        <input
          type="radio"
          id="css"
          name="messag"
          value="Preferiria no haberme reencontrado."
        />
        <label htmlFor="css">
          <h2>Preferiria no haberme reencontrado.</h2>
        </label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="messag"
          value="Me detesta y me desea una muerte lenta."
        />
        <label>
          <h2>Me detesta y me desea una muerte lenta.</h2>
        </label>
        <br />
        <input
          type="radio"
          id="css"
          name="messag"
          value="Quiere arrancarme la ropa con la boca."
        />
        <label htmlFor="javascript">
          <h2>Quiere arrancarme la ropa con la boca.</h2>
        </label>
        <br />
        <input
          type="submit"
          value="Mandar asumiendo las consecuencias posiblemente mortales"
        />
        <div>
          <textarea name="messag" />{" "}
        </div>
      </form>
      <div className="right">
        <form onSubmit={sendEmail}></form>
      </div>
    </div>
  );
}
