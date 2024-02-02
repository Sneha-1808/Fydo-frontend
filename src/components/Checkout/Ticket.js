import Counter from "./Counter";

const Ticket = () => {
    return (
        <div className="right-div flex flex-col items-start w-full mx-2 gap-4 text-inter">
           <div className="flex flex-col items-start">
           <p className="font-bold text-lg">General Admission</p>
           <p className="text-secondary">This ticket grants entry to one individual to the event.</p>
           </div>
           <div className="border-b w-full bg-gray-600 mx-auto"></div>

           <div className="flex justify-between items-center w-full">
            <div className="font-bold text-2xl tracking-wide">₹699/-</div>
            <Counter />
           </div>
        </div>
        
    )

}

export default Ticket;