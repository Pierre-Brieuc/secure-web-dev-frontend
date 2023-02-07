<template>
    <div class="signUp">
      <form @submit.prevent="submitForm">
        <h2 class="">Create an account</h2>
        <div class="block-input">
            <div class="center-div-label-input">
                <label class="" for="name">
                    Name
                </label>
                <input
                    class=""
                    type="text"
                    id="name"
                    placeholder="Name"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="email">
                    Email
                </label>
                <input
                    class=""
                    type="email"
                    id="email"
                    placeholder="Email"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="password">
                    Password
                </label>
                <input
                    class=""
                    type="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
        </div>
        <div class="btn-link">
          <button
            class=""
            type="submit"
          >
            Sign up
          </button>
            <p class="">
                Already have an account?
                <router-link to="/login">Log in</router-link>
            </p>
        </div>
      </form>
    </div>
</template>
<script>
export default {
  name: 'RegisterComponent',
  props: {
    msg: String
  }
}
</script>

  <style scoped>
    .signUp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 95vh;
    }

    form {
      background-color: #fff;
      width: 50%;
      box-shadow: 2.5px 2.5px rgba(47, 47, 47, 0.2);
      padding: 1.5%;
    }

    h2{
        text-align: center;
    }

    .block-input {
        margin-top: 6%;
        margin-bottom: 2%;
    }

    .center-div-label-input {
        display: block;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
   }
   input {
        width: 70%;
        height: 1.5rem;
        margin-bottom: 4%;
   }
   .btn-link{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
   }
   button{
        border:0.1px solid #000;
        border-radius: 15px 15px 15px 15px;
        width: fit-content;
        background-color:rgb(205, 207, 210);
        height: 2.5rem;
   }
   button:hover{
        box-shadow: 2px 2px rgba(47, 47, 47, 0.2);
        cursor: pointer;
   }
  </style>
