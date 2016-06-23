function referrerParser(def){

  let patterns = [
    [/^https{0,1}:\/\/(?:\w+\.)?google\.[a-z]+/, /q=([^&]+)/],
    [/^https{0,1}:\/\/(?:\w+\.)?yahoo\.[a-z]+/, /p=([^&]+)/],
    [/^https{0,1}:\/\/(?:\w+\.)?yandex\.[a-z]+/, /text=([^&]+)/],
    [/^https{0,1}:\/\/(?:\w+\.)?rambler\.[a-z]+/, /query=([^&]+)/],
    [/^https{0,1}:\/\/(?:\w+\.)?mail\.[a-z]+/, /q=([^&]+)/]
  ];


  let p;
  let result = null;
  for (let k in patterns) {
   p = patterns[k]
   if (def.match(p[0])){
    let m = def.match(p[1]);
    if(m!=null)
      result = decodeURI(m[1]);
   }
  }
 return result;
}
export {referrerParser};

function timeConvert(timestamp_unix){
  let date = new Date( timestamp_unix * 1000 );
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let time = hours + ':' + minutes + ':' + seconds;
  return time;
};
export {timeConvert};