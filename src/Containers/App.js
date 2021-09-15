import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1> AACA VA LA PAGINA INICIAL</h1>
      <Link exact to="/crud"> LINK A CRUD </Link>
    </div>
  );
};

export default App;
