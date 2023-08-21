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
import fetchJSONP from 'fetch-jsonp'

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
    Visit,
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

      remove_href: false,
      load_globe: false,

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
          let name = list[idx]['name'];
          name = name.replace('Taiwan', 'Taiwan, China');
          if (name in this.visitNumber){
            this.visitNumbers[name] += list[idx]['v'];
          }else{
            this.visitNumbers[name] = list[idx]['v'];
          }
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
    fetchJSONP('//clustrmaps.com/globe_call_home.js?w=180&d=' + this.globe_id)
      .then(response => response.json())
      .then( data => {
            data = data.replace('addPoints(points, flag);', 'that.updateVisitNumbers(points)');
            console.log(that.visitNumbers == 1);
            eval(data);
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
  },
  mounted(){
    // document.documentElement.scrollHeight + document.documentElement.clientHeight
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.addEventListener('scroll', ()=>{
      if (!this.remove_href && document.getElementById('clstr_a') && document.getElementById('clstr_a').href != 'javascript:void(0)'){
        document.getElementById('clstr_a').href = 'javascript:void(0)';
        this.remove_href = true;
      }

      if (!this.load_globe){
        let elem = $('#clstr_a');
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = elem.offset() ? $(elem).offset().top : 0;
        var elemBottom = elemTop + $(elem).height();
        this.load_globe = (elemBottom <= docViewBottom) && (elemTop >= docViewTop);
      }
      
    })
  }
}

</script>

<template>
  <div class="body" ref="body" :style="`--smallFont:` + this.smallFont + '; --largeFont:' + this.largeFont">
    <div class="AvatarBlock" ref="AvatarBlock">
      <div class="AvatarPic">
        <Avatar size="max(var(--size), 180px)" radius="20px"></Avatar>
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

    <div class="RightBlock" ref="RightBlock">
      <div class="RightContent">
        <div class="BlockItem">
          <AboutMe largeFont="var(--largeFont)" smallFont="var(--smallFont)"/>
        </div>
        <div class="BlockItem" style="margin-top:30px; max-height: 400px">
          <News largeFont="var(--largeFont)" smallFont="var(--smallFont)" :screenWidth="screenWidth"/>
        </div>
        <div class="BlockItem" style="margin-top:30px">
          <Publication largeFont="var(--largeFont)" smallFont="var(--smallFont)" :screenWidth="screenWidth"/>
        </div>
        <div class="VisitBlock" style="margin-top: 30px; width: 100%;">
          <div style="display: flex; align-items: center; margin-bottom: 20px;">
              <div style="width: var(--largeFont); height: var(--largeFont); display: inline-block; padding-right: 10px; box-sizing: content-box;">
                  <Visit/>
              </div>
              <div style="font-size: var(--largeFont); font-weight: bold; display: inline-block" class="unselect">Recent Visitors</div>
          </div>
          <div class="VisitItem">
            <div class="VisitDesc">
              <marquee scrollamount="2" direction="up" style="overflow-y: auto; height: 100%; padding-bottom: 10px; padding-right: 10px;">
                <li v-for="visit,key in visitNumber"><span style="font-size: var(--smallFont)"><b>{{ visit }}</b> views from {{ key }}</span></li>
              </marquee>
            </div>
            <div class="VisitGlobe">
              <div v-is="`script`" id="clstr_globe" style="width: 100%; height: 100%" type="text/javascript" :src="`https://clustrmaps.com/globe.js?d=` + this.globe_id"></div>
            </div>
          </div>
        </div>

        <div id="footer"><small>Updated Aug 21, 2023</small></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  width: 100vw;
  background: white;
}

.AvatarBlock {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 300px;
  height: 100vh;
  padding: 2vw;

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
  padding-left: max(30vw, 300px);
}

.RightContent {
  display: flex; 
  flex-direction: column; 
  height: 100%;
  padding: 30px;
}

.VisitItem {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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
  flex: 0 0 auto;
  --size: 18vw;
  width: var(--size);
  height: var(--size);
  min-width: 180px;
  min-height: 180px;
  margin: auto;
  animation: none;
  cursor:grab
}

/* .AvatarPic:hover {
  animation: rotate 2s infinite;
} */

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

#footer {
  text-align: right;
}

@media screen and (max-width: 799px) {
  .body {
    flex-wrap: wrap;
  }

  .AvatarBlock {
    width: 100vw;
    min-width: 0;
    height: auto;
    position: relative;
    padding: 30px;
    padding-top: 50px;
  }

  .RightBlock {
    width: 100vw;
    min-width: 0;
    flex: 1 0 auto;
    height: auto;
    padding-left: 0;
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
    margin-bottom: 20px;
    height: 200px;
    width: 80vw;
    margin-right: 0;
  }

  #footer{
    text-align: center;
  }
}


</style>