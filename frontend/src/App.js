import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer, Navbar } from './components/organisms';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import RoomScreen from './pages/RoomScreen';

function App() {
  return (
    <Router>
      <main className='flex flex-col w-full min-h-screen bg-gray-100'>
        <Navbar />
        <section className="w-full sm:max-w-2xl mx-auto space-y-3">
          <div className="bg-white min-h-screen flex flex-col justify-center">
            <div className='flex flex-col pt-16 pb-16 px-6 md:px-8'>
              <Routes>
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/rooms/:id' element={<RoomScreen />} />
                <Route path='/' exact element={<HomeScreen />} />
              </Routes>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Router>

  );
}

export default App;
