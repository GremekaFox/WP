var Posts = [
    {
        id: '1',
        descriprion: 'Order',
        createdAt: new Date(2014, -1, 1, 2, 3, 4, 567),
        adressLine: 'Novolukomle str, 4',
        author: 'Elon',
        hashTags:['Volvo','Tesla']
    },
    {
        id: '2',
        descriprion: 'Order',
        createdAt: new Date(2014, -1, 1, 2, 3, 4, 567),
        adressLine: 'Moskovskaya str, 5',
        author: 'Max',
        hashTags:['WV']
    },
    {
        id: '3',
        descriprion: 'Order',
        createdAt: new Date(2017, 0, 1, 2, 3, 4, 567),
        adressLine: 'Minskaya str, 6',
        author: 'Aplen',
        hashTags:['Volvo','WV','Tesla']
    },
    {
        id: '4',
        descriprion: 'Order',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        adressLine: 'Zenkovskaya str, 7',
        author: 'Jack',
        hashTags:['Mercedes','Audi']
    },
    {
        id: '5',
        descriprion: 'Order',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        adressLine: 'Olivye str, 8',
        author: 'Jone',
        hashTags:['Volvo']
    },
    {
        id: '6',
        descriprion: 'Order',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        adressLine: 'Lenina str, 9',
        author: 'Lace',
        hashTags:['Tesla']
    },
    {
        id: '7',
        descriprion: 'Order',
        createdAt: new Date(2018, 0, 1, 2, 3, 4, 567),
        adressLine: 'Kotov str, 10',
        author: 'Willham',
        hashTags:['Mercedes','Audi','Tesla']
    },
    {
        id: '8',
        descriprion: 'Order',
        createdAt: new Date(2019, 0, 1, 2, 3, 4, 567),
        adressLine: 'Kropotkina str, 11',
        author: 'Fred',
        hashTags:['Volvo','Audi','Tesla']
    },
    {
        id: '9',
        descriprion: 'Order',
        createdAt: new Date(2011, 0, 1, 2, 3, 4, 567),
        adressLine: 'Semenyaki str, 12',
        author: 'Peep',
        hashTags:['WV']
    },
    {
        id: '10',
        descriprion: 'Order',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        adressLine: 'Logoyski str, 13',
        author: 'Monroe',
        hashTags:['Volvo','Tesla']
    },
    {
        id: '11',
        descriprion: 'Order',
        createdAt: new Date(2014, 0, 1, 2, 3, 4, 567),
        adressLine: 'Andreeva str, 14',
        author: 'Zed',
        hashTags:['ZERO','Audi','Mercedes']
    },
    {
        id: '12',
        descriprion: 'Order',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        adressLine: 'Absolute str, 15',
        author: 'Artsyom',
        hashTags:['Tesla','Mercedes']
    },
    {
        id: '13',
        descriprion: 'Order',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        adressLine: 'Znamena str, 16',
        author: 'Katsiaryna',
        hashTags:['Tesla','Audi','ZERO']
    },
    {
        id: '14',
        descriprion: 'Order',
        createdAt:new Date(2017, 0, 1, 2, 3, 4, 567),
        adressLine: 'Ocheen str, 17',
        author: 'Nazar',
        hashTags:['Fiat','Volvo']
    },
    {
        id: '15',
        descriprion: 'Order',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        adressLine: 'Lyubov str, 18',
        author: 'Dasha',
        hashTags:['Scoda']
    },
];


class Service {

    getPosts(skip=0,top= 10, filterConfig){
        if(filterConfig!=undefined){
            let result = Posts.filter(team => team.author === filterConfig.author)
                return result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(skip,skip+top);
        }else {
            return  Posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(skip,skip+top);
        }
    }

   getPost(id) {
        for (var i = 0; i < Posts.length; i++) {
            if (Posts[i].id === id) {
                return Posts[i];
            }
        }
        throw "Couldn't find object with id: " + id;
    }

    validatePost(Object){

        return Object.id != null && Object.descriprion != null && Object.descriprion.length<400
            && Object.author != null && Object.createdAt != null && typeof Object.id === "string" && typeof Object.descriprion === "string"
            && typeof Object.author === "string"

    }

    addAll(posts){
        let result = [], k = 0;
        for(let i = 0; i < posts.length; i++){
            if(this.validatePost(posts[i])){
                this.addPost(posts[i])
            }else {
                result[k] = posts[i];
                k++;
            }
        }
        return result;
    }

    addPost(Object){
       if(this.validatePost(Object)){
           Posts.splice(Posts.length,0,Object);
           return true;
       }else {
           return false;
       }
    }

    clear(){
        Posts.splice(0,Posts.length)
    }

    editPost(id,Post){
        if(this.validatePost(Post)){
            this.getPost(id).descriprion=Post.descriprion;
            return true;
        }else {
            return false;
        }
    }

    removePost(id){
        for (var i = 0; i < Posts.length; i++) {
            if (Posts[i].id === id) {
                return Posts.splice(i,1);
            }
        }
        throw "Couldn't find object with id: " + id;
    }

    constructor(Posts) {
    this._posts = Posts;
   }
}

let a = new Service(Posts);
console.log(a.getPost('1'));
a.removePost('1');

let ob = {
    id:'16',
    descriprion: 'OrderChange',
    createdAt: new Date(2018, 1, 2, 3, 4, 567,23),
    adressLine: 'Lyubovskaya str, 19',
    author: 'Valeri',
}
console.log(a.editPost('3',ob))
console.log(a.validatePost(ob));
var posts = [
    {
        id: '1',
        descriprion: 'Order',
        createdAt: new Date(2014, 1, 1, 2, 3, 4, 567),
        adressLine: 'Mirovskaya str, 20',
        author: 'Loren',
    },
    {
        id: '22',
        descriprion: 'Order',
        createdAt: new Date(2014, 1, 1, 2, 3, 4, 567),
        adressLine: 'Pechem str, 20',
        author: 'Zender',
    }]
console.log(a.getPosts(5,2))
console.log(a.addAll(posts))
console.log(a.getPost('2'))
// console.log(a.clear())