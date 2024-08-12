"use client"
import Button from "../Buton";

function FeatureSection(){
    return(
        <div className="bg-gradient-to-l from-gray-700 to-black text-white w-full mt-4">
            <div className="mx-52 py-16 flex flex-wrap"> 
                <div className="basis-1/2">
                    <h1 className="text-4xl font-bold tracking-wider font-sans py-8">Improve ur Grooving with<br/>Trending Fashion!</h1>
                    <p>Success isn't always about hard work <br/>Good Looks plays a major role in it.</p>
                    <Button
                        text="Explore Now"
                    />
                </div>
                <div className="basis-1/2">
                        <img src="/Images/titan.jpg" className="h-60 w-11/12 px-4 opacity-75"></img>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;