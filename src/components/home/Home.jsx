import { useTime } from '../../TimeContext';
import '../../App.css';

export const Home = () => {
    const { hh, mm, ss } = useTime();
    return (
        <>
            <div >
                <span className='numero-digital'>
                    {`${hh}:${mm}:${ss}`}
                </span>
            </div>
        </>
    )
}
