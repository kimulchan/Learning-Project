import axios from 'axios';

function CreatePost({title,content}) {
    axios.post('http://18.118.206.83:8080/feed',{
        title:title,
        content: content
    });

}
export default CreatePost;