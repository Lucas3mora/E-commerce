
import { Col, Row  } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
import Header from "../components/Header"


export function Store() {
    return (
    <>
    <Header/>
    <h1 className="my-5 py-5 mx-5 text-dark fw-bold ">Kits Store</h1>
    <Row  md={0} xs={2} lg={3} className="gy-4 my-5 mx-4">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
        ))}
    </Row>
    </>
    )

}
