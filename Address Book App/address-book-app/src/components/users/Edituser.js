import React, { useState ,useEffect} from "react";
import logo from '../../Assets/images/logo.png'
import './Adduser.css';
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
const AddUser = () => {
  let history = useHistory();
  
  const { id } = useParams();
  const [user, setUser] = useState({
    Fullname: '',
      
       
        address: '',
        city: '',
        state:'',
        zipcode: '',
        phonenumber:'',
       
        address: '',
        city: '',
        state:'',
        zipcode: '',
        phonenumber:'',
        
  });

  
  const onInputChange =  async event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };

    const changeValue = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    };
    useEffect(()=>{
        loadUser();
    },[])
    const onCheckChange = (name) => {
        let index = user.departMentValue.indexOf(name);

        let checkArray = [...user.departMentValue]
        if (index > -1)
            checkArray.splice(index, 1)
        else
            checkArray.push(name);
        setUser({ ...user, departMentValue: checkArray });
    }
    const getChecked = (name) => {
        return user.departMentValue && user.departMentValue.includes(name);
    }
  return (  
    <div className="payroll-main">
        <header className='header-content header'>
            <div className="logo-content">
                <img src={logo} alt="" />
                <div>
                    <span className="emp-text">ADDRESS</span> <br />
                    <span className="emp-text emp-payroll">BOOK</span>
                </div>
            </div>
        </header>
        <div className="form-content">
            <form className="form-head" action="#" onSubmit={onSubmit}>
                
                <div className="form-header">PERSON ADDRESS FORM</div>

                <div className="row-content">
                    <label className="label text" htmlFor="name">FullName</label><br/>
                    <input className="input" type="text" id="name" name="name" value={user.name} onChange={changeValue} placeholder="Your name.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="name">Address</label>
                    <input className="input" type="text" id="address" name="address" value={user.address} onChange={changeValue} placeholder="Your address.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                <div class="row-content">&nbsp;
                <div class="row">
                <div class="label-city">
                        <label class="city" for="city">City</label><br/>&nbsp;
                        <select id="city" name="city" value={user.city} onChange={changeValue}>
                <option value="Davangere">Davangere</option>
                    <option value="Mysore">Mysore</option>
                </select>
                </div>
               <div class="label-state">
                        <label class="state" for="state">State</label><br/>&nbsp;
                        <select id="state" name="state" value={user.state} onChange={changeValue}>
                <option value="KARNATAKA">KARNATAKA</option>
                    <option value="TAMILNADU">TAMILNADU</option>
                </select>
                </div>
                
                
                    <div class="label-zip">
                        <label class="zip" for="zipcode">Zipcode</label><br/>&nbsp;
                        <input class="input" type="zipcode" id="zipcode" name="zipcode" value={user.zipcode} onChange={changeValue} placeholder="Your zipcode.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                </div>
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="phonenumber">phone-Number</label>
                    <input className="input" type="text" id="phonenumber" name="phonenumber" value={user.phonenumber} onChange={changeValue} placeholder="phonenumber.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                <div className="buttonParent">
                    
                    <div className="submit-reset">
                    
                        <button type="submit" className="button submitButton" id="submitButton">{user.isUpdate ? 'Update' : ''}Update</button>
                        
                                          </div>
                </div >
            </form >
        </div >
    </div >
);
};

export default AddUser;