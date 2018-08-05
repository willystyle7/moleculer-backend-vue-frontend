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
//const axios = require("axios");

export default {
  name: "GetUserNotes",
  data() {
    return {
      username: "",
      password: "",
      error: "1",
      notes: "2"
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
      // alert(this.username);
      // window.console.log(this.username);
      // window.console.log(this.password);

      //#4 variant jQuery Ajax
      // let url = `http://192.168.1.2:3000/api/notes/getnotes?username=${
      //   this.username
      // }&password=${this.password}`;
      // $.get(url, function(data, status) {
      //   alert("Data: " + data + "\nStatus: " + status);
      // });

      //#3 variant XMLHttpRequest
      let url = `http://192.168.1.2:3000/api/notes/getnotes?username=${
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
      client.get(url, function(response) {
        // do something with response
        if (typeof response === String) {
          window.console.log(response);
          this.error = "error";
          //window.console.log(this.error);
          //let errEl = this.document.getElementById("error");
          //errEl.textContent = "error";
        } else {
          window.console.log(response);
          this.notes = "notes";

          //window.console.log(this.notes);
          // let notesEl = this.document.getElementById("resultNotes");
          // notesEl.textContent = "notes";
          // let errEl = this.document.getElementById("error");
          // errEl.textContent = "";
        }
      });

      //#2 variant fetch
      // const testURL = `http://192.168.1.2:3000/api/notes/getnotes?username=${
      //   this.username
      // }&password=${this.password}`;
      // const myInit = {
      //   method: "GET",
      //   mode: "no-cors",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
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
      // let url = `http://192.168.1.2:3000/api/notes/getnotes?username=${this.username}&password=${this.password}`;
      // axios
      //   .get(url)
      //   .then(function(response) {
      //     // handle success
      //     window.console.log(response);
      //   });

      //alert(this.password);
      //return;
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
</style>
