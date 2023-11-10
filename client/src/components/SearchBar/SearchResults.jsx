import Result from "./Result";

const SearchResults = ({results}) => {
  return (
    <div className="w-full flex flex-col shadow-md text-left rounded-md mt-4 max-h-40 overflow-y-scroll">
      {results.map((tutor, id) => <Result key={id} result={tutor}/>)}
     
    </div>
  )
};

export default SearchResults;
