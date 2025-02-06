import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignIn, SignUp } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header"></header>
      <main className="home-content">
        <h1>Bienvenue sur Padel Reservation</h1>
        <p>Réservez facilement un terrain de padel et trouvez des partenaires de jeu.</p>
        <div className="auth-forms">
          {/* Formulaire de connexion avec Clerk */}
          <div className="sign-in">
            <h2>Se connecter</h2>
            <SignIn />
          </div>

          {/* Formulaire d'inscription avec Clerk */}
          <div className="sign-up">
            <h2>S'inscrire</h2>
            <SignUp />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

