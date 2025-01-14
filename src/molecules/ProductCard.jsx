import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { FaBookOpen } from "react-icons/fa";
import placeholderImg from '../assets/images/placeholder-img-for-books.png'
import BookDetailsModal from '../atoms/modal/BookDetailsModal';
import { createContext } from 'react';

export const detailsAboutBook = createContext([]);

const Productcard = ({ itemDetails }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

    const [details, setDetails] = useState({
        imgUrl: itemDetails?.volumeInfo?.imageLinks?.thumbnail || placeholderImg,
        imgAlt: itemDetails?.volumeInfo?.title + " book cover" || "Book Cover",
        title: itemDetails?.volumeInfo?.title || "unTitled",
        subTitle: itemDetails?.volumeInfo?.subtitle || "unSubtitled",
        pageCount: itemDetails?.volumeInfo?.pageCount || 0,
        infoLink: itemDetails?.volumeInfo?.infoLink || '#',
    });

    return (
        <>
            <Card
                className="max-w-xs max-h-screen mt-28 bg-[#D5CAC4]"
            >
                <img src={details.imgUrl} alt={details.imgAlt} className='w-80 h-96 object-cover' />
                <a href={details.infoLink}>
                    <h5 className="text-xl font-semibold tracking-tight text-[#22223B] dark:text-white">
                         {details.title.length > 23 ? `${details.title.slice(0,23)} ...` : details.title} 
                    </h5>
                </a>
                <p className="text-xl font-semibold tracking-tight text-[#22223B] dark:text-white">
                    {/* {details.subTitle} */}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-md font-bold text-[#22223B] flex"><FaBookOpen className='mt-1 mr-3' />{details.pageCount} </span>
                    <button
                        onClick={handleModal}
                        className="rounded-lg bg-[#4A4E69] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3c3f55] focus:outline-none focus:ring-4 focus:ring-[#4A4E69]"
                    >
                        View More..
                    </button>
                </div>
            </Card>

            {modalOpen ? (
                <detailsAboutBook.Provider value={itemDetails}>
                    <BookDetailsModal handleModal={handleModal} modalOpen={modalOpen} />
                </detailsAboutBook.Provider>
            ) : null
            }
        </>
    )
}

export default Productcard;