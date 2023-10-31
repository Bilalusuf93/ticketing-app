import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'
import { getTicketById } from '@/app/request';

async function TicketPage({ params }) {

    let editTicket = {};
    const EDITMODE = params.id === 'new' ? true : false;
    if (!EDITMODE) {
        console.log('edit')
        editTicket = await getTicketById(params.id)
    }
    return (
        <div><TicketForm data={editTicket} /></div>
    )
}

export default TicketPage