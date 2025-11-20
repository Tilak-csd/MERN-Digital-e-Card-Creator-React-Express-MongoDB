import { useState, useEffect } from 'react'
import './Form.css'

export function InputForm({onClose}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [interest, setInterest] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [instagram, setInstagram] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        const newCard = {
            name,
            description,
            interest: interest.split(","),
            links : {
                linkedIn,
                instagram
            }
        }

        const res = await fetch("http://localhost:3000/card", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(newCard)
        })

        const data = await res.json()
        onClose()
    }




    return (
        <form id='form' onSubmit={handlesubmit}>
            <label htmlFor="name">Full Name :</label><br />
            <input type="text" name="name" placeholder="Enter your full Name."
                value={name} onChange={(e) => setName(e.target.value)} /><br />
            <label htmlFor="description">Description :</label><br />
            <input type="text" name="description" placeholder="Enter Description."
                value={description} onChange={(e) => setDescription(e.target.value)} /><br />
            <label htmlFor="interest">Interest :</label><br />
            <input type="text" name="interest" placeholder='Enter your Interests'
                value={interest} onChange={(e) => setInterest(e.target.value)} /><br />
            <label htmlFor="LinkedIn">LinkedIn URL :</label><br />
            <input type="text" name="LinkedIn" placeholder='LinkedIn URL'
                value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} /><br />
            <label htmlFor="Instagram">Instagram :</label><br />
            <input type="text" name="Instagram" placeholder='Instagram URL'
                value={instagram} onChange={(e) => setInstagram(e.target.value)} /><br />

            <button type="submit">Add Card</button>

        </form>
    )
}