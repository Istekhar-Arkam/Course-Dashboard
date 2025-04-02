import React from "react";
import { FolderPlus } from "lucide-react";
const Drag = () => {
  return (
    <>
      <div className="border-1 border-dashed w-[350px] h-[280px] rounded text-center flex flex-col justify-center items-center cursor-pointer border-gray-400">
        <FolderPlus />
        <h1 className="text-lg">drag & drop file here</h1>
        <p className="text-xs text-gray-400">or click to browse (4 mb max)</p>
      </div>
      <p className="text-xs text-gray-400 mb-4 py-2">
        some data format,such as dates,number and colors my not be recognized
      </p>
      <button className="border-2 w-[350px] h-10 capitalize bg-blue-400 text-white rounded-lg text-sm">
        continue
      </button>
    </>
  );
};

export default Drag;
