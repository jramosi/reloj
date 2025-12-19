import { useTime } from '../../TimeContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Hour = () => {
    const { hh } = useTime();

    return (
        <div style={{
            width: '400px',
            height: '400px',
            margin: '15px auto',
            filter: 'drop-shadow(0px 0px 10px rgba(247, 167, 167, 0.3))'
        }}>
            <CircularProgressbar
                value={hh}
                maxValue={24}
                text={`${String(hh).padStart(2, '0')}`}
                styles={{
                    // Mantenemos tus colores y animaciones con buildStyles
                    ...buildStyles({
                        pathTransitionDuration: 0.5,
                        strokeLinecap: 'round',
                    }),
                    root: {},
                    path: {
                        stroke: '#ee1e1eff', //color de cinta
                        strokeWidth: 3, // control del grosos
                    },
                    trail: {
                        stroke: '#550c0cff', // color de camino
                        strokeWidth: 3, // control del grosos
                    },
                    // para el textp
                    text: {
                        fill: '#FF8C00',
                        fontSize: '30px',
                        fontFamily: 'Digital7-Mono, monospace',
                        fontWeight: 'bold',
                        dominantBaseline: 'middle',
                        textAnchor: 'middle',
                    },
                }}
            />
        </div>
    );
};