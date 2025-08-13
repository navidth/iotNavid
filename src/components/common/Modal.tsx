// Modal.tsx
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  title: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <AnimatePresence key="modal">
      {isOpen && (
        <>
          <motion.div
            key="modal"
            className="fixed inset-0 md:bg-black/50  bg-black/80 z-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="relative md:p-10 p-0 w-full max-w-lg">
              {/* <!-- Modal content --> */}
              <div className="relative bg-asli rounded-lg shadow-sm">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 py-3 md:px-5 border-b rounded-t border-asli">
                  <h3 className="text-base md:text-xl font-semibold text-asli">
                    {title}
                  </h3>
                  <Button
                    type="iconButton"
                    icon={IoMdClose}
                    iconSize={24}
                    handle={onClose}
                    title="بستن"
                  />
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
