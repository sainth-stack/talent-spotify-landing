import React from 'react';
import { progressData } from '../../utilities/progressData';

const borderColorClasses = {
    'border-violet-500': 'border-violet-500',
    'border-blue-500': 'border-blue-500',
    'border-green-500': 'border-green-500',
    'border-orange-500': 'border-orange-500',
};

export const ProgressCircle = ({ percentage, borderColor = 'border-red-500' }) => {
    const borderClass = borderColorClasses[borderColor] || 'border-red-500';

    return (
        <div
            className={`relative flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 ${borderClass} shadow-lg p-2`}
            style={{
                background: 'white',
            }}
        >
            <span className="absolute text-black font-bold">{percentage}%</span>
        </div>
    );
};

const ProgressCard = () => {
    return (
        <div className="flex flex-col  p-10 flex-grow">
            {progressData.map((data, index) => (
                <div key={index} className="d-flex my-3 justify-center items-center">
                    {data.align === 'right' ? (
                        <>
                            <div className={`text-lg font-medium text-gray-700 p-3 border-2 ${borderColorClasses[data.borderColor]} rounded-lg mr-4`}>
                                {data.text}
                            </div>
                            <div className={`w-6 border-t-4 border-dotted ${borderColorClasses[data.borderColor]} mx-4`}></div>
                            <ProgressCircle
                                percentage={data.percentage}
                                borderColor={data.borderColor}
                            />
                        </>
                    ) : (
                        <>
                            <ProgressCircle
                                percentage={data.percentage}
                                borderColor={data.borderColor}
                            />
                            <div className={`w-6 border-t-4 border-dotted ${borderColorClasses[data.borderColor]} mx-4`}></div>
                            <div className={`text-lg font-medium text-gray-700 p-3 border-2 ${borderColorClasses[data.borderColor]} rounded-lg ml-4`}>
                                {data.text}
                            </div>
                        </>
                    )}
                </div>
            ))}

            <div className="flex justify-center mt-6">
                <button className="px-6 py-3 bg-[#083c61] text-white rounded-full">
                    {"Book A Demo"}
                </button>
            </div>
        </div>
    );
};

export default ProgressCard;
