import React from 'react';
import { Link } from 'react-router-dom';
import { createMarkup } from '../../utils/Utils';

const ItemList = ({ item }) => {
  return (
    <Link className="py-10 border-t block" to={`/incidents/${item.id}`}>
      <h4 className="font-medium text-xl"> {item.title} </h4>
      <div className="flex">
        <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded mr-2">
          {item.status}
        </span>

      </div>
      <div className="pt-8 text-gray-700" dangerouslySetInnerHTML={createMarkup(item.description)} />
      <div className="mt-5 text-gray-700 text-sm"> Reported on {item.created_at} UTC </div>
    </Link>
  )
}

export default ItemList;