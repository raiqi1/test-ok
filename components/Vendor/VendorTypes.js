import React, { useEffect } from "react";

export default function VendorTypes({
  activity,
  selectedTypes,
  handleTypeChange,
  setSelectedTypes,
  vendorType
}) {
  const types = activity?.data?.flatMap((o) => o.types);
  const uniqueTypes = [...new Set(types)];

  const typesVendor = [
    "outdoor",
    "Beach Club",
    "Entertainment",
    "watersport",
    "test",
    "test 2",
  ];

  console.log("uniqueTypes", uniqueTypes);

  console.log("activity", activity);

  console.log("vendorType", vendorType);

  return (
    <div className="mt-4 flex flex-col">
      <div className="flex flex-col gap-2">
        <span>Choose The Activity</span>
        {typesVendor.map((type) => (
          <label key={type} className="inline-flex items-center">
            <input
              type="checkbox"
              value={type}
              checked={selectedTypes[type] || false}
              onChange={handleTypeChange}
              className="form-checkbox h-3 w-3 text-blue-600"
            />
            <span className="ml-2">{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
