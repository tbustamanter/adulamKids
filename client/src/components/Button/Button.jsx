
const Button = (props) => {
  return (
    <button className="px-4 py-1 border-white border bg-lime-500 ml-2 rounded-md text-white">{props.children}</button>
  )
};

export default Button;
