import React, { useState, useEffect } from "react";

const E_Bodega = () => {
  const [records, setRecords] = useState<any[]>([]);

  const fetchRecords = async () => {
    try {
      const response = await fetch('/api/fetchRecords');
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div>
      <h1>E_Bodega</h1>
      <button onClick={fetchRecords}>Fetch Records</button>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{JSON.stringify(record)}</li>
        ))}
      </ul>
    </div>
  );
};

export default E_Bodega;