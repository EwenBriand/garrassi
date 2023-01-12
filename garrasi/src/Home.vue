<template>
    <div v-if="isHome" class="vertically_centered">
    <div class="fancy_title">
        <h1 class="main_title"> Hello there! </h1>
        <h1 class="legend">Start with a name!</h1>
    </div>
        <div class="name_input">
            <input type="text" v-model="name" maxlength="20">
            <button type="submit" @click="sendComment()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg></button>
        </div>
     </div>
    <div v-else>
        <app :nameUser="name"></app>
    </div>
</template>
<script>

import VueCookies from 'vue-cookies'
import App from "./App.vue";

  export default{
    components: {
      App,
    },
    data() {
        return {
            name: VueCookies.get('name'),
            isHome: true,
        }
    },
    methods: {
        sendComment() {
            if (this.name.length < 2)
                return
            VueCookies.set('name', this.name);
            this.isHome = false;
      }
    },
    created() {
<<<<<<< HEAD
        // if (this.name !== null)
        //     this.isHome = false;
=======
        if (this.name !== null)
            this.isHome = false;
>>>>>>> a06ed930 ([ADD] backend & [MOD] frontend)
    }
  }
</script>

<style>

.legend{
    margin: auto;
    width: 50%;
    position: relative;
    text-align: center;
    color: hsl(0, 100%, 98%);
    font-size: 20px;
    font-weight: bold;
    font-family: "Anonymous Pro", monospace;
    letter-spacing: 7px;
    overflow: hidden;
    border-right: 2px solid hsl(0, 0%, 80%);
    white-space: nowrap;
    animation: typewriter 2s steps(44) 1s 1 normal both,
      blinkTextCursor 500ms infinite;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 320px;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: hsl(0, 0%, 80%);
    }
    to {
      border-right-color: transparent;
    }
  }

.main_title {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 30px;
}

.name_input {
    text-align: center;
    padding-top: 50px;
    margin: auto;
}

.vertically_centered {
    margin: auto;
}

</style>
