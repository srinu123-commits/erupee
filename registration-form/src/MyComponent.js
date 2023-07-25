// MyComponent.js

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update the component's state with the received data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Display the fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
