<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <app-new-pizz></app-new-pizz> 
        </div>
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">菜单</h3>
             <table class="table">
            <thead class="table table-defaulf">
                <tr>
                    <th>品种</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>榴莲披萨</td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm">&times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import NewPizz from'./NewPizz.vue'
    export default {
        components:{
            'app-new-pizz':NewPizz
        }
    }
// import NewPizz from'./NewPizz.vue'
//     export default {
//         comments:{
//             'app-new-pizz':NewPizz
//         },
        // data(){
        //     return{
        //         name:'Henry'
        //     }
        // },
        
        // beforeRouteEnter (to, from, next) {
        //     // alert('hello' +this)
        //     next(vm =>{
        //         alert('hello'+vm.name)
        //     })
        // }


        //离开确认
        // beforeRouteLeave (to, from, next) {
        //     if(confirm('确定离开么') == true){
        //         next()
        //     }else{
        //         next(false)
        //     }
        // }
    // }
</script>

<style scoped>

</style> 