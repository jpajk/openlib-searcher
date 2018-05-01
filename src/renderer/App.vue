<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <AppSidebar v-on:quit="quit"></AppSidebar>
      <div class="col-md-9" id="app-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import AppSidebar from './components/Shared/AppSidebar'

  require('font-awesome-loader')

  /**
   * @todo has to have a book detail view
   * @todo has to solve the problem of mobile view
   * @todo has to so
   */

  export default {
    name: 'vuelectron',
    components: {AppSidebar},
    methods: {
      quit () {
        let w = require('electron').remote.getCurrentWindow()
        w.close()
      }
    }
  }
</script>

<style>
  @import 'assets/scss/bootstrap.min.css';
  @import 'assets/scss/app.scss';
</style>
