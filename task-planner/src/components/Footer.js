
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';
export default function Footer()
{

    return(
        <footer className="footer">
        <div className="contactInfo">
          <div>
            <FaEnvelope className="icon" />
            <p>Email: support@yourtaskmanagement.com</p>
          </div>
          <div>
            <FaMapMarker className="icon" />
            <p>Cape Town, Western cape, 7405</p>
          </div>
          <div>
            <FaPhone className="icon" />
            <p>Phone: +27 810630405</p>
          </div>
        </div>
        <p className="additionalInfo">© 2023 Your Task Management System. All rights reserved.</p>
      </footer>
    );
}