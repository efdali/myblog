module.exports.formatDate=(date)=>{
    date=date.toString();
    let dates=date.split(" ");
    return dates[2]+" "+dates[1]+", "+dates[3];
}