// // promise.all() .allSeattled(), .any .race, .resolve, .reject
//  async function loadDashboardData() {
//   const results = await Promise.allSettled([
//     fetch('https://api.github.com/users/octocat'),         // GitHub user info
//     fetch('https://jsonplaceholder.typicode.com/posts/1'), // Sample post
//     fetch('https://dog.ceo/api/breeds/image/random')       // Random dog image
//   ]);

//   const [githubRes, postRes, dogRes] = results;

//   // GitHub
//   if (githubRes.status === 'fulfilled') {
//     const user = await githubRes.value.json();
//     console.log('🐙 GitHub User:', user.login, '| Followers:', user.followers);
//   } else {
//     console.error('❌ GitHub request failed:', githubRes.reason);
//   }

//   // JSONPlaceholder Post
//   if (postRes.status === 'fulfilled') {
//     const post = await postRes.value.json();
//     console.log('📝 Post Title:', post.title);
//   } else {
//     console.error('❌ Post request failed:', postRes.reason);
//   }

//   // Dog Image
//   if (dogRes.status === 'fulfilled') {
//     const dog = await dogRes.value.json();
//     console.log('🐶 Dog Image URL:', dog.message);
//   } else {
//     console.error('❌ Dog image request failed:', dogRes.reason);
//   }

//   console.log('✅ All API requests finished (some may have failed)');
// }

// loadDashboardData();



// async function loadData() {
//    try{
//       let res = await Promise.race([
//          fetch('https://api.github.com/users/octocat'),         // GitHub user info
//     fetch('https://jsonplaceholder.typicode.com/posts/1'), // Sample post
//     fetch('https://dog.ceo/api/breeds/image/random')
//       ])
//       console.log(res);
      

//    }catch(err){
//       console.log("err",err);
      
//    }
// }

// loadData()



// async function loadData() {
//    try{
//       let res = await Promise.any([
//         fetch('https://this-domain-does-not-exist-12345.com/data'),
//       fetch('https://invalid-api-987654321.xyz/test'),
//       fetch('https://no-such-server-qwerty.io/info')
//       ])
//       console.log(res);
      

//    }catch(err){
//       console.log("err",err);
      
//    }
// }

// loadData()


// const loadData  = async ()=>{
//    const p1 = fetch('https://api.github.com/users/octocat');     // GitHub user info
//    const p2 =  fetch('https://jsonplaceholder.typicode.com/posts/1'); // Sample post
//    const p3 =  fetch('https://dog.ceo/api/breeds/image/random')  
//    try{
//       const [res1,res2,res3] = await Promise.all([p1,p2,p3]);
//       console.log("RES",res1,res2,res3);
//       const convertToJson = await Promise.all([res1.json(),res2.json(),res3.json()])
//       console.log(convertToJson);
      

//    }catch(err){
//       console.log(err);
      
//    }
   
// }
// loadData()

// const loadData  = async ()=>{
//    const p1 = fetch('https://api.github.com/users/octocat');     // GitHub user info
//    const p2 =  fetch('https://invalid-api-987654321.xyz/test'); // Sample post
//    const p3 =  fetch('https://dog.ceo/api/breeds/image/random')  
//    try{
//       const fetchAllData = await Promise.allSettled([p1,p2,p3]);
//       console.log("RES",fetchAllData);
//       const [data1,data2,data3] = fetchAllData;
//       if(data1.status === "fulfilled"){
//          console.log(data1);
         
//       }
//       if(data2.status === "fulfilled"){
//          console.log(data2);
//       }
//       if(data3.status === "fulfilled"){
//          console.log(data3);
         
//       }else{
//          console.log(data1,data2,data3);
         
//       }
      

//    }catch(err){
//       console.log(err);
      
//    }
   
// }
// loadData()


const loadData = async()=>{
   try{
      const firstRes = await Promise.race([
      fetch('https://api.github.com/users/octocat'),         // GitHub user info
    fetch('https://jsonplaceholder.typicode.com/posts/1'), // Sample post
    fetch('https://dog.ceo/api/breeds/image/random') 
   ]);
   console.log(firstRes);
   
   }catch(err){
      console.log(err);
   }
   

}
loadData();