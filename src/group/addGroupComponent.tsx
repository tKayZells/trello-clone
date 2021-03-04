import { Form, Formik } from "formik";
import InputContainer from "../components/form/container/Container.style";
import FormInput from "../components/form/Input/FormInput";
import InputButton from "../components/form/button/Button.style";
import * as CustomStyles from "./groupComponent.styles";
import INewGroupParams from "./interfaces/INewGroupParams";

interface IAddGroupProps {

    onSubmitHandler : (values : INewGroupParams) => void,
    styles?: React.CSSProperties
}

function AddGroup({ onSubmitHandler, styles, ...props } : IAddGroupProps){

    
    const validate = ( values : INewGroupParams ) => {
        const errors : { [ k : string ] : any } = {};
        
        if(!values.title || values.title.length < 1){
            errors.title = 'Required';
        }
        return errors;
    };


    return (
        <CustomStyles.BgCard style={ styles }>
            <Formik 
                initialValues={{ title : "" }}
                validate={ validate }
                onSubmit={ ( values : INewGroupParams ) => onSubmitHandler(values) }>
                <Form>
                    <CustomStyles.Title color="#969696" style={{ fontWeight: 300 }}>Nuevo Grupo</CustomStyles.Title>
                    <InputContainer>
                        <FormInput label="Nombre" name="title" id="group_title" type="text" />
                    </InputContainer>
                    <InputContainer style={ { marginTop : '1rem'} }>
                        <InputButton type="submit" value="Agregar Grupo" style={ { alignSelf : 'auto'} } />
                    </InputContainer>
                </Form>
            </Formik>
        </CustomStyles.BgCard>
    )
}

export default AddGroup;