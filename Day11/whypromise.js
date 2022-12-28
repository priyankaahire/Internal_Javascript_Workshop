const uploader = new Promise( downloadVideo(ur))
.then ( video => removedAudio())
.then ( video => downloadAudio(url2))
.then ( video => replaceAudio(video))
.then ( video => uploadVideo(url3))
.catch( ohh => console.log("Something went wrong"))
.finally (regardless => doThis());

//* Each of then return a promise it is a serious of promises