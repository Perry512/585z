import { useState } from "react";
import Modal from "../components/Modal"
import { photos } from "../assets/photos";
import type { Photo } from "../types/Photo";

export default function PhotoGallery() {
    const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

    return (
        <>
            <div className="bg-black w-full min-h-screen py-10">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Photo Gallery
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="relative group cursor-pointer overflow-hidden"
                            onClick={() => setActivePhoto(photo)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-lg font-semibold px-2 text-center">
                                    {photo.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={!!activePhoto} onClose={() => setActivePhoto(null)}>
                {activePhoto && (
                    <div className="flex flex-col items-center">
                        <img
                            src={activePhoto.src}
                            alt={activePhoto.alt}
                            className="max-h-[80vh] object-contain"
                        />
                        <p className="text-white mt-4">{activePhoto.description}</p>
                    </div>
                )}
            </Modal>
        </>
    );
};