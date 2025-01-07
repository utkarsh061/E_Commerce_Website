"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { NumberToString } from '../../app/globalUtils';

function IndividualItem(props){
    const {imgURL,title,rating,review,price,handleClick} = props
    return (
        <>
        <Link href={"/singleproduct"} className="flex-auto basis-1/4 hover:shadow-2xl m-2">
            <div 
        className="max-w-full bg-white border border-gray-200 rounded-lg shadow h-full" 
        onClick={handleClick}
    >
        <div>
            <img 
                className="rounded-t-lg w-full max-h-96 md:h-72 md:w-96" 
                src={imgURL} 
                alt={title || "Image"}
            />
        </div>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700">
                {rating && (
                    <>
                        {rating} 
                        <FontAwesomeIcon icon={faStar} className="text-red-600 px-1" />
                        | ({review})
                    </>
                )}
            </p>
            <p className="mb-3 font-normal text-gray-700">
                {NumberToString(price)}
            </p>
        </div>
            </div>
        </Link>
        </>
    )
}
export default IndividualItem;