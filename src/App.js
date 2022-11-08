import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Router/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto' data-theme="light">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
