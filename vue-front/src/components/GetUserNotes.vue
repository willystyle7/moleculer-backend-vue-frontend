<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <span>Enter User Name: </span>
      <input type="text" placeholder="User Name" v-model="username">
      <br><br>
      <span>Enter User Password: </span>      
      <input type="text" placeholder="User Password" v-model="password">
      <br><br>
      <button v-on:click="getNotes"> Get User Notes</button>
      <br><br>
      <span id="error" v-text="error"></span>
      <p id="resultNotes" v-text="notes"></p>
    </div>    
  </div>
</template>

<script>
//need for #4
import JQuery from "jquery";
const $ = JQuery;

//need for #1
const axios = require("axios");

export default {
  name: "GetUserNotes",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      notes: ""
    };
  },
  props: {
    msg: String
  },
  // computed: {
  //   error: "1",
  //   notes: "2"
  // },
  methods: {
    getNotes() {      

      //#4 variant jQuery Ajax
      // let url = `http://localhost:3000/api/notes/getnotes?username=${this.username}&password=${this.password}`;
      // $.get(url, function(data, status) {
      //   alert("Data: " + data + "\nStatus: " + status);
      // });

      //#3 variant XMLHttpRequest
      let url = `http://localhost:3000/api/notes/getnotes?username=${
        this.username
      }&password=${this.password}`;
      var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
          var anHttpRequest = new XMLHttpRequest();
          anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
              aCallback(anHttpRequest.responseText);
          };

          anHttpRequest.open("GET", aUrl, true);
          anHttpRequest.send(null);
        };
      };
      var client = new HttpClient();
      client.get(url, (response) => {
        // do something with response
        let resp = JSON.parse(response);
        if (resp.toString() === "wrong username or password") {
          window.console.log(resp);
          this.error = "wrong username or password";
          this.notes = "";  
        } else {
          window.console.log(resp);
          this.error = "";
          this.notes = resp.join(', ');          
        }
      });

      // //#2 variant fetch
      // const testURL = `http://localhost:3000/api/notes/getnotes?username=${
      //   this.username
      // }&password=${this.password}`;
      // const myInit = {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json"
      //   },
      //   withCredentials: false
      // };
      // const myRequest = new Request(testURL, myInit);
      // fetch(myRequest)
      //   .then(function(response) {
      //     return response.json();
      //   })
      //   .then(function(data) {
      //     alert(data);
      //     window.console.log("OK");
      //     window.console.log(data);
      //   })
      //   .catch(function(e) {
      //     alert(e);
      //   });

      //#1 variant axios
      // let url = `http://localhost:3000/api/notes/getnotes?username=${this.username}&password=${this.password}`;     
      // axios
      //   .get(url)
      //   .then(function(response) {
      //     // handle success
      //     window.console.log(response.data);
      //     window.console.log(response.status);
      //     alert(response.data);
      //   });
      // return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#error {
  color: red;
}
</style>
