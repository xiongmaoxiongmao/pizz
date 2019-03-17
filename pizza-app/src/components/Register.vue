<template>
    <div class="row mt-3">
        <div class="col-md12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/ZC.jpg" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input 
                            type="email"
                            class="form-control"
                            v-model="email"
                            >
                        </div>
                        <div class="form-group">
                            <label for="passworld">密码</label>
                            <input 
                            type="passworld"
                            class="form-control"
                            v-model="passworld"
                            >
                        </div>
                        <div class="form-group">
                            <label for="confirm-passworld">确认密码</label>
                            <input 
                            type="passworld"
                            class="form-control"
                            v-model="confirmPassworld"
                            >
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                email:'',
                passworl:'',
                confirmPassworld:''
            }
        },
        methods: {
            onSubmit(){
                
            }
        },
    }
</script>

<style scoped>

</style> 