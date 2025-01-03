"use client"
import Button from "@/components/Buton" 

function ExclusiveProduct(){
    return (
        <div className="bg-gradient-to-l from-black to-gray-700 text-white flex mt-4">
            <div className="md:flex max-w-6xl mx-auto p-10">
                <div>
                        <img src="/Images/nord.jpg" className="w-full md:h-full opacity-75 rounded-xl"></img>
                </div>
                <div className="md:ml-8 mt-4 text-opacity-50 items-center text-center md:text-left">
                    <p className="text-sm sm:text-base">Exclusively Available on Ur&apos;s Store</p>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-wide font-sans py-4 pr-4">One Plus Nord</h1>
                    <p className="pt-2 md:w-9/12 text-sm sm:text-base mb-4">One Plus Nord comes with Qualcomm Snapdragon 765G 5G Mobile Platform octa core processor, Adreno 620 GPU . With that comes 6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi.</p>
                    <Button
                        text="Buy Now"
                    />
                </div>
            </div>
        </div>
    )
}
export default ExclusiveProduct;