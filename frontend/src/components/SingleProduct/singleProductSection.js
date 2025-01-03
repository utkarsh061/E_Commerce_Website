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
    <div className="flex flex-col text-black items-center shadow border border-gray-200 bg-white rounded-lg md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div>
        <img src={individualPageItem.imgURL} className="object-cover w-96 rounded-l-lg h-96 md:h-96 md:w-96" alt="" />
    </div>
    <div className="flex flex-col justify-between p-4 leading-normal text-center md:text-left">
        <h5 className="mb-0.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {individualPageItem.title}
        </h5>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {individualPageItem.description}
        </p>
        <div className="flex md:flex-col mt-0">
        <h1 className="font-bold text-gray-700 text-base sm:text-xl flex items-center md:items-start">
            {NumberToString(individualPageItem.price)}
        </h1>
        {individualPageItem.category && (
          <form className="max-w-fit md:mt-2 mx-auto md:mx-0">
            <select
              id="categories"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${!isCategorySelected ? 'border-2 border-red-500' : ''}`}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setIsCategorySelected(true);
              }}
              value={selectedCategory || ""}
            >
              <option value="" disabled>
                Select option
              </option>
              {individualPageItem?.category?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </form>

        )}
        {!isCategorySelected && <p className="text-red-600 font-medium text-xs ml-2">Select category</p>}
        </div>
        <h1 className="mt-4 font-extrabold tracking-wide text-base sm:text-xl text-left">
            Product Details
            <FontAwesomeIcon icon={faIndent} className="ml-2 text-orange-600" />
        </h1>
        <p className="flex flex-wrap text-left mt-2 text-sm sm:text-base">
            {individualPageItem?.description}
        </p>
        <div
            className="mt-4 text-white bg-gray-700  hover:bg-black px-6 py-2 rounded-3xl flex justify-center w-full md:w-fit"
            onClick={() => handleClick(individualPageItem)}
        >
            <input
                type="button"
                value="Add to Cart"
                className="hover:cursor-pointer"
            />
        </div>
        {addedToCard && (
            <div>
                <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                <span className="text-green-500 px-1 italic mt-1">Added To Cart</span>
            </div>
        )}
    </div>
</div>
  ) : (
    ""
  );
}
export default SingleProductInfo;
