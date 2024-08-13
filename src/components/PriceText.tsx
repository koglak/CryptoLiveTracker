import React from 'react';
import { PriceDetailsProps } from '../interfaces/PriceDetails';
import '../styles/price-text.css';

const PriceText: React.FC<PriceDetailsProps> = ({ Price, Unit }) => {
    return (
        <div>
            <span className="price">{Price}</span>
            <span className="unit">{Unit}</span>
        </div>
    );
};

export default PriceText;
