<template>
  <v-app>
     <NavBarVue/>
     <router-view/>
  </v-app>
</template>




<script>
import NavBarVue from './components/Nav-bar.vue';

export default {
  name: 'App',
  components: {
    NavBarVue
  }
};
</script>
