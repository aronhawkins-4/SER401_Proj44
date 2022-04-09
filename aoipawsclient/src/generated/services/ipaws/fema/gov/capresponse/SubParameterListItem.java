
package services.ipaws.fema.gov.capresponse;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for subParameterListItem complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="subParameterListItem"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="subParameterName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="subParameterValue" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "subParameterListItem", propOrder = {
    "subParameterName",
    "subParameterValue"
})
public class SubParameterListItem {

    protected String subParameterName;
    protected String subParameterValue;

    /**
     * Gets the value of the subParameterName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSubParameterName() {
        return subParameterName;
    }

    /**
     * Sets the value of the subParameterName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSubParameterName(String value) {
        this.subParameterName = value;
    }

    /**
     * Gets the value of the subParameterValue property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSubParameterValue() {
        return subParameterValue;
    }

    /**
     * Sets the value of the subParameterValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSubParameterValue(String value) {
        this.subParameterValue = value;
    }

}
