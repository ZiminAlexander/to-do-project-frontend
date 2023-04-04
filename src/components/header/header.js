import "Project/components/header/header.css"
import React from 'react';

export function Header(){
    return(
        <header className="header">
            <img src="images/complete.svg" 
                className="programm-logotype"
            />
            <div className="program-title">
                Программа для того, чтобы делать дела!
            </div>  
        </header>
    );
}