"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function IndividualItem(props){
    const {imgURL,title,rating,review,price,handleClick} = props
    return (
        <>
        <Link href={"/singleproduct"} className="px-2 shadow-xl flex-auto basis-1/4 hover:shadow-2xl">
            <div 
            onClick={handleClick}
            >
                <div className="my-4">
                <img src={imgURL} className="h-56 w-96 px-4"></img>
                </div>
                <div className="w-64 font-semibold text-gray-600 text-left pl-4 mb-1 text-sm">
                    <p>{title}</p>
                </div>
                <div className='text-gray-600 text-left pl-4 mb-1'>
                    <span>
                        {rating}
                    </span>
                    <FontAwesomeIcon icon={faStar} className='text-red-600 px-1' />
                    <span>
                    | ({review})
                    </span>
                </div>
                <div className="text-gray-600 text-left pl-4 mb-2 text-sm">{price}</div>
            </div>
        </Link>
        </>
    )
}
export default IndividualItem;