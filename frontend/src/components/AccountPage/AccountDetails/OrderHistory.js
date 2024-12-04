"use client";

import NoData from "@/components/NoData";
import { useSelector } from "react-redux";

function OrderHistory() {
  const application = useSelector((state) => state.application);
  const {allOrders} = application

  return (
    <div className="mx-4">
      <h1 className="font-bold flex justify-center text-2xl font-serif my-4">
        Your Order History
      </h1>
      {true ? <NoData text="No Orders Yet" height="h-52" width="w-full" /> : 
      orders?.map((item) => 
        <div className="border border-black mt-2 mx-4 rounded px-4 py-4 ">
            <p className="font-bold">{allOrders?.title}</p>
            <p>{allOrders?.orderPrice}
            <label className="ml-4">Quantity: <span>{allOrders?.quantity}</span></label>
            <label className="ml-4">category: <span>{allOrders?.category}</span></label>
            </p>
        </div>)}
    </div>
  );
}
export default OrderHistory;
