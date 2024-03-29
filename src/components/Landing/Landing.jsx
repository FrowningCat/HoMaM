import './landing.css';
import Header from './Header';
import About from './About';
import CastleBlock from './CastleBlock';

export default function Landing() {
    return (
        <>
            <div className="landing">
                <Header />
                <About />
                <CastleBlock />
            </div>
        </>
    );
}
