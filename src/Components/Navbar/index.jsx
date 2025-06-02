import Link from "next/link";
import InputSearch from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-4 bg-slate-800">
      <Link href="/" className="font-bold text-2xl cursor-pointer">
        RestaurantList
      </Link>
      <InputSearch />
    </div>
  );
};

export default Navbar;
