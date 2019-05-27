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
      <div>
        <UploadBar @changeMsg="setMessage"/>
      </div>
      <b-card class="uploaded-history-files" v-if="isFileSelected">
        <b-alert v-bind:key="value.id"  v-for="value in fileNames " show variant="primary">
          <a class="alert-link">{{value.fileName}}</a>
        </b-alert>
      </b-card>
    </div>
  </div>
</template>
<script>
import UploadBar from "../shared/components/upload-bar";
export default {
  name: "ImportTranslationPage",
  data() {
    return {
      fileNames: [],
      id: 0,
      isFileSelected: false
    };
  },
  components: {
    UploadBar
  },
  methods: {
    setMessage(name) {
      if (name) {
        this.isFileSelected = true;
        this.fileNames.push({
          id: this.id++,
          fileName: name
        });
      }
    }
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
.uploaded-history-files {
  margin-top: 4rem;
  margin-right: 1.5rem;
}
</style>
