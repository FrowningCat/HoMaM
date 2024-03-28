import './landing.css';
import Header from './Header';
import About from './About';

export default function Landing() {
    return (
        <>
            <div className="landing">
                <Header />
                <About />
            </div>
        </>
    );
}
