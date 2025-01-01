import React, { useState } from 'react'
import NavigationBar from '../common/NavigationBar'
import CardList from '../organism/CardList'
import FooterBar from '../common/FooterBar'
import { useBooks } from '../hooks/useBooks'
import { Spinner } from "flowbite-react";

const HomePage = () => {
    const [searchterm, setSearchTerm] = useState(null);
    const { items, loading, error } = useBooks({searchTerm: searchterm});

    // handle and set search term of user search
    const handleChange = async (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <NavigationBar></NavigationBar>

            {/* main content */}
            <main className='flex-grow'>

                {/* Search bar */}
                <div className="flex mt-32 items-end justify-end mr-5">
                    <input
                        value={searchterm}
                        onChange={handleChange}
                        className="w-96 rounded-full text-[#22223b]"
                        type="text"
                        placeholder="Search Books"
                    />
                </div>

                {/* Book List */}
                <div className="mb-11 m-5">
                    {loading ? (
                        <div className='flex items-center justify-center'>
                            <Spinner color="purple" aria-label="Purple spinner example" size="xl" />
                        </div>) : (
                        <CardList items={items}></CardList>
                    )}

                    {error && <p className="text-red-500">{error}</p>}

                </div>
            </main>


            <div className="ml-5 mr-5 mb-2">
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}

export default HomePage