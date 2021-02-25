import { Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, List, ShowButton, SimpleForm, TextField, TextInput } from 'react-admin';
import React from 'react'

export default (props) => (
    <List {...props}  >
        <Datagrid>
            <TextField source="id" />
            <TextField source="body" />
            <TextField source="postId" />
            <EditButton basePath="/comment" />
            <DeleteButton basePath="/comments" />
            <ShowButton basePath="/comments" />
        </Datagrid>
    </List>
);