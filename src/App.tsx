import { SpaceViewer } from './components/SpaceViewer';
import './index.css'
import { FC } from 'react';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';
import { RegisterPage } from './pages/RegisterPage';
import { Browse } from './components/Browse';
import { SessionProvider } from './components/SessionProvider';


const App: FC = () => {
  return (
    <SessionProvider>

      <div className="app">
        {/* <SpaceViewer /> */}
        <Browse />
      </div>
    </SessionProvider>
  )
}

export default App
