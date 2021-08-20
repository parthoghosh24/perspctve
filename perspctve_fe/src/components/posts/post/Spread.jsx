import React from 'react'

const Spread = (props) => {
  const verdictMap = {
    'Neutral': 'text-yellow-500',
    'Mostly Agreeing': 'text-green-500',
    'Mostly Disagreeing': 'text-red-500',
  }
  return (
    <div className="relative pt-1 px-2">
        <div className="flex mb-2 mt-6 items-center justify-between">
          <div>
            <span className={`text-sm font-semibold inline-block py-1 px-2 rounded-full ${verdictMap[props.stats.verdict]}`}>
              {props.stats.verdict}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 mt-1 text-xs flex rounded bg-gray-100">
          <div style={{ width: `${props.stats.strongly_agree_perc * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-700"></div>
          <div style={{ width: `${props.stats.agree_perc * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"></div>
          <div style={{ width: `${props.stats.neutral_perc * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
          <div style={{ width: `${props.stats.disagree_perc * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-400"></div>
          <div style={{ width: `${props.stats.strongly_disagree_perc * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-700"></div>
        </div>
    </div>
  )
}

export default Spread
