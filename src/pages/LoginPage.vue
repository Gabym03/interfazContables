<template>
  <div class="q-pa-md App">
    <h3 style="margin-top: 100px; color: white">
      Bienvenido a nuestra sistema contable
    </h3>
    <img
      src="https://i.pinimg.com/474x/fe/42/8e/fe428ecc2da0a0f756282f8108f588f1.jpg"
      class="logo"
      style="margin-top: 50px"
    />
    <q-form>
      <q-btn
        @click="loginWithGoogle"
        label="Iniciar Sesión con Google"
        class="q-mt-md button"
        style="margin-top: 100px"
      />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth, provider } from "src/boot/firebase";
import { signInWithRedirect } from "firebase/auth";
const goBack = () => {
  $router.push("/");
};
const usuario = ref(null);
const loginWithGoogle = async () => {
  try {
    const response = await auth.signInWithPopup(provider);
    console.log("Usuario autenticado con Google:", response.user);
    $router.push("/");
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error.message);
  }
};
</script>
