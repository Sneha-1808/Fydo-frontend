
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Main from './components/Main/Main';
import Navbar from './components/Navbar';

function App() {
  return (
   <div className='font-inter'>
   <div className='md:hidden sticky top-0 z-20'>
    <Navbar/>
   </div>
   <div className='hidden md:block'>
   <Navbar/>
   </div>
    
    <Main/>
    
   </div>
  );
}

export default App;
