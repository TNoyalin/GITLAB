import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";
import { ViewWhether } from "./viewWhether/ViewWhether";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
    <Route path="/viewWeather/name=?" element={<ViewWhether />} />
    
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
