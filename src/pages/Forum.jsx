import React, { useState } from 'react';
import './News.css';
import New_topico from './New_topico.jsx';
import Button from '../components/Button.jsx';

export const Forum = () => {
    return (
        <div className="holder" style={{marginTop: '40px'}}>
            <Button conteudo={<New_topico />} title="Criar um novo tópico" desc="Lorem ipsum dolor sit amet."></Button>
        </div>
    )
}