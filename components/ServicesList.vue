<template>
  <div v-editable="blok" class="container pt-4 pb-5">

    <!-- homepage 3 services list -->
    <div class="row pt-4">
      <template v-for="item in stories.slice(0, 3)">
        <div class="col-md-4 mb-4" :key="item.id">
          <h4 class="font-weight-normal">{{item.name}}</h4>
          <div class="card mt-1 mb-3">
            <img class="card-img" :src="item.content.service_image" alt="card image">
            <a class="card-img-overlay show-on-hover d-flex text-white" :href="item.full_slug">
              <span class="card-title m-auto">Learn more</span>
            </a>
          </div>
          {{item.content.description}}
        </div>
      </template>
    </div>

    <!-- homepage bottom 2 services list -->
    <div class="card-deck">
      <template v-for="item in stories.slice(3)">
        <div class="card mt-4 mb-4" :key="item.id">
          <div class="row no-gutters">
            <div class="col-lg-5 py-lg-3 pl-lg-3">
              <div class="position-relative">
                <img class="card-img w-100" :src="item.content.service_image" alt="card image">
                <a class="card-img-overlay show-on-hover d-flex text-white" :href="item.full_slug">
                  <span class="card-title m-auto">Learn more</span>
                </a>
              </div>
            </div>
            <div class="col-lg-7 p-3">
              <h6 class="font-weight-bold text-uppercase">{{item.name}}</h6>
              {{item.content.description}}
            </div>
          </div>
        </div>
      </template>
    </div><!-- /.card-deck -->

  </div>
</template>

<script>
export default {
  props: ['blok'],
  data () {
    return { stories: [] }
  },
  mounted () {
    // Load the JSON from the API
    return this.$storyapi.get(`cdn/stories`, {
      'filter_query[component][all]': 'service',
      version: 'published'
    }).then((res) => {
     this.stories = res.data.stories
    });
  }
}
</script>
