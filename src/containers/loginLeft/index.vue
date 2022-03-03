<template>
  <div class="container-left">
    <div class="container">
      <div class="logo-mobile">
        <img src="@/assets/logoBranco.png" alt="Logo Compasso" />
      </div>
      <div class="login-tittle">
        <Title :level="1" text="Olá," />
        <div>
          <TextContent :level="1" text="Para continuar navegando de forma" />
          <TextContent :level="1" text="segura, efetue o login na rede." />
        </div>
      </div>
      <div class="login-container">
        <Title :level="2" text="Login" />
        <div class="user-box" :class="{borderError:loginError}">
          <Input placeholder="Usuário" class="user" type="text" />
          <img
            draggable="false"
            src="@/assets/iconeUsuario.png"
            alt="Ícone Usuário"
          />
        </div>
        <div class="password-box" :class="{borderError:loginError}">
          <Input placeholder="Senha" type="password" />
          <img
            draggable="false"
            src="@/assets/iconeSenha.png"
            alt="Ícone Senha"
          />
        </div>
        <div>
          <TextContent
            class="error" :class="{errorVisible:loginError}"
            text="Ops, usuário ou senha inválidos."
          />
          <TextContent class="error" :class="{errorVisible:loginError}" text="Tente novamente!" />
        </div>
      </div>
      <button @click="Login()">Continuar</button>
    </div>
  </div>
</template>

<script>
import Router from "@/router/index.js"
import Title from "@/components/title/index.vue";
import TextContent from "@/components/text/index.vue";
import Input from "@/components/input/index.vue";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      loginError: false
    }
  },
  
  components: {
    Title,
    TextContent,
    Input,
  },

  methods: {
    Login() {
      if(this.user === "admin" && this.password === "admin") {
        Router.push({name:"home"})
      } else {
      this.loginError = true
      }

    }
  },

  computed: {
    ...mapState(["user", "password"])
  },

  created() {
    const title = document.getElementById("window-title");
    title.innerText = "Login - Compass";
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>