import React, { useEffect, useState } from 'react';
import customerServices from "../../services/Customer"

function Edit(props){
    const [id,setId] = useState(null);
    const [ first_name, setFirst_name ] = useState(null);
    const [ last_name, setLast_name ] = useState(null);
    const [ dni, setDni ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ city, setCity ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ phone, setPhone ] = useState(null);

    useEffect(() => {

        async function fetchDataCustomer() {
            let id = props.match.params.id;

            const res = await customerServices.get(id);
            if(res.success) {
                const data = res.data;
                setId(data.id);
                setFirst_name(data.first_name);
                setLast_name(data.last_name);
                setDni(data.dni);
                setEmail(data.email);
                setCity(data.city);
                setAddress(data.direction);
                setPhone(data.phone);

            }else {
                alert(res.message);
            }
        }
        fetchDataCustomer();

    },[]);
    const updateCustomer = async () => {
        const data = {
            id, first_name, last_name, dni, email, city, address, phone
        }
        const res = await customerServices.update(data);

        if(res.success) {
            console.log(res.data);
            alert(res.message);
        }else {
            alert(res.message);
        }
    }
    return (
        <div>
            <h4>Edit customer</h4>
            <hr/>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" value={first_name} onChange={(event)=>setFirst_name(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Last Name</label>
                    <input type="text" className="form-control" value={last_name} onChange={(event)=>setLast_name(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="dni">Dni</label>
                    <input type="text" className="form-control" value={dni} onChange={(event)=>setDni(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" value={email} onChange={(event)=>setEmail(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" placeholder="New york" value={city} onChange={(event)=>setCity(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main St" value={address} onChange={(event)=>setAddress(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="address">Phone </label>
                    <input type="text" className="form-control" placeholder="123467890" value={phone} onChange={(event)=>setPhone(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <button className="btn btn-primary btn-block" type="submit" onClick={() => updateCustomer()}>Save</button>
                </div>
            </div>
        </div>
    )

}

export default Edit;
