import { useTime } from '../../TimeContext';
import '../../App.css';

export const Segundo = () => {
    const { ss } = useTime();
    return (
        <>
            <div className='circulo-reloj' style={{ border: '8px solid #0bfc0bff' }}>
                <span className='numero-digital'>
                    {ss}
                </span>
            </div>
        </>
    )
}
