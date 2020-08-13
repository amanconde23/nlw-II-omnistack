import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

// declarar as tipagens de um objeto
interface PageHeaderProps{
    // title?: se a propriedade nao for obrigatoria
    title: string;
}
// FC functional component
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {/* props.children eh uma propriedade automatica do react (qual conteudo eu passei dentro do no caso PageHeader) */}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;