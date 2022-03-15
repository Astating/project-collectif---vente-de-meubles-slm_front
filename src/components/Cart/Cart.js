import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Cart() {
  // du code js ou autre condition blablabla
  return (
    // html + js

  
/*indication du nombre de produit + tableau qui donne la valeur du produit et la quantité et un bouton pour confirmé la commande */ 
<div class="dropdown">

    <div id="cart">
        <p><span id="in-cart-items-num">0</span> Articles</p>
    </div>

    <ul id="cart-dropdown" hidden>
        <li id="empty-cart-msg"><a>Votre panier est vide</a></li>
        <li class="go-to-cart hidden"><a href="/panier/">Voir le panier</a></li>
    </ul>
<table class="table">
    <thead>
        <tr><th>Article</th><th>Prix</th><th>Quantité</th></tr>
    </thead>
    <tbody id="cart-tablebody"></tbody>
</table>

<p>Sous total : <span class="subtotal"></span>€</p>

<button id="confirm-command">Passer la commande</button>

</div>
        )
} 
