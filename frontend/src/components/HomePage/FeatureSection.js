"use client"
import Button from "../Buton";

function FeatureSection(){
    return(
        <div className="bg-gradient-to-l from-gray-700 to-black text-white mt-4">
            <div className="mx-auto max-w-5xl py-8 sm:py-12 sm:flex pl-8 sm:flex-wrap"> 
                <div className="basis-1/2 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-wider font-sans py-4 sm:py-8">Improve ur Grooving with<br/>Trending Fashion!</h1>
                    <p className="text-sm sm:text-base">Success isn't always about hard work <br/>Good Looks plays a major role in it.</p>
                    <Button
                        text="Explore Now"
                    />
                </div>
                <div className="basis-1/2">
                        <img src="/Images/titan.jpg" className="my-8 sm:h-60 h-full w-11/12 px-4 opacity-75"></img>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;