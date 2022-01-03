<template>
  <div class="h-screen flex flex-col">
    <navbar />
    <main>
      <div
        class="
          relative
          pt-16
          pb-32
          flex
          content-center
          justify-center
          min-h-screen-30
        "
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover bg-sky-900"
        ></div>
        <div class="container relative mx-auto">
          <div class="flex flex-wrap ml-8">
            <div class="mt-9">
              <h1 class="text-4xl font-bold text-white">Find Your Dream Job</h1>
            </div>
          </div>
        </div>
        <!-- <div
          class="
            top-auto
            bottom-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            h-70-px
          "
          style="transform: translateZ(0)"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> -->
      </div>
      <section class="pb-20 -mt-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full px-4 text-center">
              <div
                class="
                  relative
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                  py-5
                  px-2
                  grid grid-cols-2
                  divide-x
                "
              >
                <div class="text-left flex align-middle mt-2">
                  <!-- <SearchIcon
                    class="ml-2 h-4 mr-2 w-4 icon-color"
                    aria-hidden="true"
                  />
                  <h2 class="text-sm">Front End Developer</h2> -->
                  <div class="relative flex w-full flex-wrap items-stretch">
                    <span
                      class="
                        z-10
                        h-full
                        leading-snug
                        font-normal
                        absolute
                        text-center text-blueGray-300
                        bg-transparent
                        rounded
                        text-base
                        items-center
                        justify-center
                        w-8
                        pl-3
                        py-3
                      "
                    >
                      <i class="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Search here..."
                      class="
                        border-0
                        px-3
                        py-3
                        placeholder-blueGray-300
                        text-blueGray-600
                        relative
                        bg-white
                        rounded
                        text-sm
                        shadow
                        outline-none
                        focus:outline-none focus:ring
                        w-3/4
                        pl-10
                      "
                    />
                  </div>
                </div>
                <div
                  class="text-left px-2 mt-2 flex align-middle justify-between"
                >
                  <div class="flex leading-6 mt-2">
                    <LocationMarkerIcon
                      class="ml-2 h-4 mr-2 w-4 icon-color"
                      aria-hidden="true"
                    />
                    <h2 class="text-sm">Lagos, Nigeria</h2>
                  </div>
                  <button
                    class="
                      search-btn
                      text-white
                      active:bg-blueGray-50
                      text-xs
                      font-bold
                      px-2
                      py-1
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
                      w-2/6
                    "
                    type="button"
                  >
                    Post Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <section class="flex-grow">
      <section>
        <div class="container mx-auto">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div class="w-full flex justify-between">
                <h1>Showing {{ jobs.length }} results</h1>
                <div class="flex">
                  <span class="text-gray-400 mr-1">Sort by:</span>
                  <span>Latest</span>
                </div>
              </div>

              <template v-for="job in jobs" :key="job.id">
                <div class="mt-3">
                  <div
                    class="
                      relative
                      min-w-0
                      break-words
                      w-full
                      mb-8
                      shadow-lg
                      rounded-lg
                      py-8
                      px-8
                      hover:border
                      border-[#0f4a7b]
                      text-color
                    "
                    :class="{ dynamicBg: jobId === job.id }"
                    @click="getJob(job.id)"
                  >
                    <div class="flex justify-between px-2">
                      <div class="text-left">
                        <h1 class="font-semibold">
                          {{ job.title }}
                        </h1>
                        <span class="flex text-left">
                          <LocationMarkerIcon
                            class="h-4 mr-2 w-4 icon-color mt-1"
                            aria-hidden="true"
                          />
                          <p class="text-sm">
                            {{ job.location }}
                          </p></span
                        >
                      </div>
                      <h1 class="text-2xl">{{ job.salary }}</h1>
                    </div>
                    <p class="text-left text-xs mt-3">
                      {{ job.description }}
                    </p>
                    <div class="text-right">
                      <button
                        class="
                          search-btn
                          text-white
                          active:bg-blueGray-50
                          text-xs
                          font-bold
                          px-4
                          py-2
                          rounded-lg
                          shadow
                          hover:shadow-md
                          outline-none
                          focus:outline-none
                          lg:mr-1 lg:mb-0
                          ml-3
                          mb-3
                          mt-4
                          ease-linear
                          transition-all
                          duration-150
                        "
                        type="button"
                      >
                        Post Job
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="w-full ml-8 mt-7" v>
              <div
                class="
                  relative
                  min-w-0
                  break-words
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                  py-8
                  px-8
                "
                v-show="showDetail"
              >
                <div class="text-left">
                  <h2>{{ job.title }}</h2>
                  <span class="flex text-left">
                    <LocationMarkerIcon
                      class="h-4 mr-2 w-4 icon-color mt-1"
                      aria-hidden="true"
                    />
                    <p class="text-sm sub-text">{{ job.location }}</p></span
                  >
                  <div class="text-left">
                    <button
                      class="
                        cardbg-color
                        text-gray-300
                        active:bg-blueGray-50
                        text-xs
                        font-bold
                        px-4
                        py-3
                        rounded-lg
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        lg:mr-1 lg:mb-0
                        mb-8
                        mt-4
                        ease-linear
                        transition-all
                        duration-150
                        w-1/2
                      "
                      type="button"
                      @click="toggleApplicationModal()"
                    >
                      Apply Via Find Jobs
                    </button>
                  </div>
                </div>
                <hr class="my-8 border-blueGray-300 w-full" />

                <div class="text-left">
                  <p class="text-xs text-gray-500 leading-8">
                    In this role, you will be responsible for developing and
                    implementing user interface components using React.js
                    concepts and workflow such as Redux, Flux, and Webpack. You
                    will also be responsible for profiling and improving
                    front-end performance and documenting our front-end
                    codebase.
                  </p>
                </div>

                <div
                  class="text-left mt-4 ml-3 text-xs leading-8 text-gray-500"
                >
                  <ul class="list-disc">
                    <li>Minimum Qualification: Degree</li>
                    <li>Experience Level: Senior level</li>
                    <li>Experience Length: 5 years</li>
                  </ul>
                </div>

                <div class="text-left mt-4 font-bold text-sm">
                  <h2>Job Description/Requirementsn</h2>
                </div>

                <div
                  class="text-left mt-4 ml-3 text-xs leading-8 text-gray-500"
                >
                  <ul class="list-disc">
                    <li>
                      5+ years experience of front-end related (HTML5 + JS +
                      CSS3) development work experience, familiar with mobile
                      application development;
                    </li>
                    <li>
                      Proficient in JavaScript / Typescript, mastering
                      technologies such as HTML, CSS, DOM, AJAX, etc., can
                      quickly complete the established interactive design
                      functions; At least 4 years experience is required.
                    </li>
                    <li>
                      Thorough understanding of React.js and its core principles
                    </li>
                    <li>
                      Experience with popular React.js workflows (such as Flux
                      or Redux)
                    </li>
                    <li>Familiarity with RESTful API’s</li>
                    <li>Knowledge of isomorphic react is a plus</li>
                    <li>
                      Familiarity with mordern front-end build pipelines and
                      tools
                    </li>
                    <li>
                      Experience with common front-end development tools such as
                      Babel, Webpack, NPM e.t.c
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mt-12" v-show="!showDetail">
                <h2 class="text-2xl">No Job Selected</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <Footer />
  </div>
  <ApplicationForm
    v-show="showApplicationModal"
    :show="showApplicationModal"
    @close="toggleApplicationModal()"
  />
</template>

<script>
import Navbar from "../components/Navbars/AuthNavbar.vue";
import Footer from "../components/Footers/AuthFooter.vue";
import { SearchIcon } from "@heroicons/vue/solid";
import { LocationMarkerIcon } from "@heroicons/vue/outline";
import ApplicationForm from "../components/Modals/ApplicationForm.vue";
import axios from "axios";

export default {
  components: {
    Navbar,
    Footer,
    SearchIcon,
    LocationMarkerIcon,
    ApplicationForm,
  },
  data() {
    return {
      jobId: null,
      jobs: [],
      job: {},
      showApplicationModal: false,
      showDetail: false,
    };
  },
  methods: {
    fetchJobs() {
      axios.get(`jobs`).then((response) => {
        console.log(response.data);
        this.jobs = response.data.data;
      });
    },
    toggleApplicationModal() {
      this.showApplicationModal = !this.showApplicationModal;
    },
    setJobId(id) {
      this.jobId = id;
      console.log(this.jobId);
    },
    getJob(id) {
      axios.get(`jobs/${id}`).then((response) => {
        console.log(response.data);
        this.setJobId(id),
          (this.showDetail = true),
          (this.job = response.data.data);
      });
    },
  },
  mounted() {
    this.fetchJobs();
  },
};
</script>

<style scoped>
.icon-color {
  color: #62becb;
}
.search-btn {
  background-color: #ea5566;
}
.cardbg-color {
  background-color: #0f4a7b;
}
.text-color {
  color: #0f4a7b;
}
.sub-text {
  color: #3e3e40;
}
.textp-color {
  color: red;
}
.cardx-color {
  color: #ea5566;
}
.dynamicBg {
  background-color: #0f4a7b;
  color: white;
}
</style>
