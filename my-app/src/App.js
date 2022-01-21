import logo from './logo.svg';
import './App.css';

<html>
  <head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </link>
</head>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
</html>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web programming
        </p>
        
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
