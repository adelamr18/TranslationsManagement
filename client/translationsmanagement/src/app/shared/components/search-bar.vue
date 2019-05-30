<template>
  <div class="search-bar-container">
    <div class="search-bar-children">
      <div class="search-text">Source</div>
      <div class="search-bar d-flex">
        <input
          @change="checkTypedData"
          class="form-control"
          v-model="inputText"
          type="text"
          placeholder="Search for your article"
          aria-label="Search"
        >
          <button class="btn-search"
          type="button home-button"
          @click="$emit('pass-text',inputText)"
        >Search</button>
      </div>
      <div class="search-button">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  props: ["count"],
  methods: {
    checkTypedData() {
      if (!this.inputText) {
        this.getDefaultValues = true;
        this.$emit('default-values',this.getDefaultValues)
      }
    }
  },
  data() {
    return {
      inputText: "",
      getDefaultValues: false
    };
  }
};
</script>
<style scoped>
.search-bar-children {
  display: flex;
}
.search-bar {
  flex: 1;
  margin-right: 1.5rem;
}
.form-control{
      border: 1px solid #595959;
      border-right: 0;
      border-radius: 0.25rem 0rem 0rem 0.25rem;
}
.form-control:focus{
  outline: 0;
  box-shadow: none
}
.search-text {
  margin-top: 0.5rem;
  margin-right: 1rem;
}
.search-button {
  margin-right: 1.5rem;
}
.btn-search{
    background-color: #BF9C8F;
    color: #f2f2f2;
    border: 0;
    padding: 0.3rem 0.75rem;
    border-radius: 0.25rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.btn-search:focus,.btn-search:active,.btn-search:hover{
  background-color: #D9BBB0;
    color: #fff;
}
</style>
