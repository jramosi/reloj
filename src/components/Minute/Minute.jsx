import { useTime } from '../../TimeContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Minute = () => {
    const { mm } = useTime();

    return (
        <div style={{
            width: '400px',
            height: '400px',
            margin: '15px auto',
            filter: 'drop-shadow(0px 0px 10px rgba(232, 243, 167, 0.3))'
        }}>
            <CircularProgressbar
                value={mm}
                maxValue={60}
                text={`${String(mm).padStart(2, '0')}`}
                styles={{
                    // Mantenemos tus colores y animaciones con buildStyles
                    ...buildStyles({
                        pathTransitionDuration: 0.5,
                        strokeLinecap: 'round',
                    }),
                    root: {},
                    path: {
                        stroke: '#ebfc08ff', //color de cinta
                        strokeWidth: 3, // control del grosos
                    },
                    trail: {
                        stroke: '#565c04ff', // color de camino
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