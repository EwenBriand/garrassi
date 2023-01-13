<template>
  <navbar @research="getResearch" @quit="quit()"></navbar>
  <div style="margin-top: 60px; margin-bottom: 70px;">
    <!-- <p v-if="allComments[channelName].length == 0" style="margin-left: 135px;" >No Message</p> -->
    <div v-for="(user,index) in allComments[channelName]" style="margin-top: 20px; margin-bottom: 20px;" :key="user">
      <div class="container user row">
        <div class="col-1" style="margin: auto; margin-right: 20px; margin-left: -10px;">
          <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" :color="setColorToFire(index)" @click="addFire(index, user.id)" width="25" height="25" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/></svg>

          <p style="display:inline-block;margin-right:10px;margin-left: 4px;"> {{ user.fire }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block" :color="setColorToSnow(index)" @click="addSnow(index, user.id)" width="25" height="25" fill="currentColor" class="bi bi-snow" viewBox="0 0 16 16"><path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/></svg>
        </div>
        <div class="col">
          <div>
            <p class="test" :style="'color: ' + user.color">{{ user.name }} | {{ user.date }}</p>
            <svg v-if="user.fire < -15" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle danger" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></svg>
          </div>
          <p style="maxlength: 200px">{{ user.comment }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="inputzone">
    <input class="search-box" style="margin-left: 20px;" type="text" v-model="newComment"  v-on:keyup.enter="sendComment()" placeholder="Start typing...">
    <svg xmlns="http://www.w3.org/2000/svg" id="sendComment" @click="sendComment()" style="margin-left: 10px;" width="25" height="25" color="white" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/></svg>
    <br>
  </div>
</template>
<script>
  import Navbar from "./views/NavBarView.vue";
  //import { loadChannel, loadChannelOnce, getChannel, deleteme } from "../background.js"
import { getDatabase, set, onValue, get, child, ref} from "firebase/database";
import { db } from "./main.js"
import { ref as storageRef } from 'firebase/storage';
import getUuid from "uuid-by-string"
  function chatUpdate(snapshot) {
    console.log("snapshot.val: " + snapshot.val());
  }

  function getUniqueId(url) {
    return getUuid(url, 3);
  }

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
        //   {
        //     id: 0,
        //     name: "FuzzBear27",
        //     date: new Date(2022, 1, 20),
        //     comment: "If step 1 is not clear to you, go see LoremIpsum's channel on youtube. He explains it very well.",
        //     fire: -6,
        //     color: "orange",
        //     url: "",
        //     channel: "Q&A",
        //   },
        //   {
        //     id: 1,
        //     name: "Kleinefrustuck",
        //     date: new Date(2022, 1, 15),
        //     comment: "Instead of doing this manually, you can use \"dolorsiamet\" its a vscode plugin that sets everything up from a GUI interface. It is very well explained and you are sure not to be missing any steps.",
        //     fire: 10,
        //     color: "lime",
        //     url: "",
        //     channel: "Q&A",
        //   },
        //   {
        //     id: 2,
        //     name: "WishLorraine",
        //     date: new Date(2022, 1, 14),
        //     comment: "u better write ur secrets in a .txt file, it works and is pretty easy! No need for all o zis **** if ur a begginer lol",
        //     fire: 5,
        //     color: "cyan",
        //     url: "",
        //     channel: "DiscuChat",
        //   }
        ],
        allComments: {"Q&A": [], "Tips": [], "DiscuChat": [], "Feedback": []},
        usersStock: [{}],
        like: [
          {
            id: 0,
            fire: false,
            ice: true,
          },
          {
            id: 1,
            fire: false,
            ice: true,
          },
          {
            id: 2,
            fire: false,
            ice: true,
          },
        ],
        colors: [
          "orange",
          "lime",
          "lawnGreen",
          "cyan",
          "fuchsia",
          "pink"
        ],
        socket: null,
        url : ''
      }
    },
    methods: {
      quit() {
        this.$emit("quit", true)
      },
      getResearch(value) {
        this.users = this.usersStock.filter(user => (user.comment.toLowerCase()).includes(value.toLowerCase()))
      },
      setColorToFire(index) {
        if (this.like[index].fire)
          return "red"
        return "white"
      },
      setColorToSnow(index) {
        if (this.like[index].ice)
          return "blue"
        return "white"
      },
      changeColor(name) {
        let user = this.users.find(user => user.name == name);
        if (user === undefined) {
          let idColor = Math.floor(Math.random() * this.colors.length);
          return this.colors[idColor];
        }
        return user.color;
      },

      sendComment() {
        if (this.newComment.length > 0) {
          var id = this.users.length;
          this.users.push({
            id: id,
            name: this.nameUser,
            date: new Date(),
            comment: this.newComment,
            fire: 0,
            color: this.changeColor(this.nameUser),
            channel: this.channelName
          });
          this.like.push({
            id: id,
            fire: false,
            ice: false,
          });
          this.sortAll();
          this.newComment = '';
          this.usersStock = this.users;
        }
      },
      sortAll() {
        this.sortUsers();
        this.sortLike();
        // chrome.browserAction.setBadgeText({
        //   text: this.users.length.toString()
        // });
      },
      sortLike() {
        this.like = this.like.sort((a, b) => {
          const aIndex = this.users.findIndex(item => item.id === a.id)
          const bIndex = this.users.findIndex(item => item.id === b.id)
          return aIndex - bIndex
        })
      },

      sortUsers() {
        console.log("pipi")
        console.log("coucou", this.users)
        this.users.sort((a, b) => b.fire - a.fire)
        this.users = this.users.filter(user => user.channel === this.channelName)
      },
      addFire(index, id) {
        if (!this.like[index].fire && !this.like[index].ice) {
          this.like[index] = {id: id, fire: true, ice: false}
          this.users[index].fire++;
        } else if (!this.like[index].fire) {
          this.like[index] = {id: id, fire: true, ice: false}
          this.users[index].fire += 2;
        } else {
          this.like[index] = {id: id, fire: false, ice: false}
          this.users[index].fire--;
        }
      },
      addSnow(index, id) {
        if (!this.like[index].ice && !this.like[index].fire) {
          this.like[index] = {id: id, fire: false, ice: true}
          this.users[index].fire--;
        } else if (!this.like[index].ice) {
          this.like[index] = {id: id, fire: false, ice: true}
          this.users[index].fire += -2;
        } else {
          this.like[index] = {id: id, fire: false, ice: false}
          this.users[index].fire++;
        }
      },
      display() {
        console.log(this.channelName)
        let queryOptions = { active: true, lastFocusedWindow: true };
        chrome.tabs.query(queryOptions, ([tab]) => {
          if (chrome.runtime.lastError)
          console.error(chrome.runtime.lastError);
          this.url = tab
        });
        if (this.url === '')
          this.display()
      },
      getPath() {
        this.channelName = window.location.href.split('?')[1];
        if (this.channelName === "" || this.channelName == undefined)
          this.channelName = "DiscuChat";
      },
      putDataInComments(data) {
        try {
          console.log(data)
          for(let i = 0; i < data.length; i++) {
            console.log(data[i])
            this.allComments[data[i].channel].push(data[i]);
          }
          console.log(this.allComments)
        } catch (e) {
          console.log(e)
        }
      }
    },
    async created () {
      // console.log("chat chat chat: " + loadChannel("qna", chatUpdate));
      //loadChannelOnce("qna", "bonjour");
      //deleteme();
      this.getPath()
      console.log("unique id for hello: " + getUniqueId("hello"));
      console.log("db is : " + db);
      const stoRef = ref(db, "website/bonjour/channel/qna")
      await onValue(stoRef, (snapshot) => {
          // const data = snapshot.val();
          debugger
          let data = snapshot.val();
          this.putDataInComments(data)
          console.log(this.users)
      }, (error) => {
          console.log("there has been an error: ", error);
      });
      console.log("created")
    },
  }
</script>
<style lang="scss">

.search-box::-webkit-input-placeholder {
  font-family: 'Open Sans';
  font-weight: 900;
}
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
  background-color: #444141;
  margin-bottom: 20px;
  border-radius: 20px;
  margin-left: 10px !important;
  max-width: 350px;
}

.inputzone {
  position: fixed;
  bottom: 0;
  background-color: #545454;;
  width: 100%;
}
</style>
