// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { BTCLineChart, ETHLineChart } from './LinesChart';
import Image from 'next/image';

const Home = () => {
  const [data, setData] = useState<{ crypto_name: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/prices');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      
      <h1>Crypto Prices</h1>
      <div>
        <BTCLineChart data={data.filter(item => item.crypto_name === 'BTC')} />
      </div>
      <div>
        <ETHLineChart data={data.filter(item => item.crypto_name === 'ETH')} />
      </div>
    </div>
  );
};

export default Home;