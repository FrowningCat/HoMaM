import Landing from './components/Landing/Landing';
import Сastle from './components/Сastle/Сastle';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/castle" element={<Сastle />} />
        </Routes>
    );
}
