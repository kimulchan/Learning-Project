import axios from 'axios';

function CreatePost({title,content}) {
    axios.post('http://10.156.147.162:8080/feed',{
        title:title,
        content: content
    });

}
export default CreatePost;