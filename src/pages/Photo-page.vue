<template>
   
   <v-container>
      <PhotoForm  @addPhoto="addPhoto"/>
      <v-row>
         <PhotoS 
            v-for="photo in $store.getters.getAllPhotos" 
            :key="photo.id" 
            :photo="photo"
           />
      </v-row>
    <PhotoDialog/>
   </v-container>

</template>

<script>

import PhotoForm from '@/components/photo/Photo-form.vue'
import PhotoS from '@/components/photo/Photo-s.vue'
import PhotoDialog from '@/components/photo/Photo-dialog.vue'


export default{
   components: {
      PhotoS,
      PhotoForm,
      PhotoDialog
   },
   data: () => ({
      photos: [],
   }),
   mounted(){
      //this.fetchTodo()
      this.$store.dispatch('fetchPhotos')
   },
   methods: {
      //fetchTodo() {
       //  this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
          //  .then(response => this.photos = response.data)
      //},
      addPhoto(photo){
         this.photos.push(photo)
      },
      openPhoto(photo){
         this.currentPhoto = photo
         this.dialogVisible = true
      },
   }
}

</script>