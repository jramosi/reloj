import { useTime } from '../../TimeContext';
import '../../App.css';

export const Minuto = () => {
  const { mm } = useTime();
  return (
    <>
      <div className='circulo-reloj' style={{ border: '8px solid #F9E300' }} >
        <span className='numero-digital'>
          {mm}
        </span>
      </div >


    </>
  )
}
