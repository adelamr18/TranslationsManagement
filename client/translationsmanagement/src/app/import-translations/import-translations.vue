<template>
  <div>
    <div class="navigation-buttons-container">
      <div class="navigation-buttons-children">
        <router-link to="/">
          <button type="button home-button" class="btn btn-primary">Home</button>
        </router-link>
        <router-link to="/import">
          <button type="button import-button" class="btn btn-success">Import</button>
        </router-link>
      </div>
      <div class="upload-bar-selection">
        <UploadBar/>
      </div>
    </div>
  </div>
</template>
<script>
import UploadBar from "../shared/components/upload-bar";
export default {
  name: "ImportTranslationPage",
  components: {
    UploadBar
  },
  props: [""]
};
</script>
<style scoped>
.navigation-buttons-container {
  margin-top: 2rem;
  margin-left: 2rem;
}
.home-button {
  margin-right: 0.75rem;
}
</style>
