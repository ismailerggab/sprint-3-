<template  class="text-center">
  <div id="center">
    <aside class="col-sm-4">
      <div class="card">
        <article class="card-body">
          <a href="/signup" class="float-right btn btn-outline-primary">Sign up</a>
          <h4 class="card-title mb-4 mt-1">Sign in</h4>
          <p>
            <a href="" class="btn btn-block btn-outline-info">
              <i class="fab fa-twitter">
                </i>Login via Twitter</a>
            <a href="" class="btn btn-block btn-outline-primary">
              <i class="fab fa-facebook-f">
                </i>Login via facebook</a>
          </p>
          <hr />
          <form>
            <div class="form-group">
              <Input placeholderProp="Email or login" inputTypeProp="email" />
            </div>
            <div class="form-group">
              <Input placeholderProp="*********" inputTypeProp="password" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <Button btnProp="Login" classProp="btn-primary" />
                </div>
              </div>
              <div class="col-md-6 text-right">
                <a class="small" href="/password/rest">Forgot password?</a>
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
  name: "Login",
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