import './castle.css';
import Rectangle1 from '../../assets/Rectangle 1.png';

export default function Name() {
    return (
        <div className="castle__nameBlock">
            <p className="castle__nameBlock__nameCastle">ЗАМОК</p>
            <img
                src={Rectangle1}
                alt="Rectangle1"
                className="castle__nameBlock__castleImg"
            />
        </div>
    );
}
