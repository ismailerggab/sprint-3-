<template>
<!-- here I create my button comp.. -->
  <button type="submit" v-bind:class="classProp" class="btn btn-block ">{{ btnProp }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnProp: String,
    classProp: String
  },
};
</script>