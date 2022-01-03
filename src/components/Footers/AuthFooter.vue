<template>
  <footer class="bg-[#0f4a7b] pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl header mb-7 font-semibold">FindJobs</h4>
          <h5 class="text-lg mt-0 mb-2 text-white">
            © {{ date }} <span class="text-gray-300">FindJobs</span>
          </h5>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block text-white text-sm font-semibold mb-2">
                Quick Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="
                      text-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="https://www.creative-tim.com/presentation?ref=vn-footer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="
                      text-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="https://blog.creative-tim.com?ref=vn-footer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    class="
                      text-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="https://www.github.com/creativetimofficial?ref=vn-footer"
                  >
                    Calender
                  </a>
                </li>
                <li>
                  <a
                    class="
                      text-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span class="block text-white text-sm font-semibold mb-2">
                Quick Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="
                      text-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="
                      text-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="https://creative-tim.com/terms?ref=vn-footer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    class="
                      ttext-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm text-white
                    "
                    href="https://creative-tim.com/privacy?ref=vn-footer"
                  >
                    Calender
                  </a>
                </li>
                <li>
                  <a
                    class="
                      text-white
                      hover:text-blueGray-800
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="https://creative-tim.com/contact-us?ref=vn-footer"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 -mt-1">
              <span class="block text-gray-400 text-sm font-semibold mb-2"
                >Social Media</span
              >
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
                  "
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
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
                  "
                  type="button"
                >
                  <i class="fab fa-facebook-square"></i>
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
                  "
                  type="button"
                >
                  <i class="fab fa-dribbble"></i>
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
                  "
                  type="button"
                >
                  <i class="fab fa-github"></i></button
                >>
              </div>
            </div>
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
</style>
