"use client"
import Button from "@/components/Buton" 

function ExclusiveProduct(){
    return (
        <div className="bg-gradient-to-l from-black to-gray-700 text-white flex w-full mt-4 px-48">
            <div className="py-16">
                    <img src="/Images/nord.jpg" className="h-full w-9/12 px-4 opacity-75"></img>
            </div>
            <div className="w-9/12 py-24 -ml-40 text-opacity-50 items-center">
                <p>Exclusively Available on Ur's Store</p>
                <h1 className="text-4xl font-bold tracking-wide font-sans py-2">One Plus Nord</h1>
                <p className="pt-2">One Plus Nord comes with Qualcomm Snapdragon 765G 5G Mobile Platform octa core processor, Adreno 620 GPU . With that comes 6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi.</p>
                <Button
                    text="Buy Now"
                />
            </div>
        </div>
    )
}
export default ExclusiveProduct;