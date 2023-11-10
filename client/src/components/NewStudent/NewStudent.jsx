import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent, getTutors } from "../../redux/actions";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchBar/SearchResults";

const NewStudent = () => {
  const [student, setStudent] = useState();
  const dispatch = useDispatch();

  dispatch(getTutors());

  const handleChange = (event) => {
    const property = event.target.name;
    const value = property !== "vip" ? event.target.value : event.target.checked;
    setStudent({ ...student, [property]: value });
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    dispatch(addStudent(student));
  };

  // SEARCH BAR NEEDS
  const [results, setResults] = useState([]);
  return (
    <div className="text-center flex flex-col items-center justify-center">
        <h2 className="font-bold text-gray-800 bg-lime-200 w-full py-1 shadow-md" >Agregar nuevo alumno</h2>
      
        <div className="bg-white w-full py-2 pb-3 flex justify-center items-center flex-col">
            <h3 className="font-semibold py-1">¿Quién entrega?</h3>
            <div className="w-2/3">
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
            </div>
            
        </div>

      <form name="addStudent" className="w-4/6 ">
      
        <label>Nombre:</label>
        <input type="text" name="TutorName" onChange={handleChange}></input>
        <label>Apellidos:</label>
        <input type="text" name="TutorLastName" onChange={handleChange}></input>
        <label>Parentesco con el niño:</label>
        <select name="relation" onChange={handleChange} >
          <option value="Papá">Papá</option>
          <option value="Mamá">Mamá</option>
          <option value="Abuelo(a)">Abuelo(a)</option>
          <option value="Tío(a)">Tío(a)</option>
          <option value="Otro">Otro</option>
        </select>
        <input type="text" name="especifique" onChange={handleChange}></input>
        <label>Teléfono:</label>
        <input type="tel" name="telephone" onChange={handleChange}></input>
        <label>Nombre:</label>
        <input required className="w-1/2 px-3 py-1 focus:outline-none rounded-md focus:border-cyan-400 border-x-cyan-400 border-solid border shadow-sm" type="text" name="name" onChange={handleChange}></input>
        <label>Apellidos:</label>
        <input type="text" name="lastName" onChange={handleChange}></input>
        <label>Fecha de nacimiento:</label>
        <input type="date" name="birthdate" onChange={handleChange}></input>
        <label>Grado escolar:</label>
        <select name="schoolGrade" onChange={handleChange}>
          <option value="1roK">1ro Kinder</option>
          <option value="2doK">2do Kinder</option>
          <option value="3roK">3ro Kinder</option>
          <option value="1roP">1ro Primaria</option>
          <option value="2doP">2do Primaria</option>
          <option value="3roP">3ro Primaria</option>
          <option value="4toP">4to Primaria</option>
          <option value="5toP">5to Primaria</option>
          <option value="6toP">6to Primaria</option>
        </select>

        <label>Comentarios:</label>
        <input type="text" name="comments" onChange={handleChange}></input>
        <label>Foto:</label>
        <input onChange={handleChange}></input>
        <label>VIP:</label>
        <input type="checkbox" name="vip" onChange={handleChange}/>
        
        <button type="submit" onClick={handleSubmit}>
          Guardar
        </button>
      </form>
    </div>
  );
};

export default NewStudent;
