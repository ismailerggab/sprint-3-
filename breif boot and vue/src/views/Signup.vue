<template  class="text-center">
  <div id="center">
    <aside class="col-sm-4">
      <div class="card">
        <article class="card-body">
          <a href="/login" class="float-right btn btn-outline-primary">Sign in</a>
          <h4 class="card-title mb-4 mt-1">Sign up</h4>
          <p>
            <a href="" class="btn btn-block btn-outline-info">
              <i class="fab fa-twitter">
                </i>Sign up via Twitter</a>
            <a href="" class="btn btn-block btn-outline-primary">
              <i class="fab fa-facebook-f">
                </i>Sign up via facebook</a>
          </p>
          <hr />
          <form>
            <div class="form-group">
              <Input placeholderProp="Enter your Email" inputTypeProp="email" />
            </div>
            <div class="form-group">
              <Input placeholderProp="Enter your password" inputTypeProp="password" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <Button btnProp="Sign up" classProp="btn-primary" />
                </div>
              </div>
              <div class="col-md-6 text-right">
                <a class="small" href="/fuckoff">Feedback?</a>
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
  name: "Signup",
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