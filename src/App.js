import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import dataProvider1 from './dataProvider';
import ListGuesser from './PostList';
import EditList from './EditList'

function App() {
  return (
    <Admin dataProvider={dataProvider1}>
      <Resource name="user" list={ListGuesser} edit={EditList} />
    </Admin>
  );
}

export default App;
