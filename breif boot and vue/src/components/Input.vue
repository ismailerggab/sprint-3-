<template>
  <input
    name=""
    class="form-control"
    v-bind:placeholder="placeholderProp"
    v-bind:type="inputTypeProp"
  />
</template>

<script>
export default {
    name: 'Input',
    props: {
        placeholderProp: String, // 
        inputTypeProp: String
    }
}
</script>