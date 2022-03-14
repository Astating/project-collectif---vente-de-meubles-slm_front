import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./ProductPage.css";
import axios from "axios";

const ProductPage = () => {
    const { id } = useParams();
    // usestate est une variable qui regit les changements d'etat du param setData
    const [data, setData] = useState([])
    // Créer une constante qui fait une requete API pour récupérer les données 
const catalog = () =>{
  const url = "http://localhost:8000/catalog";
  axios.get(url).then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
}


/*    const catalogue = [
        {
          id: 7,
          title: "Djibouti",
          description:
            "Manguier (Mangifera Indica), Panneaux de fibres de moyenne densité (Bois mélangés) - Inde",
          image:
            "images/petit-meuble-de-rangement-3-tiroirs-sculptes-1000-13-28-199780_1.png",
          price: "59.99",
          dimension: "65x30x26",
          stock: true,
          type: "Closet",
          color: "Brown",
          condition: "Used",
          material: "Wood",
        },
        {
          id: 8,
          title: "Elvis",
          description:
            "Craquez pour l'élégance du canapé-lit 3 places en velours vert ELVIS. Ses lignes vintage sont soulignées par un piétement oblique en hêtre massif qui s'inspire du mobilier scandinave. On apprécie son coloris vert, résolument tendance, associé à la douceur du velours. Son confort ferme vous offrira une bonne assise pour savourer vos moments de détente. Et prolongez ces instants grâce à ce canapé convertible qui se transformera en couchage d'appoint. Style et praticité font bien la paire !",
          image:
            "images/canape-lit-3-places-en-velours-vert-1000-16-15-198168_1.png",
          price: "200.0",
          dimension: "H84 x L214 x PR87",
          stock: true,
          type: "Couch",
          color: "Grey",
          condition: "Good",
          material: "Wool",
        },
        {
          id: 9,
          title: "Iceberg",
          description:
            "Délicieusement rétro, ce fauteuil style scandinave jaune ICEBERG en bois mettra une belle note de gaieté dans votre salon. Monté sur des pieds obliques, ce fauteuil vintage vous offrira une assise confortable avec son dossier haut et ses accoudoirs. Craquez pour son coloris pop qui rehaussera votre déco !",
          image: "images/fauteuil-style-scandinave-jaune-1000-3-40-138825_1.png",
          price: "100.0",
          dimension: "H91 x L69 x PR80",
          stock: true,
          type: "Chair",
          color: "Yellow",
          condition: "Good",
          material: "Leather",
        }
      ];

      const [ product ] = catalogue.filter((n) => n.id.toString() === id)
 */      
/* const [ product ] = catalog.filter((n) => n.id.toString() === id)
 */

    return (
      <Container>
      <Row>
        <Col className="bg-warning image-container" md={8}><img id="product-image" alt="" src="https://www.pokepedia.fr/images/2/20/Salam%C3%A8che-PDMDX.png"/></Col>
        <Col md={4}>
          <aside>
             <h3>{catalog.title}</h3>
             <p>Dimensions: {catalog.dimension}</p>
            <p>Type: {catalog.type}</p>
             <p>Material: {catalog.material}</p>
            <p>Color: {catalog.color}</p>
            <p>Condition: {catalog.condition}</p>
            <p>{catalog.stock ? "EN STOCK!" : "RUPTURE DE STOCK!"}</p>
          </aside>
        </Col>
      </Row>
      <Row>
{/*         <p>{product.description}</p>
 */}      </Row>
    </Container>
    )
}

export default ProductPage;