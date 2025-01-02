import React from 'react'
import {Footer} from 'flowbite-react'

const FooterBar = () => {
    return (
        <>
            <Footer container className='bg-[#4a4e69]'>
                <Footer.Copyright className='text-white' by="BookStore" year={2025} />
                <Footer.LinkGroup className='text-white'>
                    <Footer.Link className='text-white font-semibold' href="https://nilana-hansaja.netlify.app">Developed By @Hansaja</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    )
}

export default FooterBar