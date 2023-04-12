import "Project/components/footer/footer.css"
import React from 'react';

export function Footer(){
    
    return(
        <footer className="footer">
            <div className="information">
                <div className="telephone">
                    <a href="tel:+79000000000">
                        +7 (900) 000-00-00
                    </a> 
                </div>
                <div className="mail">
                    <a href = "mailto: mail@mail.ru">
                        mail@mail.ru
                    </a>
                </div>
                <div className="author">
                    Zimin Alexander, Belousov Nikita
                </div>
            </div>
            <div className="updated"> 
                {CREATE_DATE} 
            </div>
        </footer>
    );
}