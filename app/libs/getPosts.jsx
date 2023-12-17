
export default async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
 
    if(!response.ok) {
       throw new Error('failed to fetch Posts')
    }
 
     return await response.json()
 }