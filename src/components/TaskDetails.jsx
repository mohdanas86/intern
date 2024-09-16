import React, { useState } from "react";

import yt from "../assets/yt.png";
import fb from "../assets/fb.png";
import ds from "../assets/discord.png";
import wp from "../assets/wp.png";
import tl from "../assets/telegram.png";

const TaskDetails = () => {
  const taskDetails = [
    {
      icon: yt,
      data: "Subscribe",
      points: "20 Points",
      description:
        "Subscribe to our YouTube channel to stay updated with the latest content and announcements.",
    },
    {
      icon: fb,
      data: "Facebook Us",
      points: "15 Points",
      description:
        "Like and follow our Facebook page to receive updates and engage with our community.",
    },
    {
      icon: ds,
      data: "Join Discord",
      points: "12 Points",
      description:
        "Join our Discord server to participate in discussions and get exclusive updates and support.",
    },
    {
      icon: wp,
      data: "WhatsApp Group",
      points: "18 Points",
      description:
        "Join our WhatsApp group for real-time notifications, discussions, and community interaction.",
    },
    {
      icon: tl,
      data: "Twitter Us",
      points: "25 Points",
      description:
        "Follow us on Twitter to stay informed about the latest news, updates, and special offers.",
    },
  ];

  const [activeTaskIndex, setActiveTaskIndex] = useState(null);

  const toggleModal = (index) => {
    setActiveTaskIndex(index === activeTaskIndex ? null : index);
  };

  return (
    <div className="w-full flex justify-center items-center my-6">
      <div className="w-full lg:w-[80%] mx-auto p-4 bg-white sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Daily Tasks & Missions
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 pb-4">
          Complete your daily challenges and missions to earn rewards and track
          your progress.
        </p>

        <ul>
          {taskDetails.map((task, index) => (
            <React.Fragment key={index}>
              <li className="mt-4">
                <a
                  href="#"
                  className="flex items-center px-4 lg:py-6 py-4 text-base font-bold text-gray-900 rounded-xl bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white gap-4"
                  onClick={() => toggleModal(index)}
                >
                  <img src={task.icon} alt={task.data} className="w-[50px]" />
                  <div className="flex flex-col lg:flex-row w-full lg:justify-between justify-center lg:items-center items-start">
                    <span className="flex-1 text-wrap">{task.data}</span>
                    <span className="bg-green-100 text-slate-600 text-xs font-medium me-2 lg:px-6 px-2 py-2 lg:py-3 lg:rounded-xl rounded dark:bg-green-900 dark:text-green-300">
                      {task.points}
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
  );
};

const TaskModelContainer = ({ task, onClose }) => {
  return (
    <div
      id="timeline-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full block shadow-lg border-t-[2px] border-gray-300 rounded-xl p-0"
    >
      <div className="relative w-full max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {task.data}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div class="p-4 md:p-5">
            <ol class="relative border-s border-gray-200 dark:border-gray-600 ms-3.5 mb-4 md:mb-5">
              <li class="mb-10 ms-8">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700 dark:bg-gray-600">
                  <svg
                    class="w-2.5 h-2.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
                    />
                  </svg>
                </span>
                <h3 class="flex items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {task.data}
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Latest
                  </span>
                </h3>
                <time class="block mb-3 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {task.description}
                </time>
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Start Task
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
