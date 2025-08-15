import React from "react";

const La_voie_de_la_pierre = () => (
  <div className="project-details">
    <h2>La Voie de la Pierre</h2>
    <img src={require("../assets/voie_de_la_pierre.webp")} alt="La Voie de la Pierre" style={{maxWidth: "400px"}} />
    <p>
      Application interactive destinée aux profanes souhaitant découvrir la franc-maçonnerie et mieux comprendre les différentes obédiences existantes.<br/>
      Grâce à un questionnaire personnalisé, l’utilisateur est guidé pas à pas vers l’obédience qui correspond le mieux à ses valeurs, convictions et attentes spirituelles.
    </p>
    <ul>
      <li><b>Stack :</b> TypeScript, React, Quizz, Spiritualité</li>
      <li><b>Code :</b> <a href="https://github.com/ZapzCsgo/La-Voie-de-la-Pierre" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><b>Démo :</b> <a href="https://la-voie-de-la-pierre.vercel.app/" target="_blank" rel="noopener noreferrer">la-voie-de-la-pierre.vercel.app</a></li>
    </ul>
  </div>
);

export default La_voie_de_la_pierre;
