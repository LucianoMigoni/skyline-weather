// ProvideLocation.jsx
import React, { useContext, useState, useEffect } from 'react';

const ProvideLocationContext = React.createContext();

import Locations from './locations.json';

export const ProvideLocation = ({ children }) => {
  const [locationsObject, setLocationsObject] = useState([]);

  useEffect(() => {
    setLocationsObject(Locations);
  }, []);

  return (
    <ProvideLocationContext.Provider value={{ locations: locationsObject }}>
      {children}
    </ProvideLocationContext.Provider>
  );
};

const useProvideLocation = () => {
  return useContext(ProvideLocationContext);
};

export default useProvideLocation;
