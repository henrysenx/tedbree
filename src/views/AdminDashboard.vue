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
          min-h-full
        "
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover bg-sky-900"
        ></div>
        <div class="container relative mx-auto">
          <div class="flex flex-wrap ml-8">
            <div class="mt-9">
              <h1 class="text-4xl font-bold text-white">Jobs</h1>
            </div>
          </div>
        </div>
      </div>

      <!-- <section class="mt-6">
        <div class="container mx-auto px-4 flex justify-between">
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
            <h3>Hello1</h3>
          </div>
          <div>Hello2</div>
        </div>
      </section> -->
    </main>
    <section class="flex-grow">
      <section>
        <div class="container mx-auto mt-8 -mb-5">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div
                class="
                  relative
                  min-w-0
                  break-words
                  bg-white
                  w-3/4
                  shadow-lg
                  rounded-lg
                  py-5
                  px-2
                "
              >
                <div class="flex justify-between w-full">
                  <div class="text-left flex align-middle mt-3">
                    <SearchIcon
                      class="ml-2 h-4 mr-2 w-4 icon-color"
                      aria-hidden="true"
                    />
                    <h2 class="text-sm">Front End Developer</h2>
                  </div>
                  <div class="mt-2">
                    <button
                      class="
                        search-btn
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
                      "
                      type="button"
                    >
                      Post Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-end">
              <div class="mt-8">
                <button
                  class="
                    search-btn
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
                    flex
                  "
                  type="button"
                  @click="toggleCreationModal()"
                >
                  <PlusIcon
                    class="ml-2 h-4 mr-2 w-4 text-white"
                    aria-hidden="true"
                  />
                  New Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full text-center">
              <div
                class="
                  relative
                  min-w-0
                  break-words
                  cardbg-color
                  w-full
                  shadow-lg
                  rounded-lg
                  py-5
                "
              >
                <div class="flex justify-between text-white">
                  <div class="flex justify-between px-2 w-3/5">
                    <div class="w-full">
                      <h2>Job Title</h2>
                    </div>
                    <div class="w-full"><h2 class="">Date Modified</h2></div>
                    <div class="w-full"><h2>Candidates</h2></div>
                  </div>
                  <div class="flex justify-between px-2 w-2/5">
                    <div class="w-full">
                      <button>Edit</button>
                    </div>
                    <div class="w-full">
                      <div class="flex justify-end mr-7">
                        <h2>Filter</h2>
                        <FilterIcon
                          class="ml-2 h-4 mr-2 w-4 mt-1 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-for="job in myJobs" :key="job.id">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full text-center">
              <div
                class="
                  relative
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  shadow-lg
                  mb-1
                  rounded-lg
                  py-5
                "
              >
                <div class="flex justify-between">
                  <div class="flex justify-between w-3/5">
                    <div class="w-full flex ml-7">
                      <span class="dot mt-2 mr-8"></span>
                      <h2>{{ job.title }}</h2>
                    </div>
                    <div class="w-full">
                      <h2 class="">
                        {{ $moment(job.updated_at).format("Do MMMM, YYYY") }}
                      </h2>
                    </div>
                    <div class="w-full"><h2>Candidates</h2></div>
                  </div>
                  <div class="flex justify-between px-2 w-2/5">
                    <div class="w-full">
                      <button
                        class="
                          search-btn
                          text-white
                          active:bg-blueGray-50
                          text-xs
                          font-bold
                          px-10
                          py-3
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
                        "
                      >
                        Edit
                      </button>
                    </div>
                    <div class="w-full">
                      <div class="flex justify-end mr-7">
                        <button
                          class="
                            text-[#62BECB]
                            active:bg-blueGray-50
                            text-xs
                            font-bold
                            px-10
                            py-3
                            rounded
                            shadow
                            border border-[#62BECB]
                            hover:shadow-md
                            outline-none
                            focus:outline-none
                            lg:mr-1 lg:mb-0
                            ml-3
                            mb-3
                            ease-linear
                            transition-all
                            duration-150
                          "
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="app" class="bg-gray-100">
          <div class="max-w-lg mx-auto my-8">
            <Pagination
              :total-pages="data.totalPages"
              :total="data.total"
              :per-page="data.perPage"
              :current-page="data.currentPage"
              :has-more-pages="data.hasMorePages"
              @pagechanged="showMore"
            />
          </div>
        </div>
      </section>
    </section>
    <Footer />
  </div>
  <JobCreationForm
    v-show="showCreationModal"
    :show="showCreationModal"
    @close="toggleCreationModal()"
    @addJob="addJob"
  />
</template>

<script>
import Navbar from "../components/Navbars/AdminNavbar.vue";
import Footer from "../components/Footers/AdminFooter.vue";
import { SearchIcon } from "@heroicons/vue/solid";
import {
  LocationMarkerIcon,
  PlusIcon,
  FilterIcon,
} from "@heroicons/vue/outline";
import JobCreationForm from "../components/Modals/JobCreationForm.vue";
import axios from "axios";
import Pagination from "../components/Pagination.vue";

export default {
  name: "AdminDashboard",
  components: {
    Navbar,
    Footer,
    SearchIcon,
    LocationMarkerIcon,
    PlusIcon,
    FilterIcon,
    JobCreationForm,
    Pagination,
  },
  data() {
    return {
      showCreationModal: false,
      myJobs: [],
      data: {
        page: 1,
        totalPages: 4,
        total: 40,
        perPage: 10,
        currentPage: 1,
        hasMorePages: true,
      },
    };
  },
  methods: {
    toggleCreationModal() {
      this.showCreationModal = !this.showCreationModal;
    },
    fetchMyJobs() {
      axios.get(`my/jobs`).then((response) => {
        console.log(response.data);
        this.myJobs = response.data.data;
      });
    },
    addJob(job) {
      console.log(job);
      this.myJobs.push(job);
    },
    showMore(page) {
      this.data.page = page;
      this.data.currentPage = page;
    },
  },
  mounted() {
    this.fetchMyJobs();
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
.dot {
  height: 10px;
  width: 10px;
  background-color: #ea5566;
  border-radius: 50%;
  display: inline-block;
}
</style>
