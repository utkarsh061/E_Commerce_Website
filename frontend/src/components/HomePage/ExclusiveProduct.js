"use client"
import Button from "@/components/Buton" 

function ExclusiveProduct(){
    return (
        <div className="bg-gradient-to-l from-black to-gray-700 text-white flex mt-4">
            <div className="md:flex max-w-6xl mx-auto p-10">
                <div className="md:basis-2/6">
                        <img src="/Images/nord.jpg" className="w-full md:h-full opacity-75 rounded-xl"></img>
                </div>
                <div className="md:basis-4/6 md:ml-8 text-opacity-50 items-center text-center md:text-left mt-4 md:mt-0">
                    <p className="text-sm sm:text-base">Exclusively Available on Ur&apos;s Store</p>
                    <h1 className="text-3xl font-bold tracking-wide font-sans py-2 pr-4">One Plus Nord</h1>
                    <p className="pt-2 md:w-9/12 text-sm sm:text-base mb-2">One Plus Nord comes with Qualcomm Snapdragon 765G 5G Mobile Platform octa core processor, Adreno 620 GPU . With that comes 6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi.</p>
                    <Button
                        text="Buy Now"
                    />
                </div>
            </div>
        </div>
    )
}
export default ExclusiveProduct;