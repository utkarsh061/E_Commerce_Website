"use client"
import Button from "../Buton";

function FeatureSection(){
    return(
        <div className="bg-gradient-to-l from-gray-700 to-black text-white mt-4">
            <div className="mx-auto max-w-5xl p-10 sm:flex sm:flex-wrap"> 
                <div className="basis-1/2 text-center sm:text-left flex flex-col justify-center">
                    <h1 className="text-3xl font-bold tracking-wider font-sans py-4 sm:py-0 sm:pb-4">Improve ur Grooving with<br/>Trending Fashion!</h1>
                    <p className="text-sm sm:text-base">Success isn&apos;t always about hard work <br/>Good Looks plays a major role in it.</p>
                    <Button
                        text="Explore Now"
                    />
                </div>
                <div className="basis-1/2">
                        <img src="/Images/titan.jpg" className="mt-6 sm:mt-0 sm:h-60 w-full rounded-xl opacity-75"></img>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;