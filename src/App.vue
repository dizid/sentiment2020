<template>
<div>
   <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
