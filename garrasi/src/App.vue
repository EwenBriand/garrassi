<template>
  <navbar></navbar>
  <div v-for="user in users" style="margin-top: 80px; margin-bottom: 80px;">
    <div class="container user row">
      <div class="col-1" style="margin: auto;">
        <button id="my-button" style="display:inline-block;" @click="user.fire++"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/></svg></button>
        <p style="display:inline-block;margin-right:10px;">{{ user.fire }}</p>
        <button id="my-button" style="display:inline-block" @click="user.fire--"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snow" viewBox="0 0 16 16"><path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/></svg></button>
      </div>
      <div class="col">
        <div>
          <p class="test">{{ user.name }} | {{ user.date.getDate() }}/{{ user.date.getMonth() + 1 }}/{{ (user.date.getFullYear()) }}</p>
        </div>
        <p>{{ user.comment }}</p>
      </div>
    </div>
  </div>
  <div class="inputzone">
      <!-- button to send the comment -->
      <button type="submit" @click="sendComment()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg></button>
      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></button>
      <input type="text" v-model="newComment" placeholder="Your comment"><br><br>
  </div>
</template>
<script>
  import Navbar from "./views/NavBarView.vue";

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
        users: [
          {
            name: "FuzzBear27",
            date: new Date(2022, 1, 20),
            comment: "If step 1 is not clear to you, go see LoremIpsum's channel on youtube. He explains it very well.",
            fire: -5
          },
          {
            name: "Kleinefrustuck",
            date: new Date(2022, 1, 15),
            comment: "Instead of doing this manually, you can use \"dolorsiamet\" its a vscode plugin that sets everything up from a GUI interface. It is very well explained and you are sure not to be missing any steps.",
            fire: 10
          },
          {
            name: "WishLorraine",
            date: new Date(2022, 1, 14),
            comment: "u better write ur secrets in a .txt file, it works and is pretty easy! No need for all o zis **** if ur a begginer lol",
            fire: 5
          }
        ]
      }
    },
    methods: {
      sendComment() {
        if (this.newComment.length > 0) {
          this.users.push({
            name: this.nameUser,
            date: new Date(),
            comment: this.newComment,
            fire: 0
          });
          console.log(this.users)
          this.newComment = '';
        }
      }
    }
  }
</script>
<style lang="scss">

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
  max-width: 300px;
}

.inputzone {
  position: fixed;
  bottom: 0;
  background-color: rgb(29, 28, 28);
  width: 100%;
}
</style>