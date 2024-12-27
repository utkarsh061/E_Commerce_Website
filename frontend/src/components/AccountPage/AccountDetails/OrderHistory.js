"use client";

import NoData from "@/components/NoData";
import { useSelector } from "react-redux";

function OrderHistory() {
  const application = useSelector((state) => state.application);
  const {allOrders} = application

  return (
    <div className="sm:mx-4">
      <h1 className="font-bold flex justify-center text-2xl font-serif my-4">
        Your Order History
      </h1>
      {allOrders?.length === 0 ? <NoData text="No Orders Yet" height="h-52" width="w-full" /> : 
        allOrders?.map((item) => 
        <div className="border border-black mt-2 rounded p-2">
            <p className="font-bold pl-2">{item?.title}</p>
            <div className="flex justify-evenly lg:-ml-8">
              <p>{item?.orderPrice}</p>
              <p className="ml-4">Quantity: <span>{item?.quantity}</span></p>
              <p className="ml-4">category: <span>{item?.category}</span></p>
            </div>
        </div>)}
    </div>
  );
}
export default OrderHistory;
