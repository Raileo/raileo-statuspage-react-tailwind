import React from 'react';

const Loader = () => (
  <div className=" absolute left-0 top-0 z-10 h-screen w-screen bg-gray-200 flex items-center justify-center">
    <h3 className="text-lg text-gray-700 text-center">
      Loading <br />
      Please wait ...
    </h3>
  </div>
)

export default Loader;