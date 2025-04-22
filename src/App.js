import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDemo from './components/ReactDemo';
import DataVisualizationDemo from './components/DataVisualizationDemo';
import InteractiveUI from './components/InteractiveUI';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="p-4 bg-white shadow-md">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">React 데모 컴포넌트</h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  기본 React 데모
                </Link>
              </li>
              <li>
                <Link to="/chart" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  차트 데모
                </Link>
              </li>
              <li>
                <Link to="/ui" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  UI 데모
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<ReactDemo />} />
            <Route path="/chart" element={<DataVisualizationDemo />} />
            <Route path="/ui" element={<InteractiveUI />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;