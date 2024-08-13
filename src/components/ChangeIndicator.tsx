import React from 'react';
import { ChangeIndicatorProps } from '../interfaces/ChangeIndicator';
import '../styles/change-indicator.css';

const ChangeIndicator: React.FC<ChangeIndicatorProps> = ({ Value }) => {
    let cascaded_value = parseFloat(Value);
    let color = '';
    let symbol = '';

    if (cascaded_value > 0) {
        color = 'green';
        symbol = '↗'; // Artış simgesi
    } else if (cascaded_value < 0) {
        color = 'red';
        symbol = '↘'; // Düşüş simgesi
    } else {
        color = 'black';
        symbol = ''; // Sabit değer için simge yok
    }

    return (
        <div className="change-indicator" style={{color: color}}>
            {symbol} {cascaded_value.toFixed(2)}%
        </div>
    );
};

export default ChangeIndicator;
