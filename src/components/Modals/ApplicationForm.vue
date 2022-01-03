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
            mt-52
            mb-6
          "
        >
          <!--header-->
          <div class="flex items-start justify-between pt-12 px-10 rounded-t">
            <div>
              <h3 class="text-xl font-semibold text-[#0F4A7B]">
                Frontend end developer
              </h3>
              <span class="flex text-left">
                <LocationMarkerIcon
                  class="h-4 mr-2 w-4 text-[#62BECB] mt-1"
                  aria-hidden="true"
                />
                <p class="text-sm sub-text">Yaba, Lagos</p></span
              >
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
          <!--body-->
          <div class="relative p-6 flex-auto">
            <div class="mb-4 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >First Name</label
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
              />
            </div>
            <div class="mb-4 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Last Name</label
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
              />
            </div>
            <div class="mb-4 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Email Address</label
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
              />
            </div>
            <div class="mb-5 pt-0">
              <label class="block text-left mb-2 text-[#0F4A7B]"
                >Phone Number</label
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
              />
            </div>
            <div class="mb-4 pt-0">
              <!-- <textarea
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-4
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-[#0F4A7B]
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
              ></textarea> -->
              <div
                class="
                  w-full
                  px-3
                  py-12
                  border border-solid border-[#0F4A7B]
                  rounded
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
              >
                <div class="flex justify-center">
                  <CloudDownloadIcon
                    class="h-12 mr-2 w-12 text-[#0F4A7B] text-right"
                    aria-hidden="true"
                  />
                </div>
                <h2 class="text-[#0F4A7B]">Drag and drop your CV here</h2>
                <div>
                  <button
                    class="
                      bg-[#0F4A7B]
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
                  >
                    Browse Files
                  </button>
                </div>
              </div>
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
      applicationdata: {
        firstName: null,
        lastName: null,
        email: null,
        location: null,
        phone: null,
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
  },
};
</script>
