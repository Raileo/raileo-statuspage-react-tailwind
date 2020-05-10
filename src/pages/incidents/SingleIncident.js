import React, { useState, useEffect } from 'react';
import { getIncident } from '../../utils/Api';
import { createMarkup } from '../../utils/Utils';
import Loader from '../../components/Loader';

const SingleIncident = ({ match }) => {
  const params = match.params;
  
  const [incident, updateIncident] = useState();
  const [loading, updateLoading] = useState(false);

  useEffect(() => {
    if (!incident) {
      updateLoading(true);
      getIncident(params.id).then((response) => {
        updateIncident(response.data.data);
        updateLoading(false);
      })
    }
  }, [incident, params.id])

  return (
    loading ?
    <Loader />
    :
    <div className="mt-10 mb-20 pl-6 pr-6 md:p-0">
      {
        incident &&
        <>
          <h3 className="text-gray-600 text-3xl font-medium">{incident.details.title}</h3>
        </>
      }
      {
        incident && incident.history.map((item) => {
          return (
            <div className="py-10 border-b block" key={item.id}>
              <div className="block w-full md:flex">
                <div className="md:w-1/3 w-full">
                  <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded mr-2">
                    {item.status}
                  </span>
                  <div className="mt-1 md:mt-5 mb-10 md:mb-0 text-gray-500 text-sm"> {item.created_at} UTC </div>
                </div>

                <div className="text-gray-700 md:w-2/3 w-full" dangerouslySetInnerHTML={createMarkup(item.description)} />
                
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
export default SingleIncident;