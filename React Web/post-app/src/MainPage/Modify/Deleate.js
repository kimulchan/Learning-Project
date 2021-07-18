import axios from "axios";

function Deleate(Id) {
    console.log(Id);
    axios.delete(`http://10.156.147.162:8080/feed/${Id}`);
}
export default Deleate;