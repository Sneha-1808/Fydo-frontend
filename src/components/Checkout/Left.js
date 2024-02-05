import Ticket from "./Ticket";

const Left = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center text-center lg:gap-6 lg:p-4 sm:gap-2 sm:p-2">
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    )

}

export default Left;