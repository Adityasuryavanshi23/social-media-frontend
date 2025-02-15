import React from "react";
import PostsNavHeader from "../../components/Common/PostsNavHeader";
import { Outlet } from "react-router-dom";

const MyProfile = () => {
  return (
    <>
      <PostsNavHeader />
      <Outlet />
      {/* <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
        <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
          <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
              alt="Aurora Starlight"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="pl-4 pt-1">
            <div className="mb-2 flex items-center gap-x-2">
              <div className="w-full">
                <h2 className="inline-block font-bold">Aurora Starlight</h2>
                <span className="ml-2 inline-block text-sm text-gray-400">
                  1 hour ago
                </span>
              </div>
              <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              Swimming with the dolphins today, and it was magical! 🐬🌊
              #OceanAdventure
            </p>
            <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
              <img
                src="https://img.freepik.com/free-photo/beautiful-shot-dolphin-silhouette-water_181624-17560.jpg?semt=ais_hybrid"
                alt="attachment-0"
                className="rounded-md"
              />
            </div>
            <div className="flex gap-x-4">
              <button
                className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                data-like-count="102"
                data-like-count-alt="103"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 group-focus:fill-[#ae7aff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </button>
              <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>18</span>
              </button>
              <div className="ml-auto">
                <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
        <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
          <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
              alt="Aurora Starlight"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="pl-4 pt-1">
            <div className="mb-2 flex items-center gap-x-2">
              <div className="w-full">
                <h2 className="inline-block font-bold">Aurora Starlight</h2>
                <span className="ml-2 inline-block text-sm text-gray-400">
                  59 minutes ago
                </span>
              </div>
              <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              Harnessing the power of the sun for a brighter future. ☀️🔋
              #SolarEnergy
            </p>
            <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
              <img
                src="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="attachment-0"
                className="rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/18148933/pexels-photo-18148933/free-photo-of-city-road-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="attachment-1"
                className="rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-city-road-traffic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="attachment-2"
                className="rounded-md"
              />
            </div>
            <div className="flex gap-x-4">
              <button
                className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] text-[#ae7aff] focus:text-inherit"
                data-like-count="802"
                data-like-count-alt="801"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 fill-[#ae7aff] group-focus:fill-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </button>
              <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>99</span>
              </button>
              <div className="ml-auto">
                <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
        <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
          <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
              alt="Aurora Starlight"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="pl-4 pt-1">
            <div className="mb-2 flex items-center gap-x-2">
              <div className="w-full">
                <h2 className="inline-block font-bold">Aurora Starlight</h2>
                <span className="ml-2 inline-block text-sm text-gray-400">
                  17 hours ago
                </span>
              </div>
              <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              Embracing the lunar magic tonight. The full moon is my muse. 🌕🌌
              #MoonlightDreams
            </p>
            <div className="group mb-4 border opacity-95 hover:opacity-100">
              <div className="max-h-52 overflow-hidden">
                <img
                  src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
                  alt="Aurora Starlight"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-bold">Aurora Starlight</h3>
                <p className="mb-3 text-sm">
                  Digital artist | Creative mind | Color magician 🎨🖌️🖼️
                </p>
                <span className="inline-flex items-center gap-x-2 break-all text-sm text-[#ae7aff] no-underline group-hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    ></path>
                  </svg>
                  https://www.aurorastarry.com/
                </span>
              </div>
            </div>
            <div className="flex gap-x-4">
              <button
                className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                data-like-count="420"
                data-like-count-alt="421"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 group-focus:fill-[#ae7aff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </button>
              <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>20</span>
              </button>
              <div className="ml-auto">
                <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 group-focus:fill-[#ae7aff]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
        <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
          <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
              alt="Aurora Starlight"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="pl-4 pt-1">
            <div className="mb-2 flex items-center gap-x-2">
              <div className="w-full">
                <h2 className="inline-block font-bold">Aurora Starlight</h2>
                <span className="ml-2 inline-block text-sm text-gray-400">
                  1 day ago
                </span>
              </div>
              <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              💡 Tech Poll: Which emerging technology excites you the most?
            </p>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
            >
              Artificial Intelligence{" "}
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
            >
              Virtual Reality{" "}
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
            >
              Quantum Computing{" "}
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
            >
              5G Connectivity{" "}
            </button>
            <div className="flex gap-x-4">
              <button
                className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                data-like-count="207"
                data-like-count-alt="208"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 group-focus:fill-[#ae7aff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </button>
              <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>63</span>
              </button>
              <div className="ml-auto">
                <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 group-focus:fill-[#ae7aff]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
        <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
          <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
              alt="Aurora Starlight"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="pl-4 pt-1">
            <div className="mb-2 flex items-center gap-x-2">
              <div className="w-full">
                <h2 className="inline-block font-bold">Aurora Starlight</h2>
                <span className="ml-2 inline-block text-sm text-gray-400">
                  7 days ago
                </span>
              </div>
              <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              🧘‍♂️ Mindfulness Poll: Which mindfulness practice resonates with you
              the most?
            </p>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
              disabled=""
            >
              Meditation <span className="ml-auto shrink-0 text-sm">30%</span>
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-[#ae7aff]
              "
              disabled=""
            >
              Yoga <span className="ml-auto shrink-0 text-sm">33%</span>
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
              disabled=""
            >
              Deep Breathing{" "}
              <span className="ml-auto shrink-0 text-sm">27%</span>
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
              disabled=""
            >
              Tai Chi <span className="ml-auto shrink-0 text-sm">20%</span>
            </button>
            <div className="flex gap-x-4">
              <button
                className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] text-[#ae7aff] focus:text-inherit"
                data-like-count="97"
                data-like-count-alt="96"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 fill-[#ae7aff] group-focus:fill-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </button>
              <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>13</span>
              </button>
              <div className="ml-auto">
                <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 group-focus:fill-[#ae7aff]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
        <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
          <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src="https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
              alt="Aurora Starlight"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="pl-4 pt-1">
            <div className="mb-2 flex items-center gap-x-2">
              <div className="w-full">
                <h2 className="inline-block font-bold">Aurora Starlight</h2>
                <span className="ml-2 inline-block text-sm text-gray-400">
                  1 months ago
                </span>
              </div>
              <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              🎨 Art Poll: What&#x27;s your preferred art medium for creating
              masterpieces?
            </p>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
              disabled=""
            >
              Acrylic Paint{" "}
              <span className="ml-auto shrink-0 text-sm">20%</span>
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
              disabled=""
            >
              Watercolor <span className="ml-auto shrink-0 text-sm">19%</span>
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
              disabled=""
            >
              Digital Art <span className="ml-auto shrink-0 text-sm">18%</span>
            </button>
            <button
              className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
              disabled=""
            >
              Charcoal Sketching{" "}
              <span className="ml-auto shrink-0 text-sm">43%</span>
            </button>
            <div className="flex gap-x-4">
              <button
                className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                data-like-count="99"
                data-like-count-alt="100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 group-focus:fill-[#ae7aff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </button>
              <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>13</span>
              </button>
              <div className="ml-auto">
                <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MyProfile;
