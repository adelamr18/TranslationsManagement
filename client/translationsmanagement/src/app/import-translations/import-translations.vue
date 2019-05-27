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

      <div class="uploaded-history-files" v-if="isFileSelected">
        <div id="upload-history-text">File uploads history</div>
        <div
          class="file-uploaded-with-name-container"
          v-bind:key="value.id"
          v-for="value in fileNames "
        >
          <div class="uploaded-file-icon">
            <font-awesome-icon icon="file"/>
          </div>
          <div class="uploaded-file-name">{{value.fileName}}</div>
        </div>
      </div>
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 3rem;
  display: flex;
  flex-wrap: wrap;
}
.file-uploaded-with-name-container {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-left: 1.5rem;
}
#upload-history-text {
  margin-top: 1rem;
}
.svg-inline--fa.fa-w-12 {
  font-size: 1.5rem !important;
}
</style>
