<template>
  <div class="quill-wrap">
    <quill-editor
      v-model="content"
      @change="onEditorChange($event)"
      :options="editorOption"
    >
    </quill-editor>
  </div>

</template>

<script>
  import axios from 'axios'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)
    export default {
        name: "quill",
      props:{
        value:String
      },
      components: {
        quillEditor
      },

      data(){
          return {
            content: this.value,
            token:'',
            // 富文本框参数设置
            editorOption: {
              modules: {
                ImageExtend: {
                  loading: true,
                  name: 'file',
                  action: 'https://upload-z1.qiniup.com',
                  response: (res) => {
                    return res.url
                  },
                  change: (xhr, formData) => {
                    // xhr.setRequestHeader('myHeader','myValue')
                    formData.append('token', this.token)
                  } //
                },
                toolbar: {
                  container: container,
                  handlers: {
                    'image': function () {
                      QuillWatch.emit(this.quill.id)
                    }
                  }
                }
              }
            }
          }
      },
      methods:{
          gettoken(){
          axios.get('http://upload.yaojunrong.com/getToken').then( res => {
            if(res.data.code === 200){
              this.token = res.data.data
            }

          })
        },
        onEditorChange({ quill, html, text }) {
          this.content = html
          this.$emit('quiller',this.content)
        }
      },
      created(){
          this.gettoken()
      },
      watch:{
          value(val){
            this.content = val
          }
      }
    }
</script>

<style scoped>

</style>
