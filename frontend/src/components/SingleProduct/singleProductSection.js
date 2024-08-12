
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndent } from '@fortawesome/free-solid-svg-icons'
import { setCartItems } from '@/app/redux/applicationSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SingleProductInfo(props) {
  const { individualPageItem } = props;
  const { cartItems } = useSelector((state)  => state.application)
  const [selectedCategory,setSelectedCategory] = useState("")
  const dispatch = useDispatch()

  const handleClick = (individualPageItem) => {
    let selectedDataObj = {...individualPageItem}
    selectedDataObj.numberOfItems = 1;
    selectedDataObj.totalItemPrice = individualPageItem.price
    selectedDataObj.categorySelected=selectedCategory;
    let data= [];
    data.push(...cartItems)
    data.push(selectedDataObj)
    dispatch(setCartItems(data))
  }

  return (
    individualPageItem?.id ? 
    <div className="flex flex-wrap mx-64 my-12">
      <div>
        <img src={individualPageItem.imgURL} className="h-96 w-96"></img>
      </div>
      <div className="mt-2 ml-6">
        <h1 className="font-black text-4xl flex flex-wrap">
          {individualPageItem.title}
        </h1>
        <h1 className="mt-4 font-bold text-gray-700 text-xl">
          {individualPageItem.price}
        </h1>
        { individualPageItem.category && (
          <select className="mt-4 px-1 py-1 rounded border border-black"
          onChange={(e)=> setSelectedCategory(e.target.value)}
          >
          <option value="" disabled selected>Select option</option>
            {individualPageItem?.category?.map((item) => (
              <option>{item}</option>
        ))}
          </select>
        )}
        <h1 className="mt-4 font-extrabold tracking-wide text-xl">
          Product Details
          <FontAwesomeIcon icon={faIndent} className='ml-2 text-orange-600' />
        </h1>
        <p className="flex flex-wrap w-72 text-left mt-4">
          {individualPageItem?.description}
        </p>
        <div className="mt-6 text-white bg-gray-700  hover:bg-black px-2 py-2 rounded-3xl flex justify-center w-1/2"
        onClick={() => handleClick(individualPageItem)}
        >
          <input
            type="button"
            value="Add to Cart"
            className="hover:cursor-pointer"
          ></input>
        </div>
        <div className="pt-6"></div>
      </div>
    </div> 
    : ""
  );
}
export default SingleProductInfo;
