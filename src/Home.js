import './App.css';
import {useTranslation} from "react-i18next";
import bg from './img/get-your-visa-alt.jpg';
import logo from './img/logo_russian_visa_centre_white.svg';
import { Link } from 'react-router-dom';
import Dropdown from './component/Dropdown';


function Home(props) {

    console.log(props);  
    const {t,i18n}=useTranslation();

        const change=(e)=>{
          const languageValue=e.target.value;
          i18n.changeLanguage(languageValue);  
      }

      // const handleClick=(ev)=> {
      //   ev.preventDefault(); 
      //   alert('you clicked me');
      //   console.log(handleClick,'ev')
      // }


return (
    <div className="App">
      <img src={logo} alt="logo" className='logo' />
      <div className='lang' onChange={change}>
      <select>
        <option value="en">English</option>
        <option value="ru">Pусский</option>
        <option value="de">Deutsch</option>
        <option value="en">Czech</option>
        <option value="ru">Polish</option>
        <option value="de">Francais</option>
        <option value="en">Ελληνικά</option>
        <option value="ru">한국어</option>
        <option value="de">Dutch</option>
        <option value="ru">Português</option>
        <option value="de">Românesc</option>
        <option value="en">Pусский</option>
        <option value="ru">Türk</option>
        <option value="de">Việt Nam</option>
      </select>
      </div>
      <div className='visa area'>
      <img src={bg} alt={bg}  className='bg'/>
      </div>
      <div className='centered'>

      <h2 className='visah2'>{t('getYourVisaToRussia')}</h2>
      <div>
        <p className='im'>I'm a resident of </p>

        {/* <Link to={`/Austria`}> Austria </Link> */}

        <Dropdown />

{/* 
      <select className='select'>
      <option selected disabled hidden>Serach Resident Country</option>
        <option><Link to="/Austria" > Austria </Link></option>
        <option > Belgium</option>
        <option >Bulgaria</option>
        <option >Canada</option>
        <option >Czech Republic</option>
        <option >Estonia</option>
      </select> */}
      </div>
      </div>
    </div>
  );
}

export default Home;
