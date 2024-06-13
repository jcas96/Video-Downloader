const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(8000, () =>{
    console.log("WORKS");
});

app.get('/downloadvid', async (req, res, next) => {
	try {
		let url = req.query.url;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}
		let info = await ytdl.getInfo(url);
		let name = info.videoDetails.title;
		res.header('Content-Disposition', `attachment; filename="${name}.mp4"`);
		ytdl(url, {quality:'highestaudio'}).pipe(res);


	} catch (err){
		console.error(err);
	}
});
