export function Book(title,author,page){
    this.title = title;
    this.author = author;
    this.page = page;
    this.toString = toString;
}

function toString(){
    // return this.title + ' de ' + this.author + ', si are '+ this.page + ' pagini.'
    return `${this.title} de   ${this.author}, 
    si are ${this.page} pagini.`
}

export function citeste(){
    return "Acum citesc o carte";
}
// // export {Book};
// export {Book, citeste};