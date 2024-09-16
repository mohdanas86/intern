import React, { useState } from "react";

import vaulet from "../assets/vaulet.png";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import CardBtnGroup from "./CardBtnGroup";
import EarningCard from "./EarningCard";

const CardDropDown = () => {
  const taskDetails = [
    {
      icon: vaulet,
      data: "Diyasharmau",
      points: "3s",
      btn: "Referral",
      amount: "2.00",
      date: "Sat Nov 19 2022",
      sr: "47",
      fullname: "Diya Sharma",
      status: "Premium",
      details: "Referral-Kyc",
      description:
        "Subscribe to our YouTube channel to stay updated with the latest content and announcements.",
    },
  ];

  const [drop, setDrop] = useState(false);

  const [activeTaskIndex, setActiveTaskIndex] = useState(null);

  const toggleModal = (index) => {
    setActiveTaskIndex(index === activeTaskIndex ? null : index);
  };

  return (
    <div className="p-2 lg:p-0">
      <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-4 justify-center items-center my-6">
        {/* EARNING CARD COMPONENT */}
        <EarningCard />

        <div className="w-full lg:p-4 p-2 sm:p-6 dark:bg-gray-800 dark:border-gray-700 bg-[#EFEFFB] rounded-xl">
          {/* CARD BTN GROUP */}
          <CardBtnGroup />

          <ul className="lg:mt-6 mt-3">
            {taskDetails.map((task, index) => (
              <React.Fragment key={index}>
                <li onClick={(e) => setDrop((e) => !e)}>
                  <a
                    href="#"
                    className="flex items-center justify-between px-2 lg:px-4 lg:py-4 py-4 text-base font-bold text-gray-900 rounded-xl bg-white hover:bg-gray-100 group hover:shadow"
                    onClick={() => toggleModal(index)}
                  >
                    <div className="flex justify-start items-center gap-4">
                      <span className="p-2 rounded-full border border-slate-400 w-[50px] lg:w-[70px]">
                        <img src={task.icon} alt={task.data} className="" />
                      </span>

                      <div className="grid grid-cols-1 gap-2">
                        <span className="flex-1 text-wrap">{task.data}</span>

                        <button className="bg-[#f15c5c] text-white text-xs font-medium lg:px-4 py-2 lg:py-2 2 lg:rounded-md rounded">
                          {task.btn}
                        </button>
                      </div>
                    </div>

                    {/* lg:justify-end justify-center lg:items-center items-end */}
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col justify-center items-end">
                        <span className="text-slate-800 sm:text-sm">
                          {task.details}
                        </span>
                        <span className="sm:text-sm">₹{task.amount}</span>
                        <span className="sm:text-sm text-gray-500 font-normal">
                          {task.date}
                        </span>
                      </div>

                      <span>
                        <button className="text-2xl lg:ml-4">
                          {drop ? (
                            <MdKeyboardArrowUp />
                          ) : (
                            <MdKeyboardArrowDown />
                          )}
                        </button>
                      </span>
                    </div>
                  </a>
                </li>

                {activeTaskIndex === index && (
                  <TaskModelContainer
                    task={task}
                    onClose={() => toggleModal(null)}
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const TaskModelContainer = ({ task, onClose }) => {
  return (
    <div
      id="timeline-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full block rounded-xl p-0 shadow-lg border-t-[2px] border-gray-300"
    >
      <div className="relative w-full max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-center flex-col p-4 md:p-5 border-b-[2px] border-dashed rounded-t dark:border-gray-600 mx-5">
            <span className="p-2 rounded-full border border-slate-400 w-[50px] lg:w-[70px]">
              <img src={task.icon} alt={task.data} className="" />
            </span>
            <span className="flex flex-col justify-center items-center mt-2">
              <span className="text-slate-900 font-semibold m-0 p-0">
                ₹{task.amount}
              </span>
              <span className="text-gray-600 m-0 p-0">{task.details}</span>
            </span>
          </div>

          <div class="pb-12">
            <ol class="px-8">
              <li class="flex justify-between items-center border-b-[2px] border-gray-200 px-4 py-3">
                <span className="text-gray-400">Sr. No</span>
                <span className="text-slate-800 font-semibold">{task.sr}</span>
              </li>
              <li class="flex justify-between items-center border-b-[2px] border-gray-200 px-4 py-3">
                <span className="text-gray-400">Full Name</span>
                <span className="text-slate-800 font-semibold">
                  {task.fullname}
                </span>
              </li>
              <li class="flex justify-between items-center border-b-[2px] border-gray-200 px-4 py-3">
                <span className="text-gray-400">User Status</span>
                <span className="text-slate-800 font-semibold">
                  {task.status}
                </span>
              </li>
              <li class="flex justify-between items-center border-b-[2px] border-gray-200 px-4 py-3">
                <span className="text-gray-400">Details</span>
                <span className="text-slate-800 font-semibold">
                  {task.details}
                </span>
              </li>
              <li class="flex justify-between items-center border-b-[2px] border-gray-200 px-4 py-3">
                <span className="text-gray-400">Amount</span>
                <span className="text-slate-800 font-semibold">
                  ₹{task.amount}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDropDown;
