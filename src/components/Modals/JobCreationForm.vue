<template>
  <div class="pt-10">
    <div
      v-if="show"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
      "
    >
      <div class="relative w-2/5 mt-28 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            mt-8
            mb-6
          "
        >
          <!--header-->
          <div class="flex items-start justify-between pt-12 px-6 rounded-t">
            <div>
              <h3
                class="
                  text-xl
                  font-semibold
                  flex flex-col
                  justify-start
                  text-[#0F4A7B]
                "
              >
                New job
              </h3>
            </div>
            <button
              class="
                p-1
                ml-auto
                bg-transparent
                border-0
                text-black
                float-right
                text-3xl
                leading-none
                font-semibold
                outline-none
                focus:outline-none
              "
              @click="handleClose()"
            >
              <span
                class="
                  bg-transparent
                  text-black
                  h-6
                  w-6
                  text-2xl
                  block
                  outline-none
                  focus:outline-none
                "
              >
                ×
              </span>
            </button>
          </div>
          <div class="text-left pl-6">
            <h2 class="text-xs text-[#3E3E40]">
              Kindly provide the required information to get matched with
              suitable candidates
            </h2>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <div class="mb-4 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Job Title</label
              >
              <input
                type="text"
                placeholder="Placeholder"
                class="
                  px-3
                  py-3
                  placeholder-blueGray-300
                  text-blueGray-600
                  relative
                  bg-white
                  rounded
                  text-sm
                  border-[#0F4A7B]
                  shadow
                  outline-none
                  w-full
                  border-2
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                v-model="newJob.title"
              />
            </div>
            <div class="mb-4 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Company Name</label
              >
              <input
                type="text"
                placeholder="Placeholder"
                class="
                  px-3
                  py-3
                  placeholder-blueGray-300
                  text-blueGray-600
                  relative
                  bg-white
                  rounded
                  text-sm
                  border-[#0F4A7B]
                  shadow
                  outline-none
                  w-full
                  border-2
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                v-model="newJob.companyName"
              />
            </div>
            <div class="mb-4 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Location</label
              >
              <input
                type="text"
                placeholder="Placeholder"
                class="
                  px-3
                  py-3
                  placeholder-blueGray-300
                  text-blueGray-600
                  relative
                  bg-white
                  rounded
                  text-sm
                  border-[#0F4A7B]
                  shadow
                  outline-none
                  w-full
                  border-2
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                v-model="newJob.location"
              />
            </div>
            <div class="mb-5 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >What type of employement is it?</label
              >
              <select
                class="
                  form-select form-select-lg
                  mb-3
                  appearance-none
                  block
                  w-full
                  px-3
                  py-3
                  text-sm
                  font-normal
                  text-blueGray-600
                  placeholder-blueGray-300
                  bg-white bg-clip-padding bg-no-repeat
                  border-[#0F4A7B]
                  rounded
                  transition
                  ease-in-out
                  m-0
                  border-2
                  shadow
                  outline-none
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                v-model="newJob.type"
                aria-label=".form-select-lg example"
              >
                <option selected disabled>Select Option</option>
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
                <option value="3">Internship</option>
                <option value="3">Contract</option>
              </select>
            </div>
            <div class="mb-5 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Salary Range</label
              >
              <input
                type="text"
                placeholder="Placeholder"
                class="
                  px-3
                  py-3
                  placeholder-blueGray-300
                  text-blueGray-600
                  relative
                  bg-white
                  rounded
                  text-sm
                  border-[#0F4A7B]
                  shadow
                  outline-none
                  w-full
                  border-2
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                v-model="newJob.salary"
              />
            </div>

            <div class="mb-5 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Submission Deadline</label
              >
              <DatePicker
                class="inline-block h-full w-full"
                color="green"
                v-model="newJob.updated_at"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <div class="flex items-center w-full">
                    <button
                      class="
                        px-4
                        py-4
                        bg-blue-100
                        border border-[#0F4A7B]
                        shadow
                        hover:bg-blue-200
                        text-green-600
                        rounded-l
                        focus:bg-green-500
                        focus:text-white
                        focus:border-green-500
                        focus:outline-none
                        w-auto
                      "
                      @click="togglePopover()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        class="w-4 h-4 fill-current"
                      >
                        <path
                          d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                        ></path>
                      </svg>
                    </button>
                    <input
                      :value="inputValue"
                      class="
                        bg-white
                        text-gray-700
                        w-full
                        px-3
                        py-3
                        appearance-none
                        border border-[#0F4A7B]
                        shadow
                        rounded-r
                        focus:outline-none focus:border-blue-500
                      "
                      readonly
                    />
                  </div>
                </template>
              </DatePicker>
            </div>

            <div class="mb-5 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >What Sector is this job categorized under?</label
              >
              <select
                class="
                  form-select form-select-lg
                  mb-3
                  appearance-none
                  block
                  w-full
                  px-3
                  py-3
                  text-sm
                  font-normal
                  text-blueGray-600
                  placeholder-blueGray-300
                  bg-white bg-clip-padding bg-no-repeat
                  border-[#0F4A7B]
                  rounded
                  transition
                  ease-in-out
                  m-0
                  border-2
                  shadow
                  outline-none
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                v-model="newJob.category"
                aria-label=".form-select-lg example"
              >
                <option selected disabled>Select Option</option>
                <option value="1">Tech</option>
                <option value="2">E-commerce</option>
                <option value="3">Banking</option>
              </select>
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center px-6 mb-3 rounded-b">
            <button
              class="
                text-white
                bg-[#0F4A7B]
                hover:bg-blue-500 hover:text-white
                active:bg-green-600
                text-sm
                px-6
                py-3
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
                w-full
              "
              type="button"
              @click="submit()"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { LocationMarkerIcon, CloudDownloadIcon } from "@heroicons/vue/outline";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "regular-modal",
  props: {
    show: Boolean,
  },
  components: {
    LocationMarkerIcon,
    CloudDownloadIcon,
  },
  data() {
    return {
      showModal: false,
      newJob: {
        id: null,
        title: null,
        companyName: null,
        location: null,
        type: null,
        salary: null,
        updated_at: null,
        category: null,
      },
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    handleClose() {
      this.$emit("close");
    },
    resetData() {
      (this.newJob.title = ""),
        (this.newJob.companyName = ""),
        (this.newJob.location = ""),
        (this.newJob.type = ""),
        (this.newJob.salary = ""),
        (this.newJob.updated_at = ""),
        (this.newJob.category = "");
    },
    submit() {
      // console.log(this.newJob);
      const data = {
        id: uuidv4(),
        title: this.newJob.title,
        companyName: this.newJob.companyName,
        location: this.newJob.location,
        type: this.newJob.type,
        salary: this.newJob.salary,
        updated_at: this.newJob.updated_at,
        category: this.newJob.category,
      };
      // console.log(data);
      this.$emit("addJob", data);
      this.resetData();
      this.handleClose();
    },
  },
};
</script>
