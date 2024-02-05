
import Banner from '../../images/king.png'
import Left from './Left';
import Right from './Right';



const Main = () => {
  return (
    <div className="w-full h-full md:px-[80px] md:py-[40px] flex gap-10 md:flex-row sm:flex-col sm:p-4 ">
      <div className=" flex lg:w-[811px] md:w-[512px] flex-col gap-8 sm:w-full ">
        <Left/>

      </div>
      <div className=" flex  lg:w-[437px] md:w-[330px] sm:w-full hidden md:block">
        <Right/>
      </div>
      
    </div>
  );
};

export default Main;