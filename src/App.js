import './App.css';
import ItemListContainer from './components/itemListContainer';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
