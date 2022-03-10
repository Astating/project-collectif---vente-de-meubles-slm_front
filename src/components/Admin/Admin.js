import React from "react";
import { Table, Button } from "react-bootstrap";

export default function Admin(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Material</th>
                    <th>Type</th>
                    <th>Dimension</th>
                    <th>Color</th>
                    <th>Image</th>
                    <th>Condition</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ props.id }</td>
                    <td>{ props.title }</td>
                    <td>{ props.description }</td>
                    <td>{ props.material }</td>
                    <td>{ props.type }</td>
                    <td>{ props.dimension }</td>
                    <td>{ props.color }</td>
                    <td>{ props.image }</td>
                    <td>{ props.condition }</td>
                    <td>{ props.price }</td>
                    <td>{ props.stock }</td>
                    <td>
                        <Button variant="warning">Change</Button>
                        <Button variant="danger">Delete</Button>
                    </td>
                </tr>
                
            </tbody>
        </Table>
    )
}