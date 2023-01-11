<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{{ path }}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" :href="getExtentionBaseUrl() + '?Q&A'">Q&A</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :href="getExtentionBaseUrl() + '?Tips'">Tips</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="getExtentionBaseUrl() + '?DiscuChat'">DiscuChat</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link" :href="getExtentionBaseUrl() + '?Tips'">Feedback</a>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
    let getPath = () => {
                let tmp = window.location.href.split('?')[1];

                if (tmp === "" || tmp == undefined)
                    tmp = "Q&A";
                return tmp;
            }
export default {
    data() {
        return {
            path: getPath()
        }
    },
    methods: {
        getExtentionBaseUrl() {
            console.log(window.location.href.split('?')[0]);
            return window.location.href.split('?')[0];
        }
    }
}
</script>