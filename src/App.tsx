import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomeComponent from './Component/Home/home.component';
import FormComponent from "./Component/Form /form.component";
import CustomizedTables from './Component/Display /styledDisplay.component';


const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent/>}>
        <Route index element={<FormComponent />} />
        <Route path='form' element={<FormComponent />} />
        <Route path="display" element={<CustomizedTables />} />
      </Route>
    </Routes>
  );
};

export default App;
