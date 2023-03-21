import { useState, useEffect } from "react"
import { Input } from "@material-ui/core";
import GetAddress from "./getAddress"
const SearchBox = () => {
    const [location, setLocation] = useState("");
    const [list, setList] = useState([]);
    const EnterHandling = (event) =>{
        if (event.key === "Enter") {
            setLocation(event.target.value);
        }
    }
    useEffect(() => {
        async function fetchAddress() {
            if (location.length) {
                const response = await GetAddress(location);
                setList(response);
                console.log(response);
                console.log(list);
            }
        }
        fetchAddress();
    }, [location]);
    useEffect(() => {
        async function showList() {
            let displayList = await list;
            displayList.map((e) => {
                return <h1>e</h1>;
            });
        }
        showList();
    }, [list]);
    return (
        <div className = "SearchBox">
            <h1 className = "Label">Location Search</h1>
            <label className = "SearchLabel" title = "Location">
                <Input type = "text" onKeyDown = {EnterHandling}></Input>
            </label>
            <div>{list}</div>
        </div>
    )
}
export default SearchBox;