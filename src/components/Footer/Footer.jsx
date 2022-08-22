import React from "react";
import { contactList } from "../../utils/data";

const Footer = () => (
  <div className="Footer">
    <div className="horizontalBar" />
    <ul className="contactList">
      {contactList.map((contact) => (
        <a href={contact.link} key={contact.id} className="contact">
          <img src={contact.icon} alt={"icone de " + contact.id} />
        </a>
      ))}
    </ul>
  </div>
);

export default Footer;
