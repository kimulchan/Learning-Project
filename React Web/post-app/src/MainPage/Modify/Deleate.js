import axios from "axios";

function Deleate(Id) {
    console.log(Id);
    axios.delete(`http://18.118.206.83:8080/feed/${Id}`);
}
export default Deleate;