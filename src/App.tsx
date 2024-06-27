import './index.css'
import { FC } from 'react';
import { Browse } from './components/Browse';


const App: FC = () => {
  return (

    <div className="app">
      {/* <SpaceViewer /> */}
      <Browse />
    </div>
  )
}

export default App
