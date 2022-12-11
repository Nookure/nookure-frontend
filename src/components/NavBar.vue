<template>
    <nav
        class="navbar navbar-expand-lg  blur blur-rounded top-0  z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
        <span class="container-fluid px-0">

            <button class="navbar-toggler shadow-none ms-md-2" type="button" data-bs-toggle="collapse"
            
                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                aria-label="Toggle navigation">
                
                <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </span>
                
            </button>

            <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                <RouterLink class="navbar-brand font-weight-bolder ms-sm-3" to="/" rel="tooltip" title="" data-placement="bottom"
                style="margin-left: 15px;">
                <img src="/src/assets/logo.png" style="width: 38px; margin: -15px; border-radius: 50px;">
            </RouterLink>
                <ul class="navbar-nav navbar-nav-hover mx-auto">
                    <li class="nav-item dropdown dropdown-hover mx-2">
                        <RouterLink role="button" style="text-decoration: none; color: inherit;"
                            class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                            to="/">
                            Home </RouterLink>
                    </li>
                    <li class="nav-item dropdown dropdown-hover mx-2">
                        <RouterLink to="/about" role="button" style="text-decoration: none; color: inherit;"
                            class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                            Second Page
                        </RouterLink>

                    </li>
                </ul>
                <ul class="navbar-nav d-lg-block">
                    <li class="nav-item">
                        <RouterLink class="btn btn-sm w-100 bg-gradient-primary  btn-round mb-0 me-1"
                            style="text-decoration: none; color: inherit;" to="/login">Login</RouterLink>
                    </li>
                </ul>
            </div>
        </span>
    </nav>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavBar",
  components: {
    RouterLink,
  },
};
</script>
<style scoped>
.blur.blur-rounded {
  border-radius: 40px;
}
.navbar {
  /* From https://css.glass */
  background: rgba(45, 45, 45, 0.18);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
nav {
  color: white;
}
a:link {
  text-decoration: none;
}
.nav-item {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
.z-index-3 {
  z-index: 3 !important;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
.end-0 {
  right: 0 !important;
}
.start-0 {
  left: 0 !important;
}
.top-0 {
  top: 0 !important;
}
.position-absolute {
  position: absolute !important;
}
.shadow {
  box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
    0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
:after,
:before {
  box-sizing: border-box;
}
user agent stylesheet nav {
  display: block;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -0.5);
  margin-left: calc(var(--bs-gutter-x) * -0.5);
}
body {
  font-weight: 400;
  line-height: 1.6;
}
body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  line-height: 1.5;
  color: #67748e;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
:root {
  --fc-list-event-dot-width: 10px;
  --fc-list-event-hover-bg-color: #f5f5f5;
}
:root {
  --fc-daygrid-event-dot-width: 8px;
}
:root {
  --bs-blue: #63b3ed;
  --bs-indigo: #596cff;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #f56565;
  --bs-orange: #fd7e14;
  --bs-yellow: #fbd38d;
  --bs-green: #81e6d9;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #cb0c9f;
  --bs-secondary: #8392ab;
  --bs-success: #82d616;
  --bs-info: #17c1e8;
  --bs-warning: #fbcf33;
  --bs-danger: #ea0606;
  --bs-light: #e9ecef;
  --bs-dark: #344767;
  --bs-white: #fff;
  --bs-font-sans-serif: Open Sans;
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.15),
    hsla(0, 0%, 100%, 0)
  );
}
:host,
:root {
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
}
:host,
:root {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Pro";
}
:host,
:root {
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Pro";
}
:host,
:root {
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
}
:host,
:root {
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
}
:host,
:root {
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}
*,
:after,
:before {
  box-sizing: border-box;
}
*,
:after,
:before {
  box-sizing: border-box;
}
::-webkit-scrollbar {
  background-color: inherit;
  width: 16px;
}
::-webkit-scrollbar-track {
  background-color: inherit;
}

</style>
