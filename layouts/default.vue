<script setup>
import NavBar from "~/components/Layout/Navbar/NavBar";
import Footer from "~/components/Layout/Footer/footer";
</script>
<template>
  <div>
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
