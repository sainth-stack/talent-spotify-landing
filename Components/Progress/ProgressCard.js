import React from 'react';
import { progressData } from '../../utilities/progressData';

const borderColorClasses = {
    'border-violet-500': 'border-primary',
    'border-blue-500': 'border-info',
    'border-green-500': 'border-success',
    'border-orange-500': 'border-warning',
};

export const ProgressCircle = ({ percentage, borderColor = 'border-danger' }) => {
    const borderClass = borderColorClasses[borderColor] || 'border-danger';

    return (
        <div
            className={`position-relative d-flex  align-items-center justify-content-center rounded-circle bg-white container border border-4 ${borderClass} shadow p-2`}
            style={{
                width: '6rem',
                height: '6rem',
                background: 'white',
            }}
        >
            <span className="position-absolute text-dark fw-bold">{percentage}%</span>
        </div>
    );
};

const ProgressCard = () => {
    return (
        <div className="d-flex flex-column   p-1  container">
            {progressData.map((data, index) => (
                <div key={index} className="d-flex my-3 justify-content-center align-items-center">
                    {data.align === 'right' ? (
                        <>
                            <div className={`fs-6 my-1 fw-medium p-2 border border-2 border-dotted ${borderColorClasses[data.borderColor]} rounded-pill me-4`}>
                                {data.text}
                            </div>
   <div
  className={`w-25 border-top border-dotted ${borderColorClasses[data.borderColor]} mx-4`}
  style={{ width: '1.5rem' }}
></div>



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
                           <div
  className={`w-25 border-top border-dotted ${borderColorClasses[data.borderColor]} mx-4`}
  style={{ width: '1.5rem' }}
></div>

                            <div className={`fs-6 mx-3 fw-medium p-2 border border-2 ${borderColorClasses[data.borderColor]} rounded-pill ms-4`}>
                                {data.text}
                            </div>
                        </>
                    )}
                </div>
            ))}

            <div className="d-flex justify-content-center my-4 ">
                <button className="px-4 py-2 btn btn-primary rounded-pill" style={{backgroundColor: '#083c61', borderColor: '#083c61'}}>
                    Book A Demo
                </button>
            </div>
        </div>
    );
};

export default ProgressCard;