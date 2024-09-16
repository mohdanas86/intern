import React from "react";

const EarningCard = () => {
  return (
    <div className="w-full p-4 text-center bg-white shadow border-gray-200 rounded-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
        Earnings Statistics
      </h5>
      <p className="text-base text-slate-900 sm:text-lg dark:text-gray-400">
        Total Earnings
      </p>
      <span className="text-gray-500 sm:text-lg font-semibold">₹2875.00</span>
      <div className="items-center justify-between space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse lg:mt-0 mt-4">
        <ol className="lg:px-4 w-full">
          <li className="flex justify-between items-center">
            <span className="text-slate-800">Self Earning</span>
            <span className="text-slate-800 font-semibold">₹8.00</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-slate-800">Referral Earning</span>
            <span className="text-slate-800 font-semibold">₹2875.00</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-slate-800">Reward Earning</span>
            <span className="text-slate-800 font-semibold">₹0.00</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default EarningCard;
