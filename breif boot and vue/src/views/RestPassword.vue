<template  class="text-center">
  <div id="center">
    <aside class="col-sm-4">
      <div class="card">
        <article class="card-body">
          <form>
            <div class="form-group">
              <Input placeholderProp="enter your email" inputTypeProp="email" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <Button btnProp="Rest" classProp="btn-primary" />
                </div>
              </div>
            </div>
          </form>
        </article>
      </div>
    </aside>
  </div>
</template>

<script>
import Input from "../components/Input";
import Button from "../components/Button";
export default {
  name: "RestPassword",
  components: {
    Input,
    Button,
  },
};
</script>

<style>
#center{
display: flex;
align-items: center;
justify-content: center;
margin-top: 10% !important;
}
</style>