<template>
  <div v-editable="blok" class="container pt-4 pb-5">
    <div class="row pt-4">
      <template v-for="item in stories">
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
