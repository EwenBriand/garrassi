<template>
    <div v-if="isHome" class="vertically_centered">
        <div :style="changeMargin()" class="fancy_title">
            <h1 class="main_title"> Hello there! </h1>
            <h1 class="legend">Start with a name!</h1>
        </div>
            <div class="name_input">
                <input class="search-box-home" placeholder="Press enter to come in a new world" type="text" v-model="name" v-on:keyup.enter="pressEnter" maxlength="20">
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
        changeMargin() {
            return "margin-top: 190px"
        },
        pressEnter() {
            if (this.name.length < 2)
                return
            VueCookies.set('name', this.name);
            this.isHome = false;
        },
    },
    created() {
        if (this.name !== null)
        this.isHome = false;
    }
  }
</script>
<style>
.search-box-home::-webkit-input-placeholder {
  font-family: 'Open Sans';
  font-weight: 900;
}
.search-box-home {
  margin-bottom: 15px;
  border-radius: 15px;
  height: 45px;
  width: 300px;
  text-align: center;
}
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
    margin-bottom: 190px;
}

.vertically_centered {
    margin: auto;
}
</style>
