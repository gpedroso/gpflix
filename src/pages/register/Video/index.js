import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/Index';

function RegisterVideo() {
    return (
        <>
            <PageDefault>
                <h1>Cadastro de Vídeo</h1> 
                <Link to="/register/Category">
                    Cadastrar Catgoria
                </Link>
            </PageDefault>

        </>
    )
}

export default RegisterVideo;