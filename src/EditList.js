import { Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin';
import React from 'react'

const EditList = (props) => (
    <Edit title="Edit List" {...props}>
        <SimpleForm >
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="author" />
            <TextInput multiline source="body" />
            <DateInput label="Publication date" source="published_at" />

        </SimpleForm>
    </Edit>
)
export default EditList;