<template>
  <div class="search-bar-container">
    <div class="search-bar-children">
      <div class="search-text">Source</div>
      <div class="search-bar">
        <input
          @change="checkTypedData"
          class="form-control"
          v-model="inputText"
          type="text"
          placeholder="Search for your article"
          aria-label="Search"
        >
      </div>
      <div class="search-button">
        <button
          type="button home-button"
          class="btn btn-primary"
          @click="$emit('pass-text',inputText)"
        >Search</button>
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
  margin-top: 2rem;
}
.search-bar {
  flex: 1;
  margin-right: 1.5rem;
}
.search-text {
  margin-top: 0.5rem;
  margin-right: 1rem;
}
.search-button {
  margin-right: 1.5rem;
}
</style>
