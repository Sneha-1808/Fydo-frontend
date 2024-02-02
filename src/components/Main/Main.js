
import Banner from '../../images/king.png'
import Left from './Left';
import Right from './Right';



const Main = () => {
  return (
    <div className="min-h-full min-w-screen px-[80px] py-[40px] flex gap-10 lg:flex-row sm:flex-col">
      <div className="flex-1 lg:w-64 h-32 flex-col gap-8 sm:w-full ">
        <Left/>

      </div>
      <div className="flex lg:w-[437px] sm:w-full">
        <Right/>
      </div>
      
    </div>
  );
};

export default Main;