import { Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, List, SimpleShowLayout, Show, ShowButton, SimpleForm, TextField, TextInput } from 'react-admin';
import React from 'react'

const ShowList = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="email" />
            <TextField source="name" />
            <TextField source="avatar" />
            <TextField source="googleId" />
        </SimpleShowLayout>
    </Show>
)
export default ShowList;