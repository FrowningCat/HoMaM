import './castle.css';
import castl from '../../assets/1.jpg';
import Group146 from '../../assets/Group 146.png';
import Group147 from '../../assets/Group 147.png';
import Group145 from '../../assets/Group 145.png';

export default function Name() {
    return (
        <>
            <img src={Group146} alt="Group146" className="imgLeft" />
            <div className="castle__nameBlock">
                <p className="castle__nameBlock__nameCastle">ЗАМОК</p>
                <img
                    src={castl}
                    alt="Rectangle1"
                    className="castle__nameBlock__castleImg"
                />
            </div>
            <img src={Group147} alt="Group147" className="imgRight" />
            <img src={Group145} alt="Group145" className="imgBottom" />
        </>
    );
}
