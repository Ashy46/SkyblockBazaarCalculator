import { useEffect, useState } from 'react';
import React from 'react';

export default function Home() {
    const style = {
        display: 'flex',
        alightItems: 'center',
        justifyContent: 'center',
    }
    return (
        <body className='body'>
            <h1>Home Page</h1>
            <section className='section'>
                <h2>Introduction</h2>
                <p>
                    Welcome to the Bazaar Matrix. This is a platform where you can simulate your investments in the bazaar. 
                    You can view the bazaar matrix, create your portfolio and see the theoritical per day returns on your investments.
                    You can additionally ask us to create a portfolio for you by providing the investment size.
                </p>
                <h2 style = {style}>Click any link to get started!</h2>
            </section>
        </body>
    )
}
