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
          <h2 class="header">FindJobs</h2>
          <h2 class="text-xs text-white ml-9">for employees</h2>
        </router-link>
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
          ></li>
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
            <div class="relative">
              <i class="far fa-bell text-2xl"></i>
              <span class="dot"></span>
            </div>
          </li>
          <li class="flex items-center mr-3">
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
                mr-2
                ease-linear
                transition-all
                duration-150
                flex
                bg-[#ea5566]
              "
              @click="logout()"
            >
              <LogoutIcon
                class="ml-2 h-5 mr-2 w-5 text-white"
                aria-hidden="true"
              />
              Logout
            </button>
          </li>

          <li class="flex items-center">
            <div class="profile"></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";
import { LogoutIcon } from "@heroicons/vue/outline";
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  components: {
    MenuIcon,
    LogoutIcon,
  },
  methods: {
    logout() {
      localStorage.removeItem("isLoggedIn");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.header {
  transform: matrix(0.99, -0.11, 0.13, 0.99, 0, 0);
  color: #c6e3e8;
}
.dot {
  height: 10px;
  width: 10px;
  background-color: #ea5566;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 8%;
  right: 0%;
}
.profile {
  height: 40px;
  width: 40px;
  background-color: #ea5566;
  border-radius: 50%;
}
</style>
