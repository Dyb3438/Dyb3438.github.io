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
import Visit from '../components/icons/Visit.vue';

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
    Publication,
    Visit
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

      visitNumbers: {
      },

      // information
      authorName: authorConfig.name,
      authorRole: authorConfig.role,
      authorSchool: authorConfig.school,
      authorCollege: authorConfig.college,
      authorEmail: authorConfig.email,
      authorOptions: authorConfig.options,

      globe_id: authorConfig.analysis_globe_id,
    }
  },

  computed: {
    EmailHref(){
      return "mailto:" + authorConfig.email;
    },
    EmailShow(){
      return authorConfig.email.replace("@", " AT ");
    },
    visitNumber: {
      get(){
        return this.visitNumbers;
      },
      set(list){
        for (let idx in list){
          this.visitNumbers[list[idx]['name']] = list[idx]['v'];
        }
      }
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
    let that = this;
    $.ajax({
      dataType: 'jsonp',
      cache: true,
      url: '//clustrmaps.com/globe_call_home.js?w=180&d=' + this.globe_id,
      success: function(data) {
          $(function() {
              data = data.replace('addPoints(points, flag);', 'that.updateVisitNumbers(points)');
              eval(data);
          });
      }
    });
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
    },
    updateVisitNumbers(points){
      this.visitNumber = points;
    }
  }
}

</script>

<template>
  <div class="body" ref="body" :style="`--smallFont:` + this.smallFont + '; --largeFont:' + this.largeFont">
    <div class="AvatarBlock">
      <div class="AvatarPic">
        <Avatar size="var(--size)" radius="20px"></Avatar>
      </div>

      <AuthorItem font_size="var(--largeFont)" font_weight="bold" style="margin-top: 30px">
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
          <Publication largeFont="var(--largeFont)" smallFont="var(--smallFont)" :screenWidth="screenWidth"/>
        </div>
        <div class="VisitBlock" style="margin-top: 30px; width: 100%;">
          <div style="display: flex; align-items: center; margin-bottom: 20px;">
              <div style="width: var(--largeFont); height: var(--largeFont); display: inline-block; padding-right: 10px; box-sizing: content-box;">
                  <Visit/>
              </div>
              <div style="font-size: var(--largeFont); font-weight: bold; display: inline-block">Visitors</div>
          </div>
          <div class="VisitItem">
            <div class="VisitDesc">
              <marquee scrollamount="2" direction="up" style="overflow-y: auto; height: 100%; padding-bottom: 10px; padding-right: 10px;">
                <li v-for="visit,key in visitNumber"><span style="font-size: var(--smallFont)"><b>{{ visit }}</b> views from {{ key }}</span></li>
              </marquee>
            </div>
            <div class="VisitGlobe">
              <div v-is="`script`" type="text/javascript" id="clstr_globe" :src="`https://clustrmaps.com/globe.js?d=` + this.globe_id"></div>
            </div>
          </div>
        </div>

        <footer><small>Updated June 1, 2023</small></footer>
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
  /* width: 100%; */
  min-width: 500px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

.RightContent {
  overflow-y: auto; 
  display: flex; 
  flex-direction: column; 
  height: 100%;
  padding: 30px;
}

.VisitItem {
  display: flex;
  width: 100%;
  flex-wrap: wrap-reverse;
}

.VisitDesc {
  height: 217px;
  margin-right: 50px
  /* width: 300px; */
  /* flex: 1 0 auto; */
}

.VisitGlobe {
  width: 200px;
  height: 200px;
}


.AvatarPic {
  --size: 18vw;
  width: var(--size);
  height: var(--size);
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

footer {
  text-align: right;
}

@media screen and (max-width: 799px) {
  .body {
    overflow-y: auto;
    flex-wrap: wrap;
  }

  .AvatarBlock {
    width: 100vw;
    min-width: 0;
    height: auto;
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
    --size: 60vw;
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

  .VisitGlobe {
    width: 60vw;
    height: 60vw;
  }

  .VisitItem {
    justify-content: center;
  }

  .VisitDesc {
    margin-top: 20px;
    height: 150px;
    width: 80vw;
    margin-right: 0;
  }

  footer{
    text-align: center;
  }
}


</style>