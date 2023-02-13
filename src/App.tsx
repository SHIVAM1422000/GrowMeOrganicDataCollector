import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './Component/Home/home.component';
import CustomizedTables from "./Component/Display /styledDisplay.component";
import FormComponent from "./Component/Form /form.component";
import DisplayUserComponent from "./Component/Display /display.components";
import NavigationComponent from "./Component/Navigation/Navigation.component";

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent/>}>
        <Route index element={<FormComponent />} />
        <Route path='/form' element={<FormComponent />} />
        <Route path="display" element={<CustomizedTables />} />
      </Route>
    </Routes>
  );
};

export default App;
