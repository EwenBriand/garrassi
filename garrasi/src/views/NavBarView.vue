<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ path }}</a>
        <input v-if="isOpen" class="search-box-nav" v-model="research" style="margin-left: 20px;" type="text" placeholder="Start typing...">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" color="white" @click="isOpen = !isOpen" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a :class="changeClass('Q&A')" aria-current="page" :href="getExtentionBaseUrl() + '?Q&A'">Q&A</a>
              </li>
              <li class="nav-item">
                <a :class="changeClass('Tips')" :href="getExtentionBaseUrl() + '?Tips'">Tips</a>
              </li>
              <li class="nav-item">
                  <a :class="changeClass('DiscuChat')" :href="getExtentionBaseUrl() + '?DiscuChat'">DiscuChat</a>
              </li>
              <li class="nav-item">
                <a :class="changeClass('Feedback')" :href="getExtentionBaseUrl() + '?Feedback'">Feedback</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="quit()">Quit</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
  let getPath = () => {
    // debugger
              let tmp = window.location.href.split('?')[1];

              if (tmp === "" || tmp == undefined)
                  tmp = "DiscuChat";
              return tmp;
          }
export default {
  data() {
      return {
        research: '',
        isOpen: false,
        path: getPath()
      }
  },
  methods: {
    quit() {
      this.$emit('quit', true);
    },
    changeClass(channel) {
      if (getPath() === channel)
        return "nav-link active"
      return "nav-link"
    },
    getExtentionBaseUrl() {
        console.log(window.location.href.split('?')[0]);
        return window.location.href.split('?')[0];
    }
  },
  watch: {
    research() {
      this.$emit("research", this.research)
    }
  }
}
</script>
<style>
.search-box-nav::-webkit-input-placeholder {
  font-family: 'Open Sans';
}
.search-box-nav {
  border-radius: 10px;
  height: 25px;
  width: 100px;
}
</style>
