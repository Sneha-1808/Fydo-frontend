import Ticket from "./Ticket";

const Left = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center lg:gap-6 lg:p-4 sm:gap-2 sm:p-2">
            <div className="flex flex-col gap-4">
            <p className='lg:text-4xl sm:text-xl font-bold '>Casa Bacardi on Tour Ft. KING | Bhubaneswar</p>
            <div className="border-b lg:w-[304px] sm:w-full bg-gray-600 mx-auto"></div>
            <p className="text-secondary tracking-wide">Dream City Resort • Friday, 16th January 2024 • 5 PM Onwards</p>
            </div>

            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    )

}

export default Left;