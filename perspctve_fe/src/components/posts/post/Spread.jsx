import React from 'react'

const Spread = () => {
  return (
    <div className="relative pt-1 px-2">
        <div className="flex mb-2 mt-6 items-center justify-between">
          <div>
            <span className="text-sm font-semibold inline-block py-1 px-2 rounded-full text-green-700">
              Mostly Agreeing
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 mt-1 text-xs flex rounded bg-gray-100">
          <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-700"></div>
          <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"></div>
          <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
          <div style={{ width: "15%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-400"></div>
          <div style={{ width: "15%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-700"></div>
        </div>
    </div>
  )
}

export default Spread
