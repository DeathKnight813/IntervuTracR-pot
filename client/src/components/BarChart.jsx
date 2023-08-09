/* eslint-disable react/prop-types */

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';

const BarChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 50 }}>
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="30%" stopColor="#6797f8" stopOpacity={0.7} />
                        {/* <stop offset="80%" stopColor="#FFFFFF" stopOpacity={0.6} /> */}
                        <stop offset="80%" stopColor="#ad73f2" stopOpacity={0.6} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3 " />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                <Bar dataKey="count" barSize={75} fill="url(#colorUv)" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
