import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <form className="relative bg-white w-120 h-10 rounded-full flex justify-around z-[1000]">
      <input
        type="text"
        placeholder="Search..."
        className="flex bg-transparent outline-none w-7/8 h-full text-center z-[1000]"
      />
      <span className="w-0.5 h-full bg-black"></span>
      <button type="submit" className="cursor-pointer w-1/8 h-full rounded-r-full bg-gray-200">
        <SearchIcon/>
      </button>
    </form>
  )
};