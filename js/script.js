const app = Vue.createApp({
    template:"#app",
    data(){
        return{

            title:"New Hello World",
            link: "<a href='//youtube.com'>Link2</a>"
        }

    },

    methods:{

        handleChange(e){
            this.title=e.target.value
        },

        handleClick(title,event){
            this.title=title;
            console.log(event);
            
        },

        outerHandler(){console.log('outer')},
        innerHandler(){console.log('inner')},
        linkHandler(){console.log('link')}
    }
});



app.mount("#root");