<template>
    <div class="list-group">
        <spinner v-if="waiting && !fetchedResults.length" />
        <div v-else v-for="result in fetchedResults" class="list-group-item">
            <div class="row">
                <div class="col-sm-2">
                    <span>
                        <a href="#"><i class="fa fa-fw fa-download"></i></a>
                    </span>
                    <span>
                        <a href="#"><i class="fa fa-fw fa-book"></i></a>
                    </span>
                </div>
                <div class="col-sm-10">
                    <span style="margin-left:15px"><strong>{{ result.title }}</strong></span>
                    <span class="pull-right"><small>{{ result.author_name[0] }}</small></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Spinner from './Spinner'

export default {
    name: 'SearchResults',
    components: {Spinner},
    computed: {
      ...mapGetters(['waiting', 'fetchedResults'])
    }
  }
</script>

<style scoped>

</style>