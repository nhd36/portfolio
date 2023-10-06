import './App.scss';
import IntroPage from './pages/IntroPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExperiencesPage from './pages/ExperiencesPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<IntroPage/>}/>
          <Route path='about' element={<AboutPage/>} />
          <Route path='experiences' element={<ExperiencesPage/>} />
        </Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
