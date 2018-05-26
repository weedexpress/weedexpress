requirejs.config({
    baseUrl: '../src/js/frontend/',
    paths: {
        // libraries
        jQuery: 'libs/jquery.min',
        angular: 'libs/angular.min',
        aws: 'libs/aws-sdk.min',
        charts: 'libs/charts.min',
        cropper: 'libs/cropper.min',
        localforage: 'libs/localforage',
        moment: 'libs/moment.min',
        messenger: 'libs/messenger',
        progress: 'libs/progressbar.min',
        geocomplete: 'libs/geocomplete',
        youtube: 'libs/youtube',
        owl: 'libs/owl',
        // cryptoJS
        AES: 'libs/cryptoJS/aes',
        MD5: 'libs/cryptoJS/md5',
        // controller
        app: 'controller/app',
        // core
        api: 'controller/core/api',
        config: 'controller/core/config',
        db: 'controller/core/db',
        user: 'controller/core/user',
        // default
        main: 'main',
        // pages
        about: 'controller/pages/about',
        blog: 'controller/pages/blog',
        course: 'controller/pages/course',
        courses: 'controller/pages/courses',
        dashboard: 'controller/pages/dashboard',
        home: 'controller/pages/home',
        page: 'controller/pages/page',
        post: 'controller/pages/post',
        register: 'controller/pages/register',
        shop: 'controller/pages/shop',
        shops: 'controller/pages/shops',
        products: 'controller/pages/shop/products',
        team: 'controller/pages/team',
    },
    shim: {
        'geocomplete': ['jQuery'],
    }
});