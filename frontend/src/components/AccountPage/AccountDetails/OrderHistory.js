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
        <div className="border border-black mt-2 mx-4 rounded px-4 py-4 ">
            <p className="font-bold">{item?.title}</p>
            <p>{item?.orderPrice}
            <label className="ml-4">Quantity: <span>{item?.quantity}</span></label>
            <label className="ml-4">category: <span>{item?.category}</span></label>
            </p>
        </div>)}
    </div>
  );
}
export default OrderHistory;
