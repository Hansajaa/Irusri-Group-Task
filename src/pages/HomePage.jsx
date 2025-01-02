import React, { useState } from 'react'
import NavigationBar from '../common/NavigationBar'
import CardList from '../organism/CardList'
import FooterBar from '../common/FooterBar'
import { useBooks } from '../hooks/useBooks'
import { Spinner } from "flowbite-react";
import ErrorAnimation from '../atoms/ErrorAnimation'

const HomePage = () => {
    const [searchterm, setSearchTerm] = useState(null); //dynamically change variable when typing
    const [term, setTerm] = useState(null); // change only when use press enter key
    const { items, loading, error } = useBooks({ searchTerm: term });

    //search when press the enter key
    const handleKeyPress = (e)=>{
        if(e.key == 'Enter'){
            setTerm(searchterm);
        }
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
                        onChange={(e)=>setSearchTerm(e.target.value)}
                        onKeyUp={handleKeyPress}
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
                        <div>
                            {error ? (
                                    <ErrorAnimation error={error} />
                                ) : (
                                    <CardList items={items}></CardList>
                            )}
                        </div>
                    )}


                </div>
            </main>


            <div className="ml-5 mr-5 mb-2">
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}

export default HomePage