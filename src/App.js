import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import $ from 'jquery';
import './App.css';
function App() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(async () => {
    const response = await fetch("https://reqres.in/api/users?delay=3");
    const info = await response.json();
    setDetails(info.data);
    setLoading(false);
  }, []);

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#userinfo__id p").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  return (
    <div className="app">
      {loading ?
        <div className="loader__container">
          <h1 className="preloader__text">Loading</h1>
          <div className="loader">

          </div>
        </div>
        :
        <div className="container">
         <div className="user__headline">
           <h1>User Data</h1>
         </div>
          <input type="text" className="form-control search__input" id="myInput" placeholder="search here" />
          <div className="container">
            {details.map((user) => (
              <div className ="simple__user" id = "userinfo__id">
                <p>First Name: {user.first_name}</p>
              </div>
            ))};
          </div>
        </div>
      }
    </div>
  );
}

export default App;
