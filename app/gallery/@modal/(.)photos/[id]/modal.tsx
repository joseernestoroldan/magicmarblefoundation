'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { IoMdClose } from "react-icons/io";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
      <dialog ref={dialogRef} className="w-[80%] max-w-[1000px] h-[80%] max-h-[1000px] border-0 rounded-xl bg-black bg-opacity-10 p-5 flex justify-center items-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="absolute top-[10px] right-[10px] w-12 h-12 rounded-full flex justify-center items-center text-2xl font-medium cursor-pointer text-white"><IoMdClose/></button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}