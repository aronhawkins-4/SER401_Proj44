
package https.gov_fema_ipaws_services.ipaws_capservice;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import oasis.names.tc.emergency.cap._1.Alert;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element ref="{urn:oasis:names:tc:emergency:cap:1.2}alert"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "alert"
})
@XmlRootElement(name = "postCAPRequestTypeDef")
public class PostCAPRequestTypeDef {

    @XmlElement(namespace = "urn:oasis:names:tc:emergency:cap:1.2", required = true)
    protected Alert alert;

    /**
     * Gets the value of the alert property.
     * 
     * @return
     *     possible object is
     *     {@link Alert }
     *     
     */
    public Alert getAlert() {
        return alert;
    }

    /**
     * Sets the value of the alert property.
     * 
     * @param value
     *     allowed object is
     *     {@link Alert }
     *     
     */
    public void setAlert(Alert value) {
        this.alert = value;
    }

}
