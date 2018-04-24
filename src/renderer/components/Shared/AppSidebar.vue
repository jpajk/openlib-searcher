<template>
    <div class="sidebar">
        <div class="navbar navbar-dark bg-light sidebar">
            <ul class="nav nav-pills flex-column main">
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" :to="{name: 'search'}" exact>
                        <i class="fa fa-search fa-fw"></i>
                        &nbsp;
                        <span>Search</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" :to="{name: 'myLibrary'}">
                        <i class="fa fa-book fa-fw"></i>
                        &nbsp;
                        <span>My Library</span>
                    </router-link>
                </li>
                <li @click="$emit('quit')" class="nav-item btn quit">
                    <a class="nav-link btn-danger" href="#">Quit</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'AppSidebar'
  }
</script>

<style scoped>

</style>