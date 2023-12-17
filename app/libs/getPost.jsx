export default async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch Post. Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching post:', error.message);
        throw error; 
    }
}
