import React from "react";
import Select from "react-select";
import { useState } from "react";

const OtherInfo = () => {
  const [serviceStates, setServiceStates] = useState([]);
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const serviceOptions = [
    { value: "Html", label: "Html" },
    { value: "CSS", label: "Css" },
    { value: "JS", label: "Javascript" },
    { value: "RJS", label: "ReactJs" },
    { value: "TW", label: "Tailwind" },
    { value: "BS", label: "Bootstrap" },
  ];

  const handleService = (serviceOptions) => {
    setServiceStates((prevState) => ({
      ...prevState,
      user_services: serviceOptions
        ? serviceOptions.map((option) => option.label)
        : [],
    }));

    setServiceStates(serviceOptions || []);
  };

  return (
    <>
      <div className="bg-white p-6 rounded shadow w-4/6 mt-5 ">
        <p className="py-2 capitalize">instructor name</p>
        <input
          type="text"
          placeholder="type name here"
          className="border-gray-400 border-1 w-full h-10 px-2 rounded capitalize"
        />
        <div className="flex justify-between">
          <div>
            <h1 className="py-2 capitalize justify-between ">duration</h1>

            <select className="border-1 border-gray-400 w-full h-10 rounded px-3">
              <option value="2h 30m">2h 30m</option>
              <option value="1h 20m">1h 20m</option>
              <option value="50m">50m</option>
              <option value="40m">40m</option>
            </select>
          </div>
          <div>
            <p className="py-2 capitalize">date</p>
            <p className="border-1 h-10 pt-2 border-gray-400 rounded px-2">
              {formattedDate}
            </p>
          </div>
          <div>
            <p className="py-2 capitalize">categories</p>
            <select
              name=""
              id=""
              className="border-1 border-gray-400 w-[200px] h-10 rounded px-2"
            >
              <option value="English">English</option>
              <option value="English">English</option>
              <option value="English">English</option>
              <option value="English">English</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
        <div>
          <h1 className="capitalize py-2">tags</h1>
          <Select
            options={serviceOptions}
            isMulti
            value={serviceStates}
            onChange={handleService}
            className="text-sm md:text-lg"
          />
        </div>
      </div>
    </>
  );
};

export default OtherInfo;
