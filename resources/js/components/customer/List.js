import React, { useEffect, useState } from 'react';

import customerServices from "../../services/Customer";

import { Link } from "react-router-dom";

import  { Redirect } from 'react-router-dom'

function List(){
    const [listCustomer,setListCustomer] = useState([]);

    useEffect(() => {
        async function fetchDataCustomer() {
            const res = await customerServices.listCustomer();
            setListCustomer(res.data);
        }
        fetchDataCustomer();

    },[]);
    const onClickDelete = async (i,id) => {
        var yes = confirm("Are you sure to delete this customer");
        if(yes === true) {

            const res = await customerServices.delete(id);

            if(res.success) {
                alert(res.message);
                const newList = listCustomer;
                newList.splice(i,1);
                setListCustomer(newList);
                <Redirect to='/customer/index'  />
            }else {

            }

        }
    }
    return (
        <section>
            <table className="table">
                <thead className="thead-dark">
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
                    listCustomer.map((item,i) => {
                        return(
                            <tr>
                                <th scope="row">{i}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.direction}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Link to={"/customer/edit/"+item.id} className="btn btn-light"> Edit </Link>
                                    <Link className="btn btn-danger" onClick={()=> onClickDelete(i,item.id)}> Delete </Link>
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
