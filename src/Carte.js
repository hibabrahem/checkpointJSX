import produit from "./Produit";

import React from 'react'
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";



function Carte() {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Image productImage={produit.image} />
                <Card.Body>
                    <Name productName={produit.name} />
                    <Price productPrice={produit.price} />
                    <Description productDescription={produit.description} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Carte
