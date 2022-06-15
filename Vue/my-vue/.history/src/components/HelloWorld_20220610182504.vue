<template>
    <mavon-editor  
        :toolbars="toolbars"       
        @imgAdd="handleEditorImgAdd"     
        @imgDel="handleEditorImgDel"  
        style="height:600px"         
        v-model="value"         
        @change="change"        
        ref=md                
    />
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
