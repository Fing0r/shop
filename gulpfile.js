const { src, dest, watch, parallel, series } = require('gulp');

const scss          = require('gulp-sass')(require('sass'));
const concat        = require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');
const uglify        = require('gulp-uglify');
const imagemin      = require('gulp-imagemin');
const del           = require('del');
const browserSync   = require('browser-sync').create();
const fileInclude   = require('gulp-file-include');
const svgSprite     = require('gulp-svg-sprite');
const replace       = require('gulp-replace');
const cheerio       = require('gulp-cheerio');
const beautify      = require('gulp-beautify');


const beautifyHtml = () => {
  return src('app/*.html')
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(dest('app'))
    .pipe(browserSync.stream())
};

const removeEmptyLines = () => {
    return src('app/*.html')

        .pipe(replace(/^\s*\n/mg, ''))

        .pipe(dest('app'))

        .pipe(browserSync.stream());
}

//svgSprite
const svgSprites = () => {
  return src(['app/images/icons/**.svg'])

  .pipe(cheerio({
    run: function($) {
      $('[fill]').removeAttr('fill');
      $('[strike]').removeAttr('stroke');
      $('[style]').removeAttr('style');
    },
    parserOptions: {xmlMode: true}
  }))

  .pipe(replace('&gt;', '>'))

  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../sprite.svg"
      }
    },
  }))

  .pipe(dest('app/images'));
}

//htmlInclude
const htmlInclude = () => {
  // return src(['app/html/*.html'])
  return src('app/html/**/*.html')
    .pipe(fileInclude({
        prefix: '@',
        basepath: '@file',
        context: {
            arr: ['test1', 'test2', 'test3', 'test4', 'test5'],
            menu: ['Доставка', 'О нас', 'Новости', 'Контакты', 'Акции', 'Вакансии', 'Отзывы', 'Публичная оферта'],
            catalog: ['Овощи и фрукты', 'Бакалея', 'Молочные продукты', 'Хлеб', 'Мясо', 'Колбаса', 'Рыба', 'Алкоголь', 'Напитки', 'Торты', 'Мясо', 'Чай, кофе'],
        }
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream());
  }

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/nouislider/dist/nouislider.js',
    'node_modules/simplebar/dist/simplebar.js',
    'node_modules/select2/dist/js/select2.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'node_modules/swiper/swiper-bundle.js',
    'app/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function images() {
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
	})
  ]))
  .pipe(dest('dist/images'))
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function cleanDist() {
  return src('dist')
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
  watch(['app/html/**/*.html'], htmlInclude);
  watch(['app/scss/**/*.scss']).on('change', browserSync.reload);
  watch(['app/images/icons/**.svg'], svgSprites);
}

exports.beautifyHtml = beautifyHtml;
exports.removeEmptyLines = removeEmptyLines;

exports.svgSprites = svgSprites;
exports.htmlInclude = htmlInclude;
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, svgSprites, htmlInclude, scripts, browsersync, watching);

