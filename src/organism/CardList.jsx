import React, { useEffect, useState } from 'react'
import Productcard from '../molecules/ProductCard'

const CardList = ({ items }) => {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        setItemsList(items);
    }, [items])

    return (
        <>
            {/* Card List */}
            <div className='grid grid-flow-row'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 items-center justify-center'>
                    {Array.isArray(itemsList) && itemsList.map((itemDetails) => {
                        return (
                            <Productcard key={itemDetails.id} itemDetails={itemDetails} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CardList