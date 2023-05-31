<script>
import authorConfig from '../../config/author.config';
import News from '../icons/News.vue';

export default {
    props: ['largeFont', 'smallFont'],

    components:{
        News
    },

    data(){
        return {
            content: authorConfig.news,
            content_height: '100%'
        }
    },

    mounted(){
        this.content_height = "calc(100% - "+ (this.$refs.Title.clientHeight + 20) +"px)";
        this.$refs.Content.style.setProperty(
            "height",
            this.content_height
        );
    },
}
</script>

<template>
  <div class="News">
    <div class="title unselect"  ref="Title">
        <div class="icon" :style="`width:` + this.largeFont + '; height:' + this.largeFont">
            <News/>
        </div>
        <span :style="`font-size:` + this.largeFont">News</span>
    </div>

    <div class="content" ref="Content">
        <div style="overflow-y: auto; display: flex; flex-direction: column; height: 100%;">
            <ul style="padding-left: 20px">
                <li v-for="newsItem, key in content" style="margin-bottom: 5px">
                    <div :style="`font-size:` + this.smallFont" v-html="newsItem"></div>
                </li>
            </ul>
        </div>
    </div>

  </div>
</template>

<style scoped>
.News {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.title {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.title span {
    font-weight: bold;
}

.icon {
    display: inline-block;
    box-sizing: content-box;
    padding-right: 10px;
}

.icon svg{
    width: 100%;
    height: 100%;
}

.content{
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
}

</style>
