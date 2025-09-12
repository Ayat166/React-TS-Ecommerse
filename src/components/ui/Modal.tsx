import { Dialog, DialogPanel ,DialogTitle} from '@headlessui/react'

interface ModalProps {
    isOpen: boolean;
    close: () => void;
    children?: React.ReactNode;
    title: string;
}

function Modal({isOpen,close,children,title}:ModalProps) {

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300" aria-hidden="true" />
            <DialogPanel
              transition
              className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-3">
                {title}
              </DialogTitle>
              <div className="space-y-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}


export default Modal;
