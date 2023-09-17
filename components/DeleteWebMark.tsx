"use client";
import { deleteWebmark } from "@/lib/api";

const DeleteWebMark = (webmarkId) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteWebmark(webmarkId.webmarkId);
  };

  return (
    <div className="px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
      <button
        onClick={handleDelete}
        className="px-6 py-4 bg-red-500 rounded-lg text-white"
      >
        Delete Web Mark
      </button>
    </div>
  );
};

export default DeleteWebMark;
