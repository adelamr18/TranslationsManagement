import Api from '../services/api';
export default {
  sendFiles(files){
    return Api().post('',files)
  },
  getAllFiles(){
    return Api().get('')
  },
  sendSearchedTranslation(text){
    return Api().post('/searchtranslation',text)
  }
}
