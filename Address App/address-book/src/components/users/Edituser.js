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
                <div className="form-head">Address Book</div>
                <div className="row-content">
                    <label className="label text" htmlFor="name">FULLNAME</label>
                    <input className="input" type="text" id="name" name="name" value={user.name} onChange={changeValue} placeholder="Your name.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="name">Address</label>
                    <input className="input" type="text" id="address" name="address" value={user.address} onChange={changeValue} placeholder="Your address.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                <div className="row-content">
                <label className="label text" htmlFor="name">City</label>
                
                <input className="input" type="text" id="city" name="city" value={user.city}/>&nbsp;&nbsp;&nbsp;
                </div>
                <div className="row-content">
                <label className="label text" htmlFor="name">STATE</label>
                <select name="selectList" id="selectList">
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                
                </select>
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="name">zipcode</label>
                    <input className="input" type="text" id="zipcode" name="zipcode" value={user.zipcode} onChange={changeValue} placeholder="Your zipcode.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="phonenumber">phone-Number</label>
                    <input className="input" type="text" id="phonenumber" name="phonenumber" value={user.phonenumber} onChange={changeValue} placeholder="phonenumber.." />
                {/* <error className="error">{user.error.name}</error> */}
                </div>
                <div className="buttonParent">
                    
                    <div className="submit-reset">
                    
                        <button type="submit" className="button submitButton" id="submitButton">{user.isUpdate ? 'Update' : 'Submit'} Update</button>
                                          </div>
                </div >
            </form >
        </div >
    </div >
);
};

export default AddUser;