import React from "react";

const CourseInfo = () => {
  return (
    <>
      <p className="py-2 capitalize">course name</p>
      <input
        type="text"
        placeholder="ofspace@design.com"
        className="border-gray-400 border-1 w-full h-10 px-2 rounded"
      />
      <p className="py-2 capitalize"> course description</p>
      <p className="border-1 border-gray-400 border-b-0 rounded-tl-lg rounded-tr-lg text-sm py-1.5 px-2 capitalize">
        <span className="font-bold text-gray-400 px-2">i</span> <span className="font-bold text-gray-400 px-2">B</span> <span className="font-bold text-gray-400 px-2">U</span> 
      </p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        className="border-1 w-full border-gray-400 rounded-bl-lg rounded-br-lg px-2 capitalize pt-2"
        placeholder="write course description "
      ></textarea>
      <div className="flex space-x-4">
        <div>
          <p className="py-2 capitalize">price</p>
          <input
            type="text"
            placeholder="$234"
            className="border-1 border-gray-400 w-4/4 h-10 px-2 rounded"
          />
        </div>
        <div>
          <p className="py-2 capitalize">categories</p>
          <select
            name=""
            id=""
            className="border-1 border-gray-400 w-[350px] h-10 rounded"
          >
            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
