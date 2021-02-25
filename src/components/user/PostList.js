import { Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, List, ShowButton, SimpleForm, TextField, TextInput } from 'react-admin';
import React from 'react'
import PostFilter from './PostFilter'
export default (props) => (
    <List {...props} filters={<PostFilter />} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="email" />
            <TextField source="name" />
            <TextField source="avatar" />
            <TextField source="googleId" />
            <EditButton basePath="/user" />
            <DeleteButton basePath="/user" />
            <ShowButton basePath="/user" />
        </Datagrid>
    </List>
);


