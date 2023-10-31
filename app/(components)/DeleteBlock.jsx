'use client'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteBlock = ({ id }) => {

    const router = useRouter();
    const deleteTicket = async () => {
        const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: "DELETE"
        });
        if (response.ok) {
            router.refresh()
        }
    }
    return (
        <FontAwesomeIcon onClick={deleteTicket} icon={faX} className='text-red-400 hover:cursor-pointer hover:text-red-200' />
    )
}

export default DeleteBlock