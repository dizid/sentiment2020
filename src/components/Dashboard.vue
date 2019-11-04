<template>
  <div class="container">
    <div>
      <div>
        <div>
          <div>Dashboard</div>
          <div>
            <div v-if="user">You are logged in!</div>
            <p>user:  {{ user }} </p><br>
           <!--  <p>user.data.displayName: {{ user.data.displayName }} </p> -->
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>