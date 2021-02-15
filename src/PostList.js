import { Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin';
import React from 'react'

export default (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="avatar" />
            <TextField source="googleId" />
            <DateField source="published_at" />
            <EditButton basePath="/users" />
            <DeleteButton basePath="/users" />
        </Datagrid>
    </List>
);


