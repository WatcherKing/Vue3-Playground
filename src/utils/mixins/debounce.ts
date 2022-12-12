
import { defineComponent } from 'vue';


export default defineComponent({
  data(): { timeout: any; } {
    return {
      timeout: "",
    }
  },
  methods:{
    debounce(func:any, wait:any = 1000 ){
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    }
  }
})
// const debounce:Mixin = {
//   data(){
//     return{
//       timeouts: '',
//     }
//   },


//   methods: {
//     debounce(func, wait = 1000){
//       clearTimeout(this.timeouts);
//       this.timeouts = setTimeout(func, wait); 
//     }
//   }
// }