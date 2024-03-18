import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SearchInput = () => {
  const { setInput } = useContext(AuthContext);
  return (
    <div>
      <div className="relative w-6/12 mx-auto">
        <input
          type="search"
          className="block outline-none mt-5 mb-5 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-gray-900  focus:text-black"
          name=""
          id=""
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
