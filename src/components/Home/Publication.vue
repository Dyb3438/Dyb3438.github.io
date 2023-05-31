<script>
import authorConfig from '../../config/author.config';
import Publication from '../icons/Publication.vue';

export default {
    props: ['largeFont', 'smallFont'],

    components:{
        Publication
    },

    data(){
        return {
            content: authorConfig.publications,
            optionColors: [
                '#5555bb',
                '#55bb55',
                "#bb5555",
                '#bb55bb',
                '#55bbbb',
                '#bbbb55',
            ]
        }
    },

    computed:{
        getYears(){
            return Object.keys(this.content).sort((a,b)=>{return b-a;});
        },
        isPC(){
            return document.documentElement.clientWidth >= 800;
        }
    },

    methods: {
        optionColor(index){
            if (index >= this.optionColors.length){
                return '#bbbbbb';
            }else{
                return this.optionColors[index];
            }
        }
    }
  
}
</script>

<template>
  <div class="Publications">
    <div class="title unselect">
        <div class="icon" :style="`width:` + this.largeFont + '; height:' + this.largeFont">
            <Publication/>
        </div>
        <span :style="`font-size:` + this.largeFont">Selected Publications</span>
    </div>

    <div class="content" ref="content">
        <div v-for="year in getYears" class="ListOneYear">
            <div class="YearBlock Item">
                <div class="LeftPart"></div>
                <span :style="`font-size:` + this.smallFont + `; margin: 0 10px;`"><b>{{ year }}</b></span>
                <div class="RightPart"></div>
            </div>
            <div class="Publication Item" v-for="publication in content[year]" v-if="isPC">
                <div class="PublicationImage">
                    <a :href="publication.options['Project Page']" target="_blank">
                        <img :src="publication.image" style="width: 100%;">
                    </a>
                </div>
                <div class="PublicationDesc">
                    <div class="PublicationTitle" :style="`font-size:` + this.smallFont" v-html="publication.title"></div>
                    <div class="PublicationAuthor" :style="`font-size:` + this.smallFont" v-html="publication.author"></div>
                    <div class="PublicationPublisher" :style="`font-size:` + this.smallFont" v-html="publication.publisher"></div>
                    <div class="PublicationOptions" :style="`font-size:` + this.smallFont">
                        <div style="flex: 0 0 auto; display: inline-block; margin: 5px 10px 5px 0px" v-for="(value, key, index) in publication.options" >
                            <a  :href="value" target="_blank" style="display:inline-block">
                                <div :style="`--btn_color:` + optionColors[index]" class="unselect OptionItem">
                                    {{ key }}
                                </div>
                            </a>
                        </div>
                        <!-- <div style="flex: 10 1 auto; display: inline-block"></div> -->
                    </div>
                </div>
            </div>
            <div class="Publication_Mobile Item" v-for="publication in content[year]" v-else>
                <div class="PublicationImage">
                    <a :href="publication.options['Project Page']" target="_blank">
                        <img :src="publication.image" style="width: 100%;">
                    </a>
                </div>
                <div class="PublicationDesc">
                    <div class="PublicationTitle" :style="`font-size:` + this.smallFont" v-html="publication.title"></div>
                    <div class="PublicationAuthor" :style="`font-size:` + this.smallFont" v-html="publication.author"></div>
                    <div class="PublicationPublisher" :style="`font-size:` + this.smallFont" v-html="publication.publisher"></div>
                    <div class="PublicationOptions" :style="`font-size:` + this.smallFont">
                        <div style="flex: 1 0 auto; display: flex; margin: 5px" v-for="(value, key, index) in publication.options" >
                            <a  :href="value" target="_blank" style="display:inline-block; flex: 10">
                                <div :style="`--btn_color:` + optionColor(index)" class="unselect OptionItem">
                                    {{ key }}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<style scoped>
.Publications {
    width: 100%;
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


.Item {
    margin: 20px 0;
}

.YearBlock {
    display: flex;
    align-items: center;
}
.YearBlock .LeftPart{
    height: 5px;
    color: white;
    background: -moz-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(0,0,0,0)), color-stop(25%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,1)));
    background: -webkit-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    background: -o-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    background: -ms-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    display: inline-block;
    flex: 1;
    border-radius: 5px;
}

.YearBlock .RightPart{
    height: 5px;
    color: white;
    background: -moz-linear-gradient(right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 100%);
    background: -webkit-gradient(linear, right top, left top, color-stop(0%,rgba(0,0,0,0)), color-stop(25%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,1)));
    background: -webkit-linear-gradient(right, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    background: -o-linear-gradient(right, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    background: -ms-linear-gradient(right, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    background: linear-gradient(to left, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 100%);
    display: inline-block;
    flex: 1;
    border-radius: 5px;
}

.Publication {
    width: 100%;
    display: flex;
    align-items: top;
}

.PublicationImage{
    width: 20vw;
    height: auto;
    flex: 0 0 auto;
}
.PublicationDesc {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    flex: 1
}

.PublicationTitle {
    font-weight: bold;
}

.PublicationOptions {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: left;
}

.PublicationOptions a {
  margin-right: auto;
  text-align: center;
  text-decoration: none
}

.OptionItem {
  flex: 0 0 auto;

  font-size: calc(var(--smallFont) * 0.8);
  font-weight: bold;
  padding: calc(var(--smallFont) / 3) calc(var(--smallFont) / 3 * 2);
  border-radius: calc(var(--smallFont) / 3 * 2);
  color: var(--btn_color);
  border: 2px solid var(--btn_color);
  background-color: white;

  cursor: pointer;
}

.OptionItem:hover{
  box-shadow: 2px 2px 2px gray;
  transform: translateY(-5%);

  color: white;
  background-color: var(--btn_color);
}

.OptionItem:active {
  box-shadow: none;
  transform: translateY(0%);
}



.Publication_Mobile {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 2px 2px 2px gray;
}

.Publication_Mobile .PublicationOptions {
    justify-content: center;

}


.Publication_Mobile .PublicationOptions a {
  margin: auto;
}

.Publication_Mobile .PublicationDesc {
    margin-left: 0;
}

.Publication_Mobile .PublicationImage{
    width: 80%;
}

.Publication_Mobile .OptionItem {
    color: white;
    background-color: var(--btn_color);
}



</style>
