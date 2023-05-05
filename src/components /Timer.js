import React from 'react';
import {useState, useEffect} from 'react';

export const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "April, 15, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setHours(Math.floor((time / (1000 * 60 * 60)) ));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer" role="timer">
            <div className="col-4">
                <div className="box">
                    <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
                    <span className="text">Часов</span>
                </div>
            </div>
            <div className="col-4">
                <div className="box">
                    <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                    <span className="text">Минут</span>
                </div>
            </div>
            <div className="col-4">
                <div className="box">
                    <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                    <span className="text">Секунд</span>
                </div>
            </div>
        </div>
    );
};
