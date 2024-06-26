import './landing.css';
import line from '../../assets/line.png';
import Button from './Button';
import { useState } from 'react';
import { differences } from '../../data/differences';

export default function Other() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }

    return (
        <div className="landing__other">
            <div className="landing__other__blokContext">
                <p className="landing__other__blokContext__title">
                    Прочее
                    <img
                        src={line}
                        alt="line"
                        className="landing__other__blokContext__line"
                    />
                </p>
                <section className="landing__other__blokContext__section">
                    <Button
                        isActive={contentType === 'way'}
                        onClick={() => handleClick('way')}
                    >
                        Lorem
                    </Button>
                    <Button
                        isActive={contentType === 'easy'}
                        onClick={() => handleClick('easy')}
                    >
                        Lorem
                    </Button>
                    <Button
                        isActive={contentType === 'program'}
                        onClick={() => handleClick('program')}
                    >
                        Lorem
                    </Button>
                </section>
                {!contentType && (
                    <p className="landing__other__blokContext__p">
                        Lorem ipsum dolor sit amet.
                    </p>
                )}
                {contentType && (
                    <p className="landing__other__blokContext__p">
                        {differences[contentType]}
                    </p>
                )}
            </div>
        </div>
    );
}
