import React, { useState, useEffect } from 'react';
import { getIncidents } from '../../utils/Api';
import ItemList from '../../components/ItemList/Index';
import Loader from '../../components/Loader';

const Incidents = () => {
  const [ incidents, updateIncidents ] = useState();
  const [loading, updateLoading] = useState(false);

  useEffect(() => {
    if(!incidents) {
      updateLoading(true);
      getIncidents().then((response) => {
        updateIncidents(response.data.data);
        updateLoading(false);
      })
    }
  }, [incidents])
  return (
    loading ?
    <Loader /> :
    <div className="mt-6 mb-20 pl-6 pr-6 md:p-0">
      <h5 className="text-gray-600 text-3xl font-medium">
        Incidents
      </h5>
      <div>
        {
          incidents && incidents.map((value) => {
            return (
              <ItemList item={value} key={value.id}/>
            )
          })
        }
        {
          incidents && incidents.length === 0 &&
          <div className="h-32 flex items-center text-gray-600">
            No active incidents
          </div>
        }
      </div>
    </div>
  )
}

export default Incidents;