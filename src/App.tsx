import { SpaceViewer } from './components/SpaceViewer';
import './index.css'
import { FC } from 'react';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';


const App: FC = () => {
  return (
    <div>
      <Navbar />
      <SpaceViewer />
      <Register />
    </div>
  );
};

export default App
