import React, {useState} from 'react';
import '../styles/crypto-details.css';
import { CryptoDetailsProps } from '../interfaces/CryptoDetails';

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ CryptoName }) => {
    const [imageError, setImageError] = useState(false);

    const pair_list = ["USD", "EUR", "BTC", "BNB", "ETH", "TRY", "USDT", "BRL", "USDC", "RS", "COP"]
    function extractSymbolAndPair(cryptoName: string, pairList: string[]): { symbol: string, pair: string | null } {
        for (let pair of pairList) {
            if (cryptoName.endsWith(pair)) {
                const symbol = cryptoName.slice(0, -pair.length);
                return { symbol, pair };
            }
        }
        return { symbol: cryptoName, pair: null }; // Eğer listedeki bir pair ile eşleşmezse
    }

    const { symbol, pair } = extractSymbolAndPair(CryptoName, pair_list);

    return (
        <div className="crypto-details">
            <img src={`https://cdn.bilira.co/symbol/svg/${symbol}.svg`} alt={symbol} className="crypto-icon" />
            <div className="crypto-text">
                <div className="crypto-symbol">
                    <span className="symbol">{symbol}</span> / <span className="pair">{pair}</span>
                </div>
                <div className="crypto-name">{symbol}</div>
            </div>
        </div>
    );
};

export default CryptoDetails;
