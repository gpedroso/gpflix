import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault/Index';

function RegisterCategory() {

    const initialValues = {
        name: '',
        description: '',
        color: '#000',
    }

    const [categoryValues, setCategoryValues] = useState(initialValues);
    const [categories, setCategory] = useState([]);

    function setValue(key, value){
        setCategoryValues({
            ...categoryValues,
            [key]: value,
        })

    }

    function handleChange(eventInfo){
        setValue(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value
        );
    }

    return (
            <PageDefault>
                <h1>Cadastro de Categoria: {categoryValues.name}</h1> 

                <form onSubmit={function handleSubmit(eventInfos){
                    eventInfos.preventDefault();  

                    setCategory([
                        ...categories,
                        categoryValues
                    ]);              
                    
                    setValue(initialValues);
                }}>

                    <FormField 
                        label='Nome da categoria'
                        type="text"
                        name="name"
                        value={categoryValues.name}
                        onChange={handleChange}
                    />

                    <FormField 
                        label='Descrição'
                        type="text"
                        name="description"
                        value={categoryValues.description}
                        onChange={handleChange}
                    />
                                        
                    <FormField
                        label='Cor'
                        type="color"
                        name="color"
                        value={categoryValues.color}
                        onChange={handleChange}

                    />

                    
                    <button>
                        Cadastrar
                    </button>
                </form>

                <ul>
                    {categories.map((category, index) => {
                        return (
                            <li key={index}>
                                {category.name}
                            </li> 
                        )
                    })
                    
                    }
                </ul>


                <Link to="/">
                    Ir para home
                </Link>
            </PageDefault>
    )
}

export default RegisterCategory;