import { useState } from "react";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);
    const toggleModal = (): void => setIsOpen((prev) => !prev);

    return { isOpen, openModal, closeModal, toggleModal };
};