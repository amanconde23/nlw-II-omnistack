import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/25211305?s=460&u=2b098bc7ef1029a993dbdaff348e6888f66a0d66&v=4" alt="Amanda Conde"/>
                <div>
                    <strong>Amanda Martinez</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat fugit ipsam minus, hic quod saepe minima cumque incidunt eum, iusto iure perspiciatis magnam quibusdam facere earum repellat quaerat aliquam doloribus.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;