import { createContainer } from 'unstated-next';
import { useState } from 'react';

export const useStore = () => {
  
  const [statuspageData, setStatuspageData] = useState()

  const updateStatuspageData = (data) => {
    setStatuspageData(data)
  }
  return {
    statuspageData,
    updateStatuspageData
  }
}

export const StoreContainer = createContainer(useStore);