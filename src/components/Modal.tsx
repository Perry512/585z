import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {

    const targetRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = targetRef.current;
        if (!element) return;

        if (isOpen) {
            disableBodyScroll(element);
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
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                onClick={onClose}
            >
                <div
                    id="targetElementId"
                    ref={targetRef}
                    className="rounded-2xl shadow-lg max-w-md w-full overflow-y-auto max-h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                {children}
            </div>
        </div>,
        document.body
    )
}