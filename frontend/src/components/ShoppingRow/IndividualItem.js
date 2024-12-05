"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { NumberToString } from '../../app/globalUtils';

function IndividualItem(props){
    const {imgURL,title,rating,review,price,handleClick} = props
    return (
        <>
        <Link href={"/singleproduct"} className="pt-4 px-2 shadow-xl flex-auto basis-1/4 hover:shadow-2xl">
            <div 
            onClick={handleClick}
            >
                <div className="mb-2">
                <img src={imgURL} className="w-full max-h-96 md:h-56 md:w-96"></img>
                </div>
                <div className='flex flex-col items-center md:items-start'>
                <div className="font-semibold text-gray-600 text-left pl-4 mb-1 text-base">
                    <p>{title}</p>
                </div>
                <div className='text-gray-600 text-left pl-4 mb-1 text-sm'>
                    <span>
                        {rating}
                    </span>
                    <FontAwesomeIcon icon={faStar} className='text-red-600 px-1' />
                    <span>
                    | ({review})
                    </span>
                </div>
                <div className="text-gray-600 text-left pl-4 mb-2 text-sm">{NumberToString(price)}</div>
                </div>
            </div>
        </Link>
        </>
    )
}
export default IndividualItem;