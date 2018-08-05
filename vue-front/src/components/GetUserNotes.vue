<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h6>Enter User Name:</h6>
      <input type="text" placeholder="User Name" v-model="username">
      <h6>Enter User Password:</h6>
      <input type="text" placeholder="User Password" v-model="password">
      <br><br>
      <button v-on:click="getNotes"> Get User Notes</button>
      <br><br>
      <span id="error" style="color:red" v-text="error"></span>
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
      error: "",
      notes: ""
    };
  },
  props: {
    msg: String
    //id: String
  },
  methods: {
    getNotes() {
      // alert(this.username);
      // window.console.log(this.username);
      // window.console.log(this.password);

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
        if (typeof(response) === String) {
          window.console.log(response);
          this.error = response;
           window.console.log(this.error)
        } else {
          window.console.log(response);
          this.notes = Array.from(response).join(", ");
          window.console.log(this.notes);
        }
        // window.console.log(response);
        // alert(response);
      });

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
