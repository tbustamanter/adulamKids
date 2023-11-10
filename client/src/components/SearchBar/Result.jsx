
const Result = ({result}) => {
  return (
    <div className="hover:bg-lime-100 pl-3" onClick={(event)=> alert(result.id)}>
      {result.fullName}
    </div>
  )
};

export default Result;
