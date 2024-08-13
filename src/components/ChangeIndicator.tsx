import React, { useState, useEffect } from 'react';
import { ChangeIndicatorProps } from '../interfaces/ChangeIndicator';
import '../styles/change-indicator.css';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const ChangeIndicator: React.FC<ChangeIndicatorProps> = ({ Value, Symbol }) => {
    const [data, setData] = useState<number[]>([]);
    const cascaded_value = parseFloat(Value);
    let color = '';
    let icon = '';

    if (cascaded_value > 0) {
        color = 'green';
        icon = '↗'; // Artış simgesi
    } else if (cascaded_value < 0) {
        color = 'red';
        icon = '↘'; // Düşüş simgesi
    } else {
        color = 'black';
        icon = ''; // Sabit değer için simge yok
    }

    async function fetchKlineData(symbol: string) {
        console.log(Symbol)

        try {
            const response = await axios.get("https://data-api.binance.vision/api/v3/klines", {
                params: {
                    symbol: symbol,
                    interval: '1m',
                    limit: 10
                }
            });
            return response.data.map((entry: any) => parseFloat(entry[4])); // Close fiyatlarını al
        } catch (error) {
            console.error("Failed to fetch kline data:", error);
            return [];
        }
    }

    useEffect(() => {
        async function getData() {
            const graphData = await fetchKlineData(Symbol);
            setData(graphData);
        }

        getData();
    }, [Symbol]);

    return (
        <div className='w-100 d-flex align-items-center'>
            <div className="change-indicator w-100" style={{ color: color }}>
                {icon} {cascaded_value.toFixed(2)}%
            </div>
            <Sparklines data={data} width={60} height={25} margin={1}>
                <SparklinesLine color={color} style={{ fill: "none" }} />
            </Sparklines>
        </div>
    );
};

export default ChangeIndicator;
