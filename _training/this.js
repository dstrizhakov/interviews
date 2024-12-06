const obj = {
    name: 'Max',
    greet() {
        console.log(this.name);
    }
}

obj.greet();

const fn = obj.greet.bind(obj);

fn();