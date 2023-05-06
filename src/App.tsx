import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Inicio from "./components/Inicio";
import Produtos from "./components/Inicio/Produtos";
import SobreNos from "./components/Inicio/SobreNos";

import "./App.css";
import Eletronico from "./components/Inicio/Produtos/Eletronico";
import Livro from "./components/Inicio/Produtos/Livro";
import Computador from "./components/Inicio/Produtos/Computador";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Inicio />} />
            <Route path="products" element={<Produtos />}>
              <Route path="computador" element={<Computador />} />
              <Route path="eletronico" element={<Eletronico />} />
              <Route path="livro" element={<Livro />} />
            </Route>
            <Route path="about" element={<SobreNos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
