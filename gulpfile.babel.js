import gulp from "gulp";
import pug from "gulp-pug";

const routes = {
	pug: {
		// src내부 폴더안에 있는 파일들은 컴파일 원하지 않음.
		src: "src/*.pug"
	}
}

export const pug = () => gulp.src(routes.pug.src);

export const dev = () => console.log("I will dev");