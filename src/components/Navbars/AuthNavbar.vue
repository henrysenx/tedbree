<template>
  <nav
    class="
      top-0
      absolute
      z-50
      w-full
      flex flex-wrap
      items-center
      px-2
      py-3
      navbar-expand-lg
    "
  >
    <div class="flex container px-4 mx-auto items-center justify-between">
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto lg:static lg:block lg:justify-start
        "
      >
        <router-link
          class="
            header
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
          "
          to="/"
        >
          FindJobs</router-link
        >
        <button
          class="
            cursor-pointer
            texl-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
        >
          <MenuIcon class="-mr-1 ml-2 h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
      <div
        class="
          lg:flex
          flex-grow
          items-center
          bg-white
          lg:bg-opacity-0 lg:shadow-none
        "
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li
            class="
              lg:hover:text-blueGray-200
              text-blueGray-700
              px-3
              py-4
              lg:py-2
              flex
              items-center
              text-xs text-white
            "
          >
            Docs
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li
            class="
              lg:hover:text-blueGray-200
              text-blueGray-700
              px-3
              py-4
              lg:py-2
              flex
              items-center
              text-xs text-white
            "
          >
            <a href="">jobs</a>
          </li>
          <li
            class="
              lg:hover:text-blueGray-200
              text-blueGray-700
              px-3
              py-4
              lg:py-2
              flex
              items-center
              text-xs text-white
            "
          >
            <a href="">Company Review</a>
          </li>
          <li
            class="
              lg:hover:text-blueGray-200
              text-blueGray-700
              px-3
              py-4
              lg:py-2
              flex
              items-center
              text-xs text-white
            "
          >
            <a href="">Find Solution</a>
          </li>
          <li class="flex items-center">
            <button
              class="
                text-white
                active:bg-blueGray-50
                text-xs
                font-bold
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                lg:mr-1 lg:mb-0
                ml-3
                mb-3
                ease-linear
                transition-all
                duration-150
                bg-red-500
                flex
              "
              type="button"
              @click="RedirectToLogin()"
            >
              <LoginIcon
                class="ml-2 h-5 mr-2 w-5 text-white"
                aria-hidden="true"
              />
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";
import { LoginIcon } from "@heroicons/vue/outline";
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  components: {
    MenuIcon,
    LoginIcon,
  },
  methods: {
    RedirectToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.header {
  transform: matrix(0.99, -0.11, 0.13, 0.99, 0, 0);
  color: #c6e3e8;
}
</style>
