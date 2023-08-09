/* eslint-disable react/prop-types */

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const AreaChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 50 }}>
                <defs>
                    {/* <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="30%" stopColor="#6584FF" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.5} />
                    </linearGradient> */}
                    <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="30%" stopColor="#6797f8" stopOpacity={0.8} />
                        <stop offset="80%" stopColor="#ad73f2" stopOpacity={0.6} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                <Area type="monotone" dataKey="count" stroke="#6797f8" fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;
