import React from 'react'
import {Footer} from 'flowbite-react'

const FooterBar = () => {
    return (
        <>
            <Footer container className='bg-[#4a4e69]'>
                <Footer.Copyright className='text-white' href="#" by="Hansaja™" year={2025} />
                <Footer.LinkGroup className='text-white'>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    )
}

export default FooterBar