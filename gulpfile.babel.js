import gulp from "gulp";
import pug from "gulp-pug";

const routes = {
	pug: {
		// src내부 폴더안에 있는 파일들은 컴파일 원하지 않음.
		src: "src/*.pug",
		dest: "build"
		
	}
}
// function 안에 pipe를 만든다. 그후 처리한 파일 저장 destination 추가.
export const pug = () => gulp.src(routes.pug.src).pipe(pug()).pipe(gulp.dest());

export const dev = () => console.log("I will dev");