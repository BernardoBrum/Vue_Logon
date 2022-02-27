<template>
  <div class="container-left">
    <div class="container">
      <div class="login-tittle">
        <Title :level="1" text="Olá," />
        <div>
          <TextContent :level="1" text="Para continuar navegando de forma" />
          <TextContent :level="1" text="segura, efetue o login na rede." />
        </div>
      </div>
      <div class="login-container">
        <Title :level="2" text="Login" />
        <div class="user-box">
          <Input placeholder="Usuário" class="user" type="text" />
          <img
            draggable="false"
            src="../../assets/iconeUsuario.png"
            alt="Ícone Usuário"
          />
        </div>
        <div class="password-box">
          <Input placeholder="Senha" type="password" />
          <img
            draggable="false"
            src="../../assets/iconeSenha.png"
            alt="Ícone Senha"
          />
        </div>
      </div>
      <button>Continuar</button>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title/index.vue";
import TextContent from "@/components/text/index.vue";
import Input from "@/components/input/index.vue";

export default {
  components: {
    Title,
    TextContent,
    Input,
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>