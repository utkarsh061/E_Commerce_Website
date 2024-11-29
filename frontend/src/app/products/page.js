"use client"

import Header from "@/components/ProductPage/Header";
import Products from "@/components/ProductPage/Products";

function ProductsPage(){
    return(
        <div className="mx-auto my-0 max-w-6xl px-8">
            <Header/>
            <Products/>
        </div>
    )
}
export default ProductsPage;