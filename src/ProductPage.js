import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();

    return (<h1>test {id}</h1>)
}

export default ProductPage;