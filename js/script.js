const { createApp, ref } = Vue;
        createApp({
            setup(){
                let image = ref({
                    src:"https://picsum.photos/200/300",
                    alt:'An image'
                })

                const link = "https://google.com"
                const text = "my text"
                const html = "<strong>My html</strong>"

                return {
                    image,
                    link,
                    text,
                    html
                }
            }
        }).mount('#app')