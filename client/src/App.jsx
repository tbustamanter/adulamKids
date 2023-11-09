import NavBar from "./components/NavBar/NavBar";
import NewStudent from "./components/NewStudent/NewStudent";
import { Route, Routes } from "react-router-dom";
import Today from "./components/Today/Today";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg-cyan-100 w-full h-screen">
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/addStudent" element={<NewStudent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
