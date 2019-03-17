<template>
  <form>
      <h3 class="text-mutde my-5"></h3>
          <div class="form-group row">
              <label class="col-sm-1">品种</label>
              <div class="col-sm-11">
                  <input type="text" class="form-control">
              </div>
          </div>
          <div class="form-group row">
              <label class="col-sm-1">描述</label>
              <div class="col-sm-11">
                  <textarea rows="5" class="form-control"></textarea>
              </div>
          </div>
          <p><strong>选项一</strong></p>
        <div class="form-group row">
              <label class="col-sm-1">尺寸</label>
              <div class="col-sm-11">
                  <input type="text" class="form-control" >
              </div>
          </div>
          <div class="form-group row">
              <label class="col-sm-1">价格</label>
              <div class="col-sm-11">
                  <input type="text" class="form-control">
              </div>
          </div>
           <p><strong>选项二</strong></p>
        <div class="form-group row">
              <label class="col-sm-1">尺寸</label>
              <div class="col-sm-11">
                  <input type="text" class="form-control">
              </div>
          </div>
          <div class="form-group row">
              <label class="col-sm-1">价格</label>
              <div class="col-sm-11">
                  <input type="text" class="form-control">
              </div>
          </div>
          <div class="form-group row">
              <button type="button" class="btn btn-success btn-block">添加</button>
          </div>
  </form> 
</template>

<script>
    export default {
        data(){
            return{
                newPizz:{}
            }
        }
    }
</script>

<style scoped>

</style>