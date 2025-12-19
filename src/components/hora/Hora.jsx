import { useTime } from '../../TimeContext';
import '../../App.css';

export const Hora = () => {
    const { hh } = useTime();
    return (
        <>
            <div className='circulo-reloj' style={{ border: '8px solid #D52B1E' }}>
                <span className='numero-digital'>
                    {hh}

                </span>
            </div>
        </>
    )
}
