<template>
  <div class="import-container">
    <div class="upload-content">
      <div class="upload-text">Upload file</div>
      <div class="upload-bar">
        <b-form-file
          v-model="file"
          id="selectFiles"
          :state="Boolean(file)"
          placeholder="Choose a file..."
          drop-placeholder="Drop file here..."
          @change="checkFileFormat "
        ></b-form-file>
      </div>
      <div class="submit-upload">
        <button
          :disabled="isWrongUploadFormat"
          class="btn btn-primary"
          @click="submitFile(true)"
          id="import"
        >Import</button>
      </div>
    </div>
    <div class="alert-container">
      <b-alert v-if="isWrongUploadFormat" show variant="danger">File type must be .json</b-alert>
    </div>
    <div class="backend-alert-container">
      <b-alert
        v-if="showBackendErrorAlert"
        show
        variant="danger"
      >Something went wrong while uploading a file</b-alert>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TranslationService from "../services/translations-service";
export default {
  name: "UploadBar",
  props: [""],
  methods: {
    submitFile(append = false) {
      if (!this.isWrongUploadFormat) {
        this.toastCount++;
        this.$bvToast.toast(`You have successfully uploaded a json file`, {
          title: "Success",
          autoHideDelay: 5000,
          appendToast: append
        });
        var files = document.getElementById("selectFiles").files;
        this.$emit("changeMsg", files[0].name);
        if (files.length <= 0) {
          return false;
        }
        this.sendFilesToBackend();
      }
    },
    checkFileFormat() {
      var files = document.getElementById("selectFiles").files;
      this.showAlert = true;
      var parts = files[0].name.split(".");
      if (parts[parts.length - 1].toLowerCase() === "json") {
        this.isWrongUploadFormat = false;
      } else {
        this.isWrongUploadFormat = true;
      }
    },
    sendFilesToBackend() {
      var files = document.getElementById("selectFiles").files;
      var fr = new FileReader();
      fr.onload = function(e) {
        var result = JSON.parse(e.target.result);
        TranslationService.sendFiles(JSON.stringify(result, null, 2))
          .then(res => {})
          .catch(error => {
            this.showBackendErrorAlert = true;
          });
      };
      fr.readAsText(files.item(0));
    }
  },
  data() {
    return {
      file: "",
      error: false,
      message: "",
      allowSubmit: false,
      fileNames: [],
      isWrongUploadFormat: false,
      toastCount: 0,
      showErrorAlert: false,
      showBackendErrorAlert: false
    };
  }
};
</script>
<style scoped>
.upload-bar-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
}
form {
  margin-top: 1rem;
}
.field {
  display: flex;
}
#result {
  display: block;
  width: 400px;
  height: 200px;
}

.upload-bar {
  flex-grow: 0.9;
  margin-left: 2rem;
  margin-right: 4rem;
}
.upload-container {
  display: flex;
}
.upload-content {
  margin-top: 2rem;
  display: flex;
}

.submit-upload {
  margin-top: 0.1rem;
}
.upload-text {
  margin-top: 0.12rem;
}
.custom-file-input.is-invalid,
.custom-file-label {
  border-color: black !important;
}
.alert-container {
  margin-top: 2rem;
  margin-right: 2rem;
}
.backend-alert-container {
  margin-top: 2rem;
  margin-right: 2rem;
}
</style>
