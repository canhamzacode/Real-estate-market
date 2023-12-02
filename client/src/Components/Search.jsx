import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="max-w-[480px] h-[34px] w-full flex items-center gap-2 border-black border bg-slate-50 p-2 rounded">
      <IoSearchSharp size={25} color="black" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-none outline-none bg-transparent text-black"
      />
    </div>
  );
};

export default Search;
