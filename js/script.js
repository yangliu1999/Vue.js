
new Vue({
    el:"#app",
    data:{
        arrs:[
            {text:"学习javascript"},
            {text:"学习javascript"},
            {text:"学习javascript"}
        ]
    },
    methods:{
        btn:function(){           
            if(demo.value==""){
                alert("请输入内容");
            }else{
                this.arrs.push({text:demo.value});
                   demo.value="";
            }
        },
        nin:function(index){
          this.arrs.splice(index,1);
        }
    }
})
