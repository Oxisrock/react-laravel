import React, { useEffect, useState  } from 'react';
import customerServices from "../../services/Customer"

function Form(){

    const [ first_name, setFirst_name ] = useState(null);
    const [ last_name, setLast_name ] = useState(null);
    const [ dni, setDni ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ city, setCity ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ phone, setPhone ] = useState(null);

    const saveCustomer = async () => {

        const data = {
            first_name,last_name,dni, email, city, address, phone,
        }
        const res = await customerServices.save(data);

        if (res.success) {
            alert(res);
            console.log(res);
        }
        else {
            alert(res);
            console.log(res);
        }
    }

    return(
        <div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" placeholder="First Name"
                           onChange={(event)=>setFirst_name(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name"
                           onChange={(event) => setLast_name(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Dni</label>
                    <input type="text" className="form-control" placeholder="Dni"
                           onChange={(event) => setDni(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="you@example.com"
                           onChange={(event) => setEmail(event.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="address">City</label>
                    <input type="text" className="form-control" placeholder="1234 Main St"
                           onChange={(event) => setCity(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" placeholder="1234 Main St"
                           onChange={(event) => setAddress(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="phone">Phone </label>
                    <input type="text" class="form-control" placeholder="123467890"
                           onChange={(event) => setPhone(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-block" type="submit" onClick={()=>saveCustomer()}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Form;
