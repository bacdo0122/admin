import { Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, Filter, List, SearchInput, ShowButton, SimpleForm, TextField, TextInput } from 'react-admin';
import React from 'react'

const PostFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <TextInput label="email" source="email" />
        <TextInput label="name" source="name" />
        <TextInput label="avatar" source="avatar" />
        <TextInput label="googleId" source="googleId" />
    </Filter>
)
export default PostFilter;