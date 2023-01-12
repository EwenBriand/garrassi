<template>
  <navbar></navbar>
  <div v-for="user in users" style="margin-top: 80px; margin-bottom: 80px;">
    <div class="container user row">
      <div class="col-1" style="margin: auto; margin-right: 20px; margin-left: -10px;">
        <button id="my-button" style="display:inline-block;" @click="user.fire++"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/></svg></button>
        <p style="display:inline-block;margin-right:10px;">{{ user.fire }}</p>
        <button id="my-button" style="display:inline-block" @click="user.fire--"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snow" viewBox="0 0 16 16"><path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/></svg></button>
      </div>
      <div class="col">
        <div>
          <p class="test" :style="'color: ' + user.color">{{ user.name }} | {{ user.date.getDate() }}/{{ user.date.getMonth() + 1 }}/{{ (user.date.getFullYear()) }}</p>
          <svg v-if="user.fire < -5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle danger" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></svg>
        </div>
        <p style="maxlength: 200px">{{ user.comment }}</p>
      </div>
    </div>
  </div>
  <div class="inputzone">
      <!-- button to send the comment -->
      <button id="sendComment" type="submit" @click="sendComment()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg></button>
      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></button>
      <input class="search-box" type="text" v-model="newComment"  v-on:keyup.enter="pressEnter" placeholder="Your comment"><br><br>
  </div>
</template>
<script>
  import Navbar from "./views/NavBarView.vue";
  // import { Server } from 'socket.io'
  import io from "socket.io-client";


export default{
    components: {
      Navbar,
    },
    props: {
      nameUser: String,
    },
    data() {
      return {
        newComment: '',
        channelName: "",
        count: 0,
        users: [],
        colors: [
          "orange",
          "lime",
          "lawnGreen",
          "cyan",
          "fuchsia",
          "pink"
        ],
        socket: null,
      }
    },
    methods: {
      changeColor() {
        let idColor = Math.floor(Math.random() * this.colors.length);
        return this.colors[idColor];
      },

      sendComment() {
        if (this.newComment.length > 0) {

          this.users.push({
            name: this.nameUser,
            date: new Date(),
            comment: this.newComment,
            fire: 0,
            color: this.changeColor(this.name)
          });
          this.sortUsers();
          this.newComment = '';
        }
      },

      pressEnter() {
        document.getElementById("sendComment").click();
      },

      sortUsers() {
        this.users.sort((a, b) => b.fire - a.fire)
      }
    },
    async created () {
      this.socket = await io().connect("http://localhost:8080");
      // DEFINE EVENT HANDLERS
      this.socket.on("chatContentUpdate", (res) => {console.log("connection success"); this.users = res;});

      console.log(this.socket);
      // INITIALIZATION
      this.socket.emit("loadChannel", {
        url: window.location.href.split('?')[0],
        channel: "discuChat"
      });
      this.sortUsers();
    },
  }
</script>
<style lang="scss">
.search-box {
  margin-bottom: 15px;
  border-radius: 15px;
  height: 45px;
  width: 300px;
}
.danger {
  color: red;
  margin-left: 75px;
}
p {
  color: white;
  font-family: 'Open Sans';
  font-weight: 900;
}
.test {
  text-decoration-line : underline;
  display:inline-block;
  margin-right:10px;
}

.user {
  background-color: grey;
  margin-bottom: 20px;
  border-radius: 20px;
  margin-left: 10px !important;
  max-width: 350px;
}

.inputzone {
  position: fixed;
  bottom: 0;
  background-color: rgb(48, 53, 51);
  width: 100%;
}
</style>
