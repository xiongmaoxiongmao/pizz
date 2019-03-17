<template>
    <div class="row mt-3">
        <div class="col-md12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/DL.png" alt="">
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
                    
                        <button type="submit" class="btn btn-block btn-success">登陆</button>
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