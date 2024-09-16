import React from "react";

const CardBtnGroup = () => {
  return (
    <div>
      <div className="row flex w-full border border-[#FE9F27] rounded-full p-2 bg-white">
        <button
          className="rounded-full w-full py-2 px-4 border border-transparent text-center text-sm text-slate-800 transition-all  focus:shadow-none hover:bg-[#FE9F27] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-semibold hover:text-white"
          type="button"
        >
          Self
        </button>
        <button
          className="rounded-full w-full py-2 px-4  text-center text-sm text-slate-800 transition-all  focus:shadow-none hover:bg-[#FE9F27] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-semibold hover:text-white"
          type="button"
        >
          Referral
        </button>
        <button
          className="rounded-full w-full py-2 px-4 border border-transparent text-center text-sm text-slate-800 transition-all  focus:shadow-none hover:bg-[#FE9F27] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-semibold hover:text-white"
          type="button"
        >
          Reward
        </button>
      </div>
    </div>
  );
};

export default CardBtnGroup;
