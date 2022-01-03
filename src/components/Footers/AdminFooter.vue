<template>
  <footer class="bg-[#0f4a7b] pt-8 pb-6">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="text-white flex">
          <h4 class="text-3xl header font-semibold">FindJobs</h4>
          <h4 class="text-lg text-white ml-5 mt-1 leading-8">
            © {{ date }} <span class="text-gray-400">FindJobs</span>
          </h4>
          <h4 class="ml-5 text-gray-200 leading-8 mt-1">Terms and Condition</h4>
        </div>
        <div class="text-white">
          <div class="flex justify-center">
            <button
              class="
                bg-white
                text-lightBlue-400
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                social-opacity
              "
              type="button"
            >
              <i class="fab fa-twitter icon-bright"></i>
            </button>
            <button
              class="
                bg-white
                text-lightBlue-600
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                social-opacity
              "
              type="button"
            >
              <i class="fab fa-facebook-square icon-bright"></i>
            </button>
            <button
              class="
                bg-white
                text-pink-400
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                social-opacity
              "
              type="button"
            >
              <i class="fab fa-dribbble icon-bright"></i>
            </button>
            <button
              class="
                bg-white
                text-blueGray-800
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                social-opacity
              "
              type="button"
            >
              <i class="fab fa-github icon-bright"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { MenuIcon } from "@heroicons/vue/solid";
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.text-color {
  color: #0f4a7b;
}
.footer-bg {
  background-color: #0f4a7b;
}
.header {
  transform: matrix(0.99, -0.11, 0.13, 0.99, 0, 0);
  color: #c6e3e8;
}
.social-opacity {
  opacity: 0.38;
}

.icon-bright {
  filter: brightness(2%);
}
</style>
