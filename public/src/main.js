import Vue from 'vue';
import Router from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
import store from './vuex/store';
import App from './App.vue';
import filters from './filter';
import index from './views/index.vue';
import articlelist from './views/article_list.vue';
import article from './views/article.vue';
import catelist from './views/cate_list.vue';
import biolist from './views/bio_list.vue';
import photolist from './views/photo_list.vue';
import photos from './views/photos.vue';
import about from './views/about.vue';
import write from './views/write.vue';
import slogin from './views/login.vue';
import add from './views/add.vue';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: true
});
window.router = router;

Object.keys(filters).forEach((k) => {
    Vue.filter(k, filters[k]);
});

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./ext/vue_ext.js'));

router.map({
    '/': {
        name: 'index',
        component: index
    },
    '/index':{
        name:'index',
        component:index,
        subRoutes:{
            '/':{
                component:articlelist
            },
            '/articlelist':{
                component:articlelist
            },
            '/article':{
                component:article
            },
            '/catelist':{
                component:catelist
            },
            '/biolist':{
                component:biolist
            },
            '/about':{
                component:about
            },
            '/photolist':{
                component:photolist
            },
            '/photos':{
                component:photos
            }
            
        }
    },
    '/control/':{
       name: 'slogin',
       component: slogin
    },
    '/control/write':{
       name: 'write',
       component: write
    },
    '/control/add':{
       name: 'add',
       component: add
    }
});

// router.beforeEach(function(transition) {
//   transition.next()
// })
sync(store, router);
router.start(App, '#app');
