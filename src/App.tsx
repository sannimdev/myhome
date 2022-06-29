import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './config/globalStyles';
import Room from './pages/Room';
import RoomDetail from './pages/RoomDetail';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Room />} />
                    <Route path="/:no" element={<RoomDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
