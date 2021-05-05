<template>
  <Header title="Welcome"/> <!-- here we import the header component to use it in all our site -->
  <router-view/> <!-- this is will take you to the home page route which is -> '/' <---->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<script>
import Header from './components/Header';
export default {
    name: 'App',
    components: {
        Header // hnya khadmnq Header after we imported
    }
}
</script>