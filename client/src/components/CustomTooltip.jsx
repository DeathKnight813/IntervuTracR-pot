/* eslint-disable react/prop-types */

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
                <div>
                    {payload.map(pld => (
                        <div
                            style={{
                                display: 'inline-block',
                                padding: 20,
                                background: 'linear-gradient(120deg, #ad73f2 0%, #6797f8 100%)',
                                borderRadius: '5px',
                                clipPath: 'polygon(100% 0%, 84% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)'
                            }}
                            key={pld}
                        >
                            <div style={{ color: pld.fill }}>{pld.value}</div>
                            <div>{pld.dataKey}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
