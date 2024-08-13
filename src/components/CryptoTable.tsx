import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CryptoData } from '../interfaces/CryptoData';
import PriceText from './PriceText';
import '../styles/table.css'
import { cascadeValType } from '../utils/common';
import ChangeIndicator from './ChangeIndicator';

const CryptoTable: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://data-api.binance.vision/api/v3/ticker/24hr');
        const formattedData = response.data.map((item: any) => ({
          symbol: item.symbol,
          price: parseFloat(item.lastPrice).toFixed(2),
          marketValue: (parseFloat(item.lastPrice) * parseFloat(item.volume)).toFixed(2),
          change: item.priceChangePercent,
        }))
        setCryptoData(formattedData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className='table-box'>
      <table className='table'>
        <thead>
          <tr className='table-header'>
            <th>Crypto</th>
            <th>Price</th>
            <th>Market Value</th>
            <th>24h Change</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.symbol} className='table-row'>
              <td>{crypto.symbol}</td>
              <td><PriceText Price={crypto.price} Unit={"USDT"} /></td>
              <td><PriceText Price={crypto.marketValue} Unit={"USDT"} /></td>
              <td><ChangeIndicator Value={crypto.change}/></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
