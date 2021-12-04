import React, {useState} from "react";
import Contact from "../contact/Contact";
import "./contacts.css"
const Contacts = ({contacts}) => {
    const [searchItem, setSearchItem] = useState("");

    function handleSearchChange(event){
        setSearchItem(event.target.value);
    }

    const contactsFilter = contacts.filter((contact) => {
      return (
        contact.lastName.toLowerCase().includes(searchItem.toLowerCase()) ||
        contact.firstName.toLowerCase().includes(searchItem.toLowerCase())
      );
    });

    return (
        <div>
            <input className="search" type="text" placeholder='search' onChange={handleSearchChange}/>
      { contactsFilter.map((contact, i) => {
                    return <Contact item = {contact} key={contact.phone} />;
                })}
        </div>
    )
}
export default Contacts;