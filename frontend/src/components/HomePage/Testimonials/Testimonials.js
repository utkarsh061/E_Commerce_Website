"use client"
import {Details} from "./TestimonialDetailsConstant"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials(){
return (
    <div className="mx-auto my-0 max-w-6xl md:px-8">
        <div className="flex my-8">
            {Details.map((item) => (
                <div className="shadow-lg hover:shadow-2xl mx-2 px-8 py-8 rounded h-full flex-auto basis-1/3">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-orange-600 text-center justify-self-auto h-9/12 w-9/12"/>
                        <p dangerouslySetInnerHTML={{ __html: item.description }} />
                        <FontAwesomeIcon icon={faQuoteRight} className="text-orange-600 h-9/12 w-9/12 mb-4"/>
                        <img src={item.imgURL} className="rounded-full h-1/2 w-1/2 ml-16"></img>
                        <p className="font-bold text-xl font-sans pt-4 text-center">{item.name}</p>
                </div>
            ))}
        </div>
    </div>
) 
}
export default Testimonials;