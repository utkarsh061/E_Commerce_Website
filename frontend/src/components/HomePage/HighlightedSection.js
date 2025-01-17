"use client"
import FirstDesign from "./FirstDesign";
import SecondDesign from "./HighlightedSectionComponent/SecondDesign";

function HighlightedSection(){
    return(
        <div>
            <FirstDesign
                title="Running Sports Shoes"
                description="Handpicked collection of vibrant running shoes."
                imageUrl="/Images/running.jpg"
                style="h-80 sm:h-96 rounded-xl"
            />
            <SecondDesign/>
            <FirstDesign
                title="Gadgets"
                description="Go Modern With High Gadgets for Gaming, Coding etc."
                imageUrl="/Images/laptop.jpg"
                style="h-52 sm:h-96 w-max rounded-xl"
            />
        </div>

    )
}

export default HighlightedSection;