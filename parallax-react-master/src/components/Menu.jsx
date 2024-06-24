import React from 'react'

const links = [
    { id: 1, name: 'Map' },
    { id: 2, name: 'About Us' },
    { id: 3, name: 'Coupons' },
    { id: 4, name: 'Profile'}
]

const Menu = ({ isOpen }) => {
    return (
        <div className={isOpen ? 'styled-menu menu-open' : 'styled-menu'}>
            <div className='links'>
                {
                    links.map((link) => (
                        <span key={link.id}>{link.name}</span>
                    ))
                }
            </div>

            <div className='social'>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Linkedin</p>
            </div>
        </div>
    )
}

export default Menu