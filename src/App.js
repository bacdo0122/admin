import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import ListProvider from './dataProvider'
import ListGuesser from './components/user/PostList';
import EditList from './components/user/EditList'
import CreateList from './components/user/CreateList';
import ShowList from './components/user/ShowList'
import List from 'ra-data-json-server'
import ListComment from './components/comment/ListComment';

function App() {
  console.log(List('https://601bf31d1a9c22001705ffec.mockapi.io/example/project'));
  return (

    <>
      <Admin dataProvider={ListProvider}

      >
        <Resource name="user" list={ListGuesser} edit={EditList} create={CreateList} show={ShowList} />


      </Admin>

    </>
  );
}

export default App;
