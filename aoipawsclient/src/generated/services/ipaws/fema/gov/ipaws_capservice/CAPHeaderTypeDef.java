
package services.ipaws.fema.gov.ipaws_capservice;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * &lt;p&gt;Java class for anonymous complex type.
 * 
 * &lt;p&gt;The following schema fragment specifies the expected content contained within this class.
 * 
 * &lt;pre&gt;
 * &amp;lt;complexType&amp;gt;
 *   &amp;lt;complexContent&amp;gt;
 *     &amp;lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&amp;gt;
 *       &amp;lt;sequence&amp;gt;
 *         &amp;lt;element name="logonUser" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&amp;gt;
 *         &amp;lt;element name="logonCogId" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/&amp;gt;
 *       &amp;lt;/sequence&amp;gt;
 *     &amp;lt;/restriction&amp;gt;
 *   &amp;lt;/complexContent&amp;gt;
 * &amp;lt;/complexType&amp;gt;
 * &lt;/pre&gt;
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "logonUser",
    "logonCogId"
})
@XmlRootElement(name = "CAPHeaderTypeDef")
public class CAPHeaderTypeDef {

    @XmlElementRef(name = "logonUser", namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", type = JAXBElement.class, required = false)
    protected JAXBElement<String> logonUser;
    @XmlElementRef(name = "logonCogId", namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", type = JAXBElement.class, required = false)
    protected JAXBElement<Integer> logonCogId;

    /**
     * Gets the value of the logonUser property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getLogonUser() {
        return logonUser;
    }

    /**
     * Sets the value of the logonUser property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setLogonUser(JAXBElement<String> value) {
        this.logonUser = value;
    }

    /**
     * Gets the value of the logonCogId property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link Integer }{@code >}
     *     
     */
    public JAXBElement<Integer> getLogonCogId() {
        return logonCogId;
    }

    /**
     * Sets the value of the logonCogId property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link Integer }{@code >}
     *     
     */
    public void setLogonCogId(JAXBElement<Integer> value) {
        this.logonCogId = value;
    }

}
