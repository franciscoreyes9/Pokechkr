import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import TeamBuilder from './pages/TeamBuilder';
import GymLeaders from './pages/GymLeaders';
import Legend from './pages/Legend';
import './styles/main.scss';
import { ThemeProvider } from './components/ThemeContext';
import PokemonDetails from "./pages/PokemonDetails";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="app">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/pokedex" element={<Pokedex />} />
                            <Route path="/team-builder" element={<TeamBuilder />} />
                            <Route path="/gym-leaders" element={<GymLeaders />} />
                            <Route path="/legend" element={<Legend />} />
                            <Route path="/pokemon/:id" element={<PokemonDetails />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;