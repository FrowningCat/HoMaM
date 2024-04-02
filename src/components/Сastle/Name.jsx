import './castle.css';
import Rectangle1 from '../../assets/Rectangle 1.png';
import Group146 from '../../assets/Group 146.png';
import Group147 from '../../assets/Group 147.png';

export default function Name() {
    return (
        <div className="castle__nameBlock">
            <img
                src={Group146}
                alt="Group146"
                className="castle__nameBlock__imgLeft"
            />
            <p className="castle__nameBlock__nameCastle">ЗАМОК</p>
            <img
                src={Rectangle1}
                alt="Rectangle1"
                className="castle__nameBlock__castleImg"
            />
            <img
                src={Group147}
                alt="Group147"
                className="castle__nameBlock__imgRight"
            />
        </div>
    );
}
