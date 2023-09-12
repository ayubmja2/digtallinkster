"use client";
import { createNewWebmark } from "@/lib/api";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";

Modal.setAppElement("#modal");

const NewWebMark = (webcollectionId) => {
  // webcollectionId is an object with a key of webcollectionId and a value of the id of the webcollection
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewWebmark(
      title,
      url,
      description,
      webcollectionId.webcollectionId
    );
    closeModal();
  };

  return (
    <div className="px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
      <Button onClick={() => openModal()}>+ New Web Mark</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 bg-slate-300 rounded-xl p-8"
      >
        <h1 className="text-3xl mb-6">New Web Mark</h1>
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
          <Input type="hidden" value={webcollectionId} />
          <Button type="submit">Create</Button>
        </form>
      </Modal>
    </div>
  );
};

export default NewWebMark;
