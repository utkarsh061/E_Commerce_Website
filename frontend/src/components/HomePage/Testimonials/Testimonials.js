"use client"
import {Details} from "./TestimonialDetailsConstant"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials(){
return (
    <div className="mx-auto my-0 max-w-6xl px-8">
        <div className="sm:flex my-8">
            {Details.map((item,index) => (
                <div className="shadow-lg hover:shadow-2xl mx-2 px-8 py-8 rounded h-11/12 flex-auto basis-1/3" key={index}>
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-orange-600 text-center justify-self-auto h-9/12 w-9/12"/>
                        <p dangerouslySetInnerHTML={{ __html: item.description }} />
                        <FontAwesomeIcon icon={faQuoteRight} className="text-orange-600 h-9/12 w-9/12 mb-4"/>
                        <div className="flex justify-center ">
                            <img src={item.imgURL} className="rounded-full h-32 w-32 mt-8"></img>
                        </div>
                        <p className="font-bold text-xl font-sans pt-4 text-center">{item.name}</p>
                </div>
            ))}
        </div>
    </div>
) 
}
export default Testimonials;