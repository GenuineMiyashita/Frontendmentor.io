import { useState } from "react";
import "./archivistModal.styles.css";

const ArchivistModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-btnColor/80 w-24 mx-auto font-Nunito font-medium text-neutral-100 rounded-md shadow-xl"
      >
        Learn More
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="font-Marcellus text-2xl py-3 font-bold">
              Archivist
            </h2>
            <div className="flex text-xs justify-evenly align-middle pb-3 font-Nunito">
              <p>Level: 60</p>
              <p>Academy of Wugnarth</p>
            </div>
            <p className="font-Nunito font-medium text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ArchivistModal;
