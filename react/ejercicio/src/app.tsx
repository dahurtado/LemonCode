import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { RicknMortyList } from "./rick&morty";
import { DetailPageRnM } from "./detailRnM";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/detailRnM/:id" element={<DetailPageRnM />}/>
        <Route path="/rick&morty/:id" element= {<RicknMortyList />}/>
      </Routes>
    </Router>
  );
};
