import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    dimensions?: string;
    transparent?: boolean;
}

export default function Modal({ isOpen, onClose, children, dimensions, transparent }: ModalProps) {

    const targetRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = targetRef.current;
        if (!element) return;

        if (isOpen) {
            disableBodyScroll(element);
            window.dispatchEvent(new Event("resize"));
        } else {
            enableBodyScroll(element);
        }

        return () => {
            clearAllBodyScrollLocks();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
            <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-[510] w-[100vw]"
                onClick={onClose}
            >
                <div
                    id="targetElementId"
                    ref={targetRef}
                    className={`
                        rounded-2xl shadow-lg overflow-y-auto ${dimensions}
                        max-h-[90vh] w-[80%] xl:w-[70%] ${transparent? "bg-transparent" :"bg-white"}
                    `}
                    onClick={
                        transparent? onClose : (e) => e.stopPropagation()   
                    }
                >
                {children}
            </div>
        </div>,
        document.body
    )
}