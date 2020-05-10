import React, { useEffect, useState } from 'react';
import StatusHistory from '../../components/StatusHistory';
import { getIncidents, getAnnouncements } from '../../utils/Api';
import ItemList from '../../components/ItemList/Index';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/Icons/ArrowRightIcon';
import Loader from '../../components/Loader';
import AnnouncementCarousel from '../../components/Carousel/Index';
import { StoreContainer } from '../../store';

const Home = () => {
  const statusPage = StoreContainer.useContainer()

  const [incidents, updateIncidents] = useState();
  const [loading, updateLoading] = useState(false);

  const [announcements, updateAnnouncements] = useState();

  useEffect(() => {
    if (!incidents) {
      const incidentStatus = 'monitoring';
      updateLoading(true);
      getIncidents(incidentStatus).then((response) => {
        updateIncidents(response.data.data);
        updateLoading(false);
      })
    }

    if (!announcements) {
      const announcementStatus = 'active';
      getAnnouncements(announcementStatus).then((response) => {
        updateAnnouncements(response.data.data);
      })
    }

  }, [incidents, announcements])
  if (statusPage.statuspageData && statusPage.statuspageData.website_data.length === 0)
    return (
      <div className="h-screen w-screen bg-gray-200 text-2xl text-center fixed flex items-center justify-center left-0 top-0">No data</div>
    )

  return (
    <div>
      {
        loading ?
          <Loader />
          :
          <>
            {/* if you need a separate component just to show the current status, uncomment the beloe */}
            {/* <StatusComponent /> */}
            <StatusHistory />
            <AnnouncementCarousel items={announcements} />

            {/* active incidents */}
            <div className="mt-32 mb-20 pl-6 pr-6 md:p-0">
              <h5 className="text-gray-700 text-2xl mt-32">Active Incidents</h5>
              {
                incidents && incidents.map((value) => {
                  return (
                    <ItemList item={value} key={value.id} />
                  )
                })
              }
              {
                incidents && incidents.length === 0 &&
                <div className="h-32 flex items-center text-gray-600">
                  No active incidents
                </div>
              }

              <Link to="/incidents" className="mt-5 float-right bg-indigo-400 hover:bg-indigo-500 text-white px-3 py-1 rounded inline-flex fill-current tracking-wider capitalize">
                View all incidents<ArrowRightIcon />
              </Link>
            </div>
          </>
      }

    </div>
  )
}
export default Home;