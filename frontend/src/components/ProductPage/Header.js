"use client";

function Header() {
  return (
    <div className="flex">
      <div className="basis-1/2">
        <h2 className="font-extrabold text-2xl">All Products</h2>
      </div>
      <div className="basis-1/2 flex justify-end">
        <select className="px-1 py-1 border-2 border-black">
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
