<template>
    <div class="row">
        <div class="col-sm-7 offset-sm-3" :style="{marginTop: marginTop + 'vh'}" id="search-bar" >
            <h3 class="text-center">Search for books</h3>
            <form class="">
                <div class="form-group">
                    <input @input="handleInput" v-model="searchValue" type="text" class="form-control" id="exampleInputPassword1" placeholder="Type a book title or author in...">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Search',
    data: () => {
      return {
        searchValue: '',
        marginTop: 40
      }
    },
    methods: {
      handleInput (e) {
        let value = e.target.value

        if (value) {
          this.marginTop = 10

          this.$store.dispatch('searchApi', value)
        } else {
          this.marginTop = 40
        }
      }
    }
  }
</script>

<style scoped>
    #search-bar {
        transition: margin-top 300ms ease-out;
    }
</style>