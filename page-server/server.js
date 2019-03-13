const Web = require('express');

const app = Web();

var static_folder = 'build';

var port = 8080;

var cport=false,cfold=false,clog=false;

for(var i=0;i < process.argv.length;i++){
	var v = process.argv[i];
	if(v === "-log" && !clog) {
		clog=true;
	}
	if(v === "-p" && !cport){
		if(process.argv.length < i + 1 || process.argv.length === i) {
			throw new Error('fatal: incorrect argument construction ( usage server -p <port>)');
		} else {
			port = parseInt(process.argv[i+1]);
			cport = true;
		}
	}
	if(v === "-cf" && !cfold) {
		if(process.argv.length < i + 1 || process.argv.length === i) {
			throw new Error('fatal: incorrect argument construction ( usage server -cf <dir>)');
		} else {
			static_folder=process.argv[i+1];
			cfold = true;
		}
		break;
	}

}
// const port=8080;

app.use(Web.static(static_folder));

app.get('*',(r,w) => {
	w.sendFile(`${static_folder}/index.html`,{ root: '.'});
	if(clog) {
		console.log(`url: ${r.path} | ${r.method} |`);
	}
});

app.listen(port, () => {
	console.log(`server listen on ${port}, static folder - ${static_folder}`);
});

