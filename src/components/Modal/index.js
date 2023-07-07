import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ showModal, closeModal, children, title }) {
  return (
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, animation: "ease-in" }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50"
          />
          <motion.div
            initial={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ translateY: -50, opacity: 0 }}
            className="fixed inset-0 m-auto h-fit w-4/5 rounded-lg bg-white p-8 shadow-lg md:w-1/2 lg:w-1/3"
          >
            <motion.h3
              initial={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
              exit={{ translateX: -50, opacity: 0 }}
            >
              {title}
            </motion.h3>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
