import { useEffect, useState } from 'react';
import { ModalProvider } from './components/Modal.jsx';
import Loader from './components/Loader.jsx';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import Garage from './components/Garage.jsx';
import Telemetry from './components/Telemetry.jsx';
import RaceCalendar from './components/RaceCalendar.jsx';
import Academy from './components/Academy.jsx';
import Podium from './components/Podium.jsx';
import PitWall from './components/PitWall.jsx';
import SectorMap from './components/SectorMap.jsx';
import SpeedLines from './components/SpeedLines.jsx';
import PitStopEgg from './components/PitStopEgg.jsx';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <ModalProvider>
      <Loader onDone={() => setStarted(true)} />
      <TopBar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero started={started} />
        <div className="hazard" />
        <Garage />
        <Telemetry />
        <RaceCalendar />
        <Academy />
        <Podium />
        <PitWall />
      </main>

      <footer>
        <div className="team">AB · MOTORSPORT</div>
        © {new Date().getFullYear()} Ayush Bhatt · Software Developer &nbsp;·&nbsp; Press <b>P</b> for a pit stop
      </footer>

      <SpeedLines />
      <SectorMap />
      <PitStopEgg />
    </ModalProvider>
  );
}
