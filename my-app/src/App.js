import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web programming
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactx
        </a>
      </header>
    </div>
  );
}

function login(){
  // handle user login and authorization and authentication
}

function create_new_note(){
  // endpoint /notes/new
  // for creating a new note 
}

function get_note(id){
  // endpoint /notes/<note_id>
  // get a note by id
}

function update_note(id){
  // endpoint /notes/<note_id>
  // update a note 
}

function delete_note(id){
  // endpoint /notes/<note_id>
  // delete a note
}

export default App;
