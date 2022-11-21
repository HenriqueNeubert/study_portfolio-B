import React from "react";
import ViewHome from "./home/ViewHome";
import ViewStudy from "./study/ViewStudy";

import { Routes, Route } from "react-router-dom"; // Importe esses arquivosimport { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import ViewProject from "./project/ViewProject";
import ViewTechnologies from "./technologies/ViewTechnologies";

export default (props) => {
  return (
    <div>
      <Routes>
        <Route path="/inicial" element={<ViewHome />} />
        <Route path="/estudos" element={<ViewStudy />} />
        <Route path="/projetos" element={<ViewProject />} />
        <Route path="/tecnologias" element={<ViewTechnologies />} />
      </Routes>
    </div>
  );
};
