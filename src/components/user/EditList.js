import { required, Edit, email, minLength, SimpleForm, TextInput } from 'react-admin';
import React from 'react'
const validateEmail = email();
const validateName = [required(), minLength(6)];
const validateAvatar = [required(), minLength(6)];
const validateGoogleId = [required(), minLength(6)];
const EditList = (props) => (
    <Edit title="Edit List" {...props}>
        <SimpleForm >
            <TextInput disabled source="id" />
            <TextInput source="email" validate={validateEmail} />
            <TextInput source="name" validate={validateName} />
            <TextInput source="avatar" validate={validateAvatar} />
            <TextInput source="googleId" validate={validateGoogleId} />

        </SimpleForm>
    </Edit>
)
export default EditList;