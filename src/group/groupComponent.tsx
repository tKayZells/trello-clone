import { Form, Formik } from "formik";
import InputContainer from "../components/form/container/Container.style";
import FormInput from "../components/form/Input/FormInput";
import InputButton from "../components/form/button/Button.style";
import * as CustomStyles from "./groupComponent.styles";

function Group() {

    const tempArr = ( new Array(9) ).fill(0);

    return (
        <>
            <CustomStyles.Card>
                <CustomStyles.Title> Dummyd text</CustomStyles.Title>
                <CustomStyles.Bar type="dashed" />
                <CustomStyles.List>
                    { tempArr.map( (_val, idx) => <li key={idx} >tarea de prueba aca</li> ) }
                </CustomStyles.List>
            </CustomStyles.Card>
            <CustomStyles.BgCard>
                <Formik 
                    initialValues={{ title : "" }}
                    onSubmit={ () => console.log("yay vehveh") }>
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
        </>
    );
}

export default Group;