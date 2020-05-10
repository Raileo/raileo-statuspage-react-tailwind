import React, { useState } from 'react';

const UptimeBlocks = ({ uptime_data }) => {

  const [selectedUptime, selectUptime] = useState()

  return (
    <>
      <div className="flex px-6 pt-6 pb-4">
        {
          uptime_data && uptime_data.map((uptime, key) => {
            return (
              <div key={key}
                className={`h-10 m-1 ${uptime.downtime_average === 0 ? 'bg-green-400' : uptime.downtime_average > 60 ? 'bg-orange-400' : 'bg-red-500'}`}
                style={{
                  width: `calc(100% /  ${uptime_data.length})`
                }} //equally divide the 100% 
                onMouseEnter={() => selectUptime(uptime)}
                onMouseLeave={() => selectUptime()}
              />
            )
          })
        }
      </div>

      <div className="h-5 px-6 pl-8 text-gray-500 mb-4 text-sm">
        {selectedUptime && <span className="slide-left">
          {selectedUptime.date}
          {
            selectedUptime.downtime_average > 0 ?
              <span className="text-red-500 ml-8">{selectedUptime.downtime_average}% Downtime Average</span>
              :
              <span className="text-green-500 ml-8"> {selectedUptime.uptime_average}% Uptime Average </span>
          }
        </span>
        }
      </div>
    </>
  )
}

export default UptimeBlocks;