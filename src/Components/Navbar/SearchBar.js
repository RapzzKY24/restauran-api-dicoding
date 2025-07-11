"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search?q=${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="cari restaurant..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}></button>
    </div>
  );
};

export default InputSearch;
