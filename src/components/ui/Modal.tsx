import { Dialog, DialogPanel ,DialogTitle} from '@headlessui/react'
import Button from "./Button";

interface ModalProps {
    isOpen: boolean;
    close: () => void;
    children?: React.ReactNode;
}

function Modal({isOpen,close,children}:ModalProps) {

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium mb-5">
                Product Details
              </DialogTitle>
              {/* 
              <p className="mt-2 text-sm/6 ">
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.
              </p> */}
              {children}
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  submit
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}


export default Modal;
