import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import './menu.css';

export default function Menu () {
    const navigate = useNavigate();

    const handleNavigate = (path) => () => {
        navigate(path);
    };

    return (
        <div className='menu'>
            <div className='menu_middle_buttons'>
                <button onClick={handleNavigate('/about')}>
                    Home
                </button>
                <button onClick={handleNavigate('/experience')}>
                    Experience
                </button>
                <button onClick={handleNavigate('/projects')}>
                    Projects
                </button>
            </div>    
            <div className='menu_contact_button'>
                <a href='https://drive.google.com/file/d/1BMD4Vi7_viNYRoVgQIw2kpemy6NctJIL/view?usp=sharing'>
                    <button>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    )
}