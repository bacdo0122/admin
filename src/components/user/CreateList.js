import { required, Create, email, minLength, SimpleForm, TextInput } from 'react-admin';
import React from 'react'

const validateEmail = email();
const validateName = [required(), minLength(6)];
const validateAvatar = [required(), minLength(6)];
const validateGoogleId = [required(), minLength(6)];
const CreateList = (props) => (
    <Create title="Create a List" {...props}>
        <SimpleForm >

            <TextInput source="email" validate={validateEmail} />
            <TextInput source="name" validate={validateName} />
            <TextInput source="avatar" validate={validateAvatar} />
            <TextInput source="googleId" validate={validateGoogleId} />

        </SimpleForm>
    </Create>
)
export default CreateList;