<template>
    <div class="body">
        <span>ERROR CODE: 404</span>
    </div>
    <div class="info">
        <span>Automatically return to homepage after {{ second }} seconds. Click here to <a href="./">Home</a>.</span>
    </div>
</template>

<script>
export default{
    data(){
        return {
            second: 5
        }
    },

    mounted(){
        let timer = setInterval(()=>{
            this.second -= 1;
            if (this.second == 0){
                clearInterval(timer);
                window.location.href = './';
            }
        }, 1000)
    }
}
</script>

<style scoped>
.body {
    /* background: black; */
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    background: darkslategray;
}

.body span {
    font-size: max(3vw, 40px);
    font-weight: bolder;
    color: white;
    position: absolute;
    top: 25vh;
}

.body::after {
    content: "PAGE NOT FOUND";
    font-size: max(3vw, 40px);
    font-weight: bolder;
    background: white;
    color: transparent;
    -webkit-background-clip: text;
    height: max(2.5vw, 33px);
    position: absolute;
    top: calc(50vh - max(2.5vw, 33px));
}

.body::before {
    content: "PAGE NOT FOUND";
    font-size: max(3vw, 40px);
    font-weight: bolder;
    background: darkslategray;
    color: transparent;
    -webkit-background-clip: text;
    position: absolute;
    top: calc(50vh - max(2.5vw, 33px));
}

.info {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
}

.info span {
    font-size: max(2vw, 20px);
    margin-top: calc(max(2.5vw, 33px) + 50px);
    text-align: center;
}

</style>