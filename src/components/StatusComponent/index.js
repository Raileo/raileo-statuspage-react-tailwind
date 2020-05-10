import React from 'react';
import { StoreContainer } from '../../store'; 
import { CheckCiricleIconSolid } from '../Icons/CheckCiricleIconSolid';

const StatusComponent = () => {
  const statusPage = StoreContainer.useContainer()
  return (
    statusPage.statuspageData ?
      <div className="rounded shadow-md">
        {statusPage.statuspageData.website_data.map((value, index) => {
          return (
            <div key={value.url_name} className={`overflow-hidden px-6 py-4 flex justify-between items-center ${index !== statusPage.statuspageData.length -1? 'border-b' : ''}`}>
              <div className="font-bold text-xl text-gray-700">
                {value.url_name}
              </div>
              <div className="icon">
                {
                  value.status === '200' &&
                  <CheckCiricleIconSolid 
                    fillColor="#43D69E"
                  />
                }
              </div>
            </div>
          )
        })
        }
      </div>
    :
    ''
  )
}

export default StatusComponent;