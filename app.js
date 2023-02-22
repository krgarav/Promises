const posts = [{title: 'POST1'},{createdAt: new Date().getTime()}];
function createPost(post) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
        let createdAt=new Date().getTime()
        posts.push({title: post},{createdAt: createdAt});
        resolve( `${post}  :  ${new Date()}`)
        }, 3000)

    }) 

}

function updateLastUserActivityTime(){
return  new Promise((resolve,reject)=>{

		setTimeout(()=>{

		resolve(`last updated user :${new Date()}`)

		},2000)

})

}

function deletePromise(){
    return  new Promise((resolve,reject)=>{
    
            setTimeout(()=>{
                posts.pop()
            resolve()
    
            },2000)
    
    })
}
createPost("Post1").then((msg)=>{console.log(msg)})
.then(updateLastUserActivityTime).then((msg)=>{console.log(msg)})
.then (()=>{return createPost("Post2")}).then((msg)=>{console.log(msg)})
.then(updateLastUserActivityTime).then((msg)=>{console.log(msg)})
.then(deletePromise)
console.log(posts)