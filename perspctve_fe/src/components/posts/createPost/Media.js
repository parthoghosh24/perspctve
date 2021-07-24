import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const Media = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap mt-10">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px ml-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl md:text-2xl font-bold  px-5 py-3 block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-800"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <FontAwesomeIcon icon={faImage}/>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-5 py-3 block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-800"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                GIF
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl md:text-2xl font-bold px-5 py-3 block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-800"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <FontAwesomeIcon icon={faYoutube}/>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <input className="placeholder-gray-400 mt-0 block w-full pt-4 px-1 border-0 border-b-2 border-gray-200 text-md md:text-xl font-bold mb-2" placeholder="A public image url (.jpeg, .png, etc.)..."/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <input className="placeholder-gray-400 mt-0 block w-full pt-4 px-1 border-0 border-b-2 border-gray-200 text-md md:text-xl font-bold mb-2" placeholder="A public gif url..."/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <input className="placeholder-gray-400 mt-0 block w-full pt-4 px-1 border-0 border-b-2 border-gray-200 text-md md:text-xl font-bold mb-2" placeholder="Youtube url..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Media
