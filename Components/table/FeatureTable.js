import React from "react";

const FeatureTable = ({ features, plans }) => {
  return (
    <div className=" mb-4 container-lg overflow-auto  bg-white shadow-sm p-4 pt-8">
      <table className="table table-bordered table-sm">
        <thead className="table-light">
          <tr>
            <th className="text-left font-weight-bold  ">FEATURES</th>
            {plans.map((plan, index) => (
              <th key={index} className="text-left font-weight-bold p-2">
                {plan}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="hover-table">
              <td className="p-2">{feature.name}</td>
              {feature.availability.map((available, idx) => (
                <td
                  key={idx}
                  className={`text-center font-weight-bold ${available ? "text-success" : ""
                    } p-2`}
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
