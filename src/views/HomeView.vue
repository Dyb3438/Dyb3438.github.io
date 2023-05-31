<script>
import Avatar from '../components/Home/Avatar.vue';
import authorConfig from '../config/author.config';
import User from '../components/icons/User.vue';
import Degree from '../components/icons/Degree.vue';
import Department from '../components/icons/Department.vue';
import Mail from '../components/icons/Mail.vue';
import Next from '../components/icons/Next.vue';
import AuthorItem from '../components/Home/AuthorItem.vue';
import AboutMe from '../components/Home/AboutMe.vue';
import News from '../components/Home/News.vue';
import Publication from '../components/Home/Publication.vue';

export default{
  components: {
    Avatar,
    User,
    Degree,
    Department,
    Mail,
    AuthorItem,
    AboutMe,
    News,
    Next,
    Publication
  },

  data(){
    return {
      // parameter
      screenWidth: -1,
      screenHeight: -1,
      smallFont: '16px',
      largeFont: '20px',

      optionColors: [
        '#80a4f3',
        '#25292e',
        '#80261b',
        "#222255",
        "#222222",
        "#552222",
      ],


      // information
      authorName: authorConfig.name,
      authorRole: authorConfig.role,
      authorSchool: authorConfig.school,
      authorCollege: authorConfig.college,
      authorEmail: authorConfig.email,
      authorOptions: authorConfig.options,
    }
  },

  computed: {
    EmailHref(){
      return "mailto:" + authorConfig.email;
    },
    EmailShow(){
      return authorConfig.email.replace("@", " AT ");
    }
  },

  watch: {
    screenWidth(new_val, old_val){
      if (new_val < 800){
        new_val = new_val / 0.3;
      } else if (0.3 * new_val < 300){
        new_val = 300 / 0.3;
      }

      this.smallFont = new_val * 0.01 + 'px';
      this.largeFont = new_val * 0.015 + 'px';
    },
  },

  created() {
    window.addEventListener("resize", this.windowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResize);
  },

  beforeMount() {
    this.screenHeight = document.documentElement.clientHeight;
    this.screenWidth = document.documentElement.clientWidth;
  },

  methods: {
    windowResize(e){
      this.screenHeight = e.target.innerHeight;
      this.screenWidth = e.target.innerWidth;
    },
    optionColor(index){
      if (index >= this.optionColors.length){
        return '#555555';
      }else{
        return this.optionColors[index];
      }
    }
  }
}

</script>

<template>
  <div class="body" ref="body" :style="`--smallFont:` + this.smallFont + '; --largeFont:' + this.largeFont">
    <div class="AvatarBlock">
      <div class="AvatarPic">
        <Avatar size="100%" radius="20px"></Avatar>
      </div>

      <AuthorItem font_size="var(--largeFont)" font_weight="bold">
        <template v-slot:Icon>
          <User/>
        </template>
        <template v-slot:Text>
          {{authorName}}
        </template>
      </AuthorItem>

      <AuthorItem font_size="var(--smallFont)">
        <template v-slot:Icon>
          <Degree/>
        </template>
        <template v-slot:Text>
          {{authorRole}}
        </template>
      </AuthorItem>

      <AuthorItem font_size="var(--smallFont)">
        <template v-slot:Icon>
          <Department/>
        </template>
        <template v-slot:Text>
          <a :href="authorSchool.url" target="_blank">{{authorSchool.name}}</a>
          <div v-if="authorCollege.name != ``" style="display: inline-block;">
           <span>,&nbsp&nbsp<a :href="authorCollege.url" target="_blank">{{authorCollege.name}}</a></span>
          </div>
        </template>
      </AuthorItem>

      <AuthorItem font_size="var(--smallFont)">
        <template v-slot:Icon>
          <Mail/>
        </template>
        <template v-slot:Text>
          <a :href="this.EmailHref">{{ this.EmailShow }}</a>
        </template>
      </AuthorItem>
      
      <div class="Options">
        <a v-for="(value, key, index) in authorOptions"  :href="value" target="_blank">
          <div :style="`--btn_color:` + optionColor(index)" class="unselect">
            {{ key }}
          </div>
        </a>
      </div>
    </div>

    <div class="RightBlock">
      <div class="RightContent">
        <div class="BlockItem">
          <AboutMe largeFont="var(--largeFont)" smallFont="var(--smallFont)"/>
        </div>
        <div class="BlockItem" style="margin-top:30px; max-height: 400px">
          <News largeFont="var(--largeFont)" smallFont="var(--smallFont)"/>
        </div>
        <div class="BlockItem" style="margin-top:30px">
          <Publication largeFont="var(--largeFont)" smallFont="var(--smallFont)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.body {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.AvatarBlock {
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 300px;
  height: 100%;
  padding: 30px;

  background-color: lightgray;
  box-shadow: 1px 0 1px gray;
}


.RightBlock {
  width: 100%;
  height: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
}

.RightContent {
  overflow-y: auto; 
  display: flex; 
  flex-direction: column; 
  height: 100%;
  padding: 30px;
}




.AvatarPic {
  width: 18vw;
  height: 18vw;
  min-width: 180px;
  min-height: 180px;
  margin: auto;
  animation: none;
  cursor:grab
}

.AvatarPic:hover {
  animation: rotate 2s infinite;
}

@keyframes rotate{
  0%{
    -webkit-transform: rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
  }
}

.Options {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: left;
}

.Options a {
  margin: 5px;
  text-decoration: none
}

.Options div {
  flex: 0 0 auto;

  font-size: calc(var(--smallFont) * 0.8);
  font-weight: bold;
  /* padding: 5px 10px; */
  padding: calc(var(--smallFont) / 3) calc(var(--smallFont) / 3 * 2);
  border-radius: calc(var(--smallFont) / 3 * 2);
  /* color: white; */
  color: var(--btn_color);
  border: 2px solid var(--btn_color);
  background-color: white;

  cursor: pointer;
}

.Options div:hover{
  box-shadow: 2px 2px 2px gray;
  transform: translateY(-5%);

  color: white;
  background-color: var(--btn_color);
}

.Options div:active {
  box-shadow: none;
  transform: translateY(0%);
}

@media screen and (max-width: 799px) {
  .body {
    overflow-y: auto;
    flex-wrap: wrap;
  }

  .AvatarBlock {
    width: 100vw;
    height: 100%;
    min-width: 0;
  }

  .RightBlock {
    width: 100vw;
    min-width: 0;
    flex: 1 0 auto;
    height: auto;
  }
  
  .RightContent {
    overflow-y: hidden !important;
  }

  .AvatarPic {
    width: 60vw;
    height: 60vw;
    min-width: 0;
    min-height: 0;
  }

  .Options {
    justify-content: center;
  }

  .Options div {
    color: white;
    background-color: var(--btn_color);
  }

}


</style>