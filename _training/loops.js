for (var i = []; i.length < 3; i.push(1)) {
    const j = Array.from(i); // нужно создать новый массив и поместить его в замыкание
    setTimeout(function() {
        console.log(j);
    },1000)
}
