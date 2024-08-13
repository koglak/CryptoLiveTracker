import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

interface MiniChartProps {
    data: number[];
    color: string;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, color }) => {
    return (
        <Sparklines data={data} width={100} height={30}>
            <SparklinesLine color={color} style={{ fill: "none" }} />
        </Sparklines>
    );
};

export default MiniChart;
