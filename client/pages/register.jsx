'use client'

import React, { useState } from 'react'

const register = () => {
    const [name, setName] = useState('');
    const [account, setAccount] = useState('');
    const [bankName, setBankName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a data object with the form values
        const data = {
            name, account, bankName, address1, address2, city, zip, country
        };

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className='container'>
                <h1>Create a vender account</h1>
                <div className='input'>
                    <label htmlFor="name">Vendor Name </label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='input'>
                    <label htmlFor="account">Bank Account No </label>
                    <input id='account'
                        type="text"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        required
                    />
                </div>
                <div className='input'>
                    <label htmlFor="bName">Bank Name</label>
                    <input
                        id='bName'
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                    />
                </div>
                <div className='input'>
                    <label htmlFor="address1">Address Line 1</label>
                    <input
                        id='address1'
                        type="text"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                        required
                    />
                </div>
                <div className='input'>
                    <label htmlFor="address2">Address Line 2</label>
                    <input
                        id='address2'
                        type="text"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <label htmlFor="city">City</label>
                    <input
                        id='city'
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required

                    />
                </div>
                <div className='input'>
                    <label htmlFor="country">Country</label>
                    <input id='country' type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required />
                </div>
                <div className='input'>
                    <label htmlFor="zip">Zip Code</label>
                    <input
                        id='zip'
                        type="text"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required />
                </div>
            </form>
        </div>
    )
}

export default register



