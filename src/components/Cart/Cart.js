import React from "react";
import { Table, Button } from "react-bootstrap";

export default function Cart() {
  // du code js ou autre condition blablabla
  return (
    // html + js

  
/*indication du nombre de produit + tableau qui donne la valeur du produit et la quantité et un bouton pour confirmé la commande */ 

   <div class="dropdown">

<Table striped bordered hover size="sm"  class="table">
    <div id="cart">
        <p><span id="in-cart-items-num">0</span> Articles</p>
    </div>

    <ul id="cart-dropdown" hidden>
        <li id="empty-cart-msg"><a>Votre panier est vide</a></li>
        <li class="go-to-cart hidden"><a href="/panier/">Voir le panier</a></li>
    </ul>
    <thead>
        <tr><th>Article</th><th>Prix</th><th>Quantité</th></tr>
    </thead>
    <tbody id="cart-tablebody"></tbody>
</Table>

<p>Sous total : <span class="subtotal"></span>€</p>

<Button variant="warning" id="confirm-command">Passer la commande</Button>

</div>
/*<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Prix</th>
      <th>quantité</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>*/
        )
} 
