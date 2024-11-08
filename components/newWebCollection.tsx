"use client";
import { createNewCollection } from "@/lib/api";
import { useState } from "react";
import router from "next/router";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";

Modal.setAppElement("#modal");

const NewWebCollection = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewCollection(title, description);
    closeModal();

    router.reload();
  };

  return (
    <div className="px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
      <Button onClick={() => openModal()}>+ New Web Collection</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 bg-slate-300 rounded-xl p-8"
      >
        <h1 className="text-3xl mb-6">New Web Collection</h1>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <Input
            placeholder="Collection Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Collection Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit">Create</Button>
        </form>
      </Modal>
    </div>
  );
};

export default NewWebCollection;
