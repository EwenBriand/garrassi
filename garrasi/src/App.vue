<template>
  <navbar></navbar>
  <div v-for="user in users" style="margin-top: 80px; margin-bottom: 80px;">
    <div class="container user row">
      <div class="col">
        <p style="display:inline-block;margin-right:10px;">{{ user.fire }}</p>
        <button id="my-button" style="display:inline-block"><i class="fa fa-water"></i></button>
      </div>
      <div class="col-10">
        <div>
          <p class="test">{{ user.name }} | {{ user.date.getDate() }}/{{ user.date.getMonth() }}/{{ (user.date.getFullYear()) }}</p>
        </div>
        <p>{{ user.comment }}</p>
      </div>
    </div>
  </div>
  <div class="inputzone">
    <form action>
      <!-- button to send the comment -->
      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
      </svg></button>
      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg></button>
      <input type="text" id="lname" name="lname" placeholder="Your comment"><br><br>
  </form>
  </div>
</template>
<script>
  import Navbar from "./views/NavBarView.vue";

  export default{
    components: {
      Navbar,
    },
    data() {
      return {
        channelName: "",
        count: 0,
        users: [
          {
            name: "FuzzBear27",
            date: new Date(2022, 2, 20),
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
            date: new Date(2022, 14, 1),
            comment: "u better write ur secrets in a .txt file, it works and is pretty easy! No need for all o zis **** if ur a begginer lol",
            fire: 5
          }
        ]
      }
    },
    methods: {
      plus(nbr) {
        for(let i = 0; i < nbr; i++)
          this.count++;
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