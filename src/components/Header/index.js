import React, { useEffect } from 'react';
import { StoreContainer } from '../../store';
import { getStatusPageData } from '../../utils/Api';
import { Link } from 'react-router-dom';

const Header = () => {
  const statusPage = StoreContainer.useContainer()

  useEffect(() => {
    if (!statusPage.statuspageData)
      getStatusPageData().then((response) => {
        statusPage.updateStatuspageData(response.data.data)
      })
  })
  
  return (
    <>
      {
        statusPage.statuspageData && statusPage.statuspageData.website_data.map((value, index) => {
          return (
            value.maintenance === 1 &&
            <div 
              className="w-full bg-blue-500 text-white flex justify-center items-center h-6 p-10" 
              key={index}
            >
              {  value.maintenance_message }
            </div>
          )
        })
      }
      <header className="flex justify-center items-center h-20 bg-gray-100">
        <Link to="/" className="text-lg font-medium tracking-wider">
          {
            statusPage.statuspageData ? statusPage.statuspageData.status_page_name : ''
          }
        </Link>
      </header>
    </>
  )
}

export default Header;