/* eslint-disable react/prop-types */
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";

const CommentModal = ({ commenter_info, user_comment, isOpen, close }) => {
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen bg-black/30 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md border rounded-xl bg-white p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                    {commenter_info.email}
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-black/50">{user_comment}</p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-primary/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Close
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CommentModal;
