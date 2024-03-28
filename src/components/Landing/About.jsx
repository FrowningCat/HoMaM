import './landing.css';
import mask from '../../assets/mask.png';
import line from '../../assets/line.png';

export default function About() {
    return (
        <div className="landing__about">
            <div className="landing__about__blokContext">
                <p className="landing__about__blokContext__title">
                    О ПРОЕКТЕ
                    <img
                        src={line}
                        alt="line"
                        className="landing__about__blokContext__line"
                    />
                </p>
                <span className="landing__about__blokContext__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto labore suscipit ab aliquid dolorem voluptate
                    voluptates cupiditate sunt nihil, perspiciatis cumque dolore
                    praesentium totam quis veritatis iste eveniet repellat
                    ullam.
                </span>
            </div>
            <img src={mask} alt="mask" className="landing__about__mask" />
        </div>
    );
}
