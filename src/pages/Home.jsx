import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header"></header>
      <main className="home-content">
        <h1>Bienvenue sur Padel Reservation</h1>
        <p>Réservez facilement un terrain de padel et trouvez des partenaires de jeu.</p>
        <div className="auth-forms">
          {/* Formulaire de connexion */}
          <form className="sign-in">
            <h2>Se connecter</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <button type="submit">Connexion</button>
          </form>

          {/* Formulaire d'inscription */}
          <form className="sign-up">
            <h2>S'inscrire</h2>
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <button type="submit">Inscription</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
