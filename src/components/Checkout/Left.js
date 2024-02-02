import Ticket from "./Ticket";

const Left = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-6 p-4">
            <div className="flex flex-col gap-4">
            <p className='text-4xl font-bold '>Casa Bacardi on Tour Ft. KING | Bhubaneswar</p>
            <div className="border-b w-[304px] bg-gray-600 mx-auto"></div>
            <p className="text-secondary tracking-wide">Dream City Resort • Friday, 16th January 2024 • 5 PM Onwards</p>
            </div>

            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    )

}

export default Left;