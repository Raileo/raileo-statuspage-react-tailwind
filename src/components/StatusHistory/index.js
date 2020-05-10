import React from 'react';
import { StoreContainer } from '../../store';
import UptimeBlocks from './UptimeBlocks';
import { CheckCiricleIconSolid } from '../Icons/CheckCiricleIconSolid';
import { CloseCiricleIconSolid } from '../Icons/CheckCiricleIconSolid copy';

const StatusHistory = () => {
  const statusPage = StoreContainer.useContainer();
  return (
    <div className="mt-10">
      {
        statusPage.statuspageData ?
          <div>
            {statusPage.statuspageData.website_data.map((value) => {
              return (
                <div key={value.url_name} className={`rounded shadow-md overflow-hidden mb-10`}>
                  <div className="border-b px-6 py-4 flex items-center justify-between">
                    <h5 className="font-medium text-xl text-gray-700 flex items-center">
                      {
                        value.status === '200' ?
                        <CheckCiricleIconSolid
                        fillColor="#43D69E"
                        />
                        :
                        <CloseCiricleIconSolid
                        fillColor="#FF4E42"
                        />
                      }
                      <span className="ml-2">{value.url_name}</span>
                    </h5>
                    <span className="font-normal text-gray-600 text-sm"> Showing last  {value.uptime_data.length} days data</span>
                  </div>

                  <UptimeBlocks
                    uptime_data={value.uptime_data}
                  />

                </div>
              )
            })
            }
          </div>
          :
          ''
      }
    </div>
  )
}

export default StatusHistory;