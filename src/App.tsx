import { SpaceViewer } from './components/SpaceViewer';
import './index.css'
import { FC } from 'react';
import { Navbar } from './components/Navbar';


const App: FC = () => {
  return (
    <div>
      <Navbar />
      <SpaceViewer />
    </div>
  );
};

export default App
