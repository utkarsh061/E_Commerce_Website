"use client"
import Button from "@/components/Buton" 

function ExclusiveProduct(){
    return (
        <div className="bg-gradient-to-l from-black to-gray-700 text-white flex mt-4">
            <div className="md:flex max-w-6xl mx-auto">
                <div className="py-16 p-8">
                        <img src="/Images/nord.jpg" className=" md:h-full px-4 opacity-75"></img>
                </div>
                <div className="max-w-6xl mx-auto w-9/12 pr-4 pb-16 md:py-24 text-opacity-50 items-center">
                    <p>Exclusively Available on Ur's Store</p>
                    <h1 className="text-4xl font-bold tracking-wide font-sans py-4 pr-4">One Plus Nord</h1>
                    <p className="pt-2 md:w-9/12">One Plus Nord comes with Qualcomm Snapdragon 765G 5G Mobile Platform octa core processor, Adreno 620 GPU . With that comes 6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi.</p>
                    <Button
                        text="Buy Now"
                    />
                </div>
            </div>
        </div>
    )
}
export default ExclusiveProduct;