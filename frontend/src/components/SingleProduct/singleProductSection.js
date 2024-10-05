import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndent,faCheck } from "@fortawesome/free-solid-svg-icons";
import { setCartItems } from "@/app/redux/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NumberToString } from "../../app/globalUtils";

function SingleProductInfo(props) {
  const { individualPageItem } = props;
  const { cartItems } = useSelector((state) => state.application);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCategorySelected,setIsCategorySelected] = useState(true)
  const [addedToCard , setAddedToCard] = useState(false)
  const dispatch = useDispatch();

  const handleClick = (individualPageItem) => {
    let selectedDataObj = { ...individualPageItem };
      selectedDataObj.categorySelected = selectedCategory;
      let postion;
    if(Object.values(selectedDataObj.categorySelected).length === 0){
      setIsCategorySelected(false)
    }else{
      const itemAlreadyInCart = cartItems?.filter((item,index) => {
        if (item.id === selectedDataObj.id && item.categorySelected === selectedDataObj.categorySelected) {
          postion = index;  
          return true;  
      }else{
        return false
      }
      })
      if(itemAlreadyInCart?.length !=0){
        let data = cartItems.map((item,index) => {
          if(index == postion){
            return {...item,quantity:item.quantity+1,totalItemPrice:(item.quantity+1)*item.price}
          }
          return item
        })
        console.log(data)
        dispatch(setCartItems(data))  
      }else{
        selectedDataObj.quantity = 1  ;
        selectedDataObj.totalItemPrice = individualPageItem.price*selectedDataObj.quantity;
        let data = [];
        data.push(...cartItems);
        data.push(selectedDataObj);
        dispatch(setCartItems(data));
      }
      setAddedToCard(true)
      setTimeout(() => {
        setAddedToCard(false)
      },2000)
    }
  };

  return individualPageItem?.id ? (
    <div className="flex flex-wrap mx-64 my-12">
      <div>
        <img src={individualPageItem.imgURL} className="h-96 w-96"></img>
      </div>
      <div className="mt-2 ml-6">
        <h1 className="font-black text-4xl flex flex-wrap">
          {individualPageItem.title}
        </h1>
        <h1 className="mt-4 font-bold text-gray-700 text-xl">
          {NumberToString(individualPageItem.price)}
        </h1>
        {individualPageItem.category && (
          <select
            className={`mt-4 px-1 py-1 rounded border border-black ${!isCategorySelected && "Border-2 border-red-500"}`}
            onChange={(e) => (setSelectedCategory(e.target.value),setIsCategorySelected(true))}
          >
            <option value="" disabled selected>
              Select option
            </option>
            {individualPageItem?.category?.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        )}
        {!isCategorySelected && <p className="text-red-600 font-medium text-xs ml-2">Select category</p>}
        <h1 className="mt-4 font-extrabold tracking-wide text-xl">
          Product Details
          <FontAwesomeIcon icon={faIndent} className="ml-2 text-orange-600" />
        </h1>
        <p className="flex flex-wrap w-72 text-left mt-4">
          {individualPageItem?.description}
        </p>
        <div
          className="mt-6 text-white bg-gray-700  hover:bg-black px-2 py-2 rounded-3xl flex justify-center w-1/2"
          onClick={() => handleClick(individualPageItem)}
        >
          <input
            type="button"
            value="Add to Cart"
            className="hover:cursor-pointer"
          ></input>
        </div>
          {addedToCard && 
          <>
          <FontAwesomeIcon icon={faCheck} className="ml-4 text-green-600" />
          <span className="text-green-500 px-1 italic mt-1">Added To Card</span>
          </>
          }
        <div className="pt-6"></div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default SingleProductInfo;
