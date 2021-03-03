import { useField } from "formik";
import * as CustomStyled from "./FormInput.style";

const FormInput = ( { label, ...props } : any ) => {

    const [field, meta] = useField(props);
    return (
        <>
            <CustomStyled.Label htmlFor={ props.id || props.name}>{ label }</CustomStyled.Label>
            <CustomStyled.Input id={ props.id || props.name } { ...field } { ...props } />
            { meta.touched && meta.error ? <span style={{ fontSize : '0.6rem', color : 'red', textTransform : 'lowercase' }}> { meta.error } </span> : null }
        </>
    )
}

export default FormInput;