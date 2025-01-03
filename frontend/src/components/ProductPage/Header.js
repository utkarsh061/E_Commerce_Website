"use client";

function Header() {
  return (
    <div className="flex mb-4 mt-2">
      <div className="basis-1/2">
        <h2 className="font-extrabold text-3xl text-black">All Products</h2>
      </div>
      <div className="hidden basis-1/2 flex justify-end text-sm md:text-base">
        <select className="px-1 py-1 border-2 border-black text-black">
          <option>Default Sorting</option>
          <option>Short by price</option>
          <option>Short by popularty</option>
          <option>Short by rating</option>
          <option>Short by sale</option>
        </select>
      </div>
    </div>
  );
}
export default Header;
