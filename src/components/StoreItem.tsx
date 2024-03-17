import { Button, Card } from "react-bootstrap"

import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    discount?: string
}
export function StoreItem ({id, name , price , imgUrl}:
    StoreItemProps) {
        const {
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
        } = useShoppingCart()
        const quantity = getItemQuantity(id)
        return (
            <Card>
                <Card.Img
                variant="top"
                src={imgUrl}
                height="460px"
                style={{objectFit: "cover"}}
                />
                <Card.Body className="d-flex flex-column bg-light">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-1.5 fw-bold">{name}</span>
                        <span className="ms-2 text-muted fw-bold">{formatCurrency(price)}</span>
                    </Card.Title>
                    <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100 fst-italic" onClick={()=> increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              
              <Button  onClick={()=> removeFromCart(id) }
                
                variant="danger"
                size="sm"
                
                
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
              </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}