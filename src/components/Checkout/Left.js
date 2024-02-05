import Ticket from "./Ticket";

const Left = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center text-center md:gap-6 p-[-2] sm:gap-2 ">
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    )

}

export default Left;