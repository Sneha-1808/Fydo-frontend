import React from 'react';
import Banner from '../../images/king.png'


const Left = () => {
  return (
    <div className='flex flex-col gap-6 pb-[40px]'>
        <div>
        <img src={Banner}/>
        </div>

        {/* Details------- */}
        <p className=" flex flex-col gap-2 font-inter text-left text-[#222222]">
        <p className='text-2xl font-bold tracking-tight'>Details</p>

        <p className='text-[#475467]'> 
        <b>Artist Lineup:</b><br/>
        King + Supporting Acts<br/>
        <b>Event produced by:</b> WMS Entertainment<br/>
        <b>Presented by:</b> Bacardi Experiences<br/>
        <b>Event Partner:</b> Embassy<br/>
        <b>Offline Ticketing Partner:</b> Agnaye Ventures, Contact - +91 99377 98098<br/>
        <b>Table Bookings:</b> +91 98663 88866</p>
        
        </p>

        <p className='flex flex-col gap-2 font-inter text-left'>
        <p className='text-2xl font-bold tracking-tight'>Instructions</p>
        <ul className='text-[#475467] text-l list-disc ml-4'>
            <li>By accepting, holding or using a ticket, you acknowledge that you have read, understood, accepted and agreed to the full terms and conditions.</li>
            <li>The organizer reserves the right to alter the schedule of the event without prior intimation.</li>
            <li>The organizer, the venue and the ticketing company shall not be liable for any difficulties caused by an unauthorized copy or reproduction of this ticket and reserves the right to refuse entry to such ticket holders.</li> 
            <li>No refund on a purchased ticket is possible, even in case of any rescheduling, unforeseen circumstances or force majeure conditions.</li>
            <li>Duplicate tickets will not be issued for Lost or stolen tickets.</li>
            <li>Each ticket admits only 1 person.</li>
            <li>This is a wristband access festival. In case wristbands are taken off, replacement wristbands will not be issued. Wristband removed or tampered with will be rendered invalid and will not be replaced.</li>
            <li>Rights of admission are reserved, even for valid ticket holders.</li>
            <li>Please remember to carry a valid government issued photo ID Proof (Driver's License/ Aadhar Card/ Passport). You may not be permitted to enter in the absence of a valid ID Proof.</li>
            <li>Liquor will be served to guests of Legal Drinking Age (LDA) only and on display of valid age groups. LDA bands will be provided at the venue on proof of age</li>
            <li>If an underage individual is found consuming alcohol, the ward’s adult guardian will be liable for all resulting actions & consequences.</li>
            </ul>
        </p>

        <p className='flex flex-col gap-2 font-inter text-left'>
        <p className='text-2xl font-bold tracking-tight'>Policies</p>
        <ul className='text-[#475467] text-l list-disc ml-4'>
            <li>By accepting, holding or using a ticket, you acknowledge that you have read, understood, accepted and agreed to the full terms and conditions</li>
            <li>The organizer reserves the right to alter the schedule of the event without prior intimation.</li>
        </ul>
        </p>
    </div>

  )
}

export default Left;