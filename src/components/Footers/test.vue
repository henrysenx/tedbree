<template>
  <footer class="relative bg-[#0f4a7b] pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl text-white font-semibold">FindJobs</h4>
          <h5 class="text-lg mt-0 mb-2 text-white">
            © {{ date }} <span class="text-gray-300">FindJobs</span>
          </h5>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-white text-sm font-semibold mb-2"
              >
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
              <span
                class="block uppercase text-white text-sm font-semibold mb-2"
              >
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
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <h1 class="text-red-500">Hello</h1>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
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
</style>
