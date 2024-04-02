import './castle.css';
import Header from './Header';
import Name from './Name';
import Description from './Description';

export default function Castle() {
    return (
        <>
            <div className="castle">
                <Header />
                <Name />
                <Description />
            </div>
        </>
    );
}
