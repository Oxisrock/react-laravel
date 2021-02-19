import React, { useEffect, useState } from 'react';

import customerServices from "../../services/Customer";

import { Link } from "react-router-dom";


function List(){
    const [listCustomer,setListCustomer] = useState([]);

    useEffect(() => {
        async function fetchDataCustomer() {
            const res = await customerServices.listCustomer();
            console.log(res.data);
            setListCustomer(res.data);
        }
        fetchDataCustomer();

    },[]);
    return (
        <section>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    listCustomer.map((item) => {
                        return(
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.direction}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Link to={"/customer/edit/"+item.id} className="btn btn-light"> Edit </Link>
                                    <Link to={"/customer/delete/"+item.id} className="btn btn-danger"> Delete </Link>
                                </td>
                            </tr>
                            )
                        })
                }
                </tbody>
            </table>
        </section>
    )
}

export default List;
