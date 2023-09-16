"use client";
import { updateWebmark } from "@/lib/api";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";

Modal.setAppElement("#modal");

const UpdateWebMark = (webmarkId) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateWebmark(title, url, description, webmarkId.webmarkId);
    closeModal();
  };

  return (
    <div className="px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
      <Button onClick={() => openModal()}>Update Web Mark</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 bg-slate-300 rounded-xl p-8"
      >
        <h1 className="text-3xl mb-6">Update Web Mark</h1>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <Input
            placeholder="Mark Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Mark URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input type="hidden" value={webmarkId} />
          <Button type="submit">Update</Button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateWebMark;
