
import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
export function Store() {
    return (
    <>
    <h1 className="my-5 text-light fw-bold">Kits Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3 my-5">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
        ))}
    </Row>
    </>
    )

}
