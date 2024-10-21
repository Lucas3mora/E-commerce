
import storeItems from "../data/items.json"
import { StoreItemDetails } from "../components/StoreItemDetails"
import { useParams , Link } from 'react-router-dom';
import {  Container , Image } from "react-bootstrap";





export const Details = () => {
    
 
    
    const { id } = useParams<{id: string; name?:string}>();
    
    const selectedItem = storeItems.find(item => item.id === Number(id)); 

    if (!selectedItem) {
        return <p>Item not found</p>;
    }

    return (
        
        <div>
            <Container fluid className="mx-4 d-flex w-100 me-0">
            
           
            <Link to={`/`}><Image

src={"../src/assests/back.png"}
className="my-1"

alt="Egypt Flag"

width="50px"

height="auto"

fluid

/>
</Link>

<h1 className=" d-flex ms-1 fs-3 my-2" > {selectedItem.name} </h1>


</Container >
            
            <StoreItemDetails {...selectedItem} />
        </div>
    );
}