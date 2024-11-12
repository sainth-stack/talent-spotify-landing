import React from "react";

const FeatureTable = ({ features, plans }) => {
  return (
    <div className="container-lg overflow-x-auto mb-6 mobile_table bg-white shadow-md p-4 pt-8">
      <table className="min-w-full border border-gray-300 ">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b border-gray-300 border-r p-2 text-left text-sm font-semibold">
              FEATURES
            </th>
            {plans.map((plan, index) => (
              <th
                key={index}
                className={`border-b border-gray-300 ${
                  index < plans.length - 1 ? "border-r" : ""
                } p-2 text-left text-sm font-semibold`}
              >
                {plan}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border-b border-gray-300 border-r p-2 text-sm">
                {feature.name}
              </td>
              {feature.availability.map((available, idx) => (
                <td
                  key={idx}
                  className={`border-b text-center font-semibold text-green-600 border-gray-300 ${
                    idx < feature.availability.length - 1 ? "border-r" : ""
                  } p-2 text-sm`}
                >
                  {available ? "✓" : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureTable;
