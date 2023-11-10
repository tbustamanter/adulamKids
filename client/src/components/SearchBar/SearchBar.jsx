import { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const tutors = useSelector((state)=> state.tutors)
    
    const handleChange = (value) => {
        setInput(value);
        const results = tutors.filter((tutor)=> {
            return value && tutor && tutor.fullName && tutor.fullName.toLowerCase().includes(value.toLowerCase())
        })
       setResults(results);
    }

  return (
    <div className="text-center flex flex-row items-center justify-center border rounded-md h-8 px-2 shadow-sm w-full">
      <span className="text-lime-500 text-2xl pt-1"><ion-icon name="search-circle-outline" ></ion-icon></span>
      <input placeholder="Buscar..." value={input} onChange={(event)=> handleChange(event.target.value)} className="bg-transparent border-0 h-100% w-full ml-2 focus:outline-none pb-1"></input>
      
    </div>
  )
};

export default SearchBar;
