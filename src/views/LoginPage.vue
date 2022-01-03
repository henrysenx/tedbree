<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <img
        src="https://source.unsplash.com/random"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="
        bg-white
        w-full
        md:max-w-md
        lg:max-w-full
        md:mx-auto md:w-1/2
        xl:w-1/3
        h-screen
        px-6
        lg:px-16
        xl:px-12
        flex
        items-center
        justify-start
      "
    >
      <div class="w-full h-100">
        <h1
          class="
            text-xl text-left
            md:text-2xl
            font-bold
            leading-tight
            mt-12
            label-color
          "
        >
          Login
        </h1>

        <form class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-left label-color">Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
              class="
                w-full
                px-4
                py-3
                rounded-lg
                bg-gray-200
                mt-2
                border
                focus:border-blue-500 focus:bg-white focus:outline-none
              "
              autofocus
              autocomplete
              required
              v-model="user.email"
            />
          </div>

          <div class="mt-5">
            <label class="block text-left label-color">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              minlength="6"
              class="
                w-full
                px-4
                py-3
                rounded-lg
                bg-gray-200
                mt-2
                border
                focus:border-blue-500 focus:bg-white focus:outline-none
              "
              required
              v-model="user.password"
            />
          </div>

          <button
            type="button"
            class="
              w-1/4
              block
              loginbtn-bg
              hover:bg-indigo-400
              focus:bg-indigo-400
              text-white
              font-semibold
              rounded-lg
              px-4
              py-3
              mt-6
            "
            @click="submit()"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    submit() {
      if (this.user.email === "" && this.user.password === "") {
        console.log("No Data");
      } else {
        setTimeout(() => {
          localStorage.setItem("isLoggedIn", true);
          this.$router.push("/admin");
        }, 3000);
      }

      // axios

      //   .post(`login`, {
      //     email: this.user.email,
      //     password: this.user.password,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //   });
      // axios.{method: "post", url: "login", headers:{'Content-Type: "application/json'}, proxy: createProxyMiddleware({target: "https://api.jobboard.tedbree.com/v1/", changeOrigin: true}, data: {email: this.user.email,
      //  password: this.user.password})}

      // fetch("https://api.jobboard.tedbree.com/v1/login", {
      //   method: "POST",
      //   mode: "cors",
      //   credentials: "omit",
      //   headers: { "Content-Type": "Application/json" },
      //   body: JSON.stringify({
      //     email: this.user.email,
      //     password: this.user.password,
      //   }),
      // }).then((response) => console.log(response.json()));
    },
    redirectOut() {
      const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (isLoggedIn === true) {
        this.$router.push("/admin");
      }
    },
  },
  mounted() {
    // this.fetchJobs();
    this.redirectOut();
  },
};
</script>

<style scoped>
.label-color {
  color: #0f4a7b;
}
.loginbtn-bg {
  background-color: #0f4a7b;
}
</style>
