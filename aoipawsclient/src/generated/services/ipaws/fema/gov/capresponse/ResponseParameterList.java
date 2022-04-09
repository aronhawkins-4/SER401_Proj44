
package services.ipaws.fema.gov.capresponse;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for responseParameterList complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="responseParameterList"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element ref="{http://gov.fema.ipaws.services/capresponse}parameterListItem" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element name="ResponseOperation" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ResponseType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "responseParameterList", propOrder = {
    "parameterListItem",
    "responseOperation",
    "responseType"
})
public class ResponseParameterList {

    protected List<ParameterListItem> parameterListItem;
    @XmlElement(name = "ResponseOperation")
    protected String responseOperation;
    @XmlElement(name = "ResponseType")
    protected String responseType;

    /**
     * Gets the value of the parameterListItem property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the parameterListItem property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getParameterListItem().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ParameterListItem }
     * 
     * 
     */
    public List<ParameterListItem> getParameterListItem() {
        if (parameterListItem == null) {
            parameterListItem = new ArrayList<ParameterListItem>();
        }
        return this.parameterListItem;
    }

    /**
     * Gets the value of the responseOperation property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getResponseOperation() {
        return responseOperation;
    }

    /**
     * Sets the value of the responseOperation property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setResponseOperation(String value) {
        this.responseOperation = value;
    }

    /**
     * Gets the value of the responseType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getResponseType() {
        return responseType;
    }

    /**
     * Sets the value of the responseType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setResponseType(String value) {
        this.responseType = value;
    }

}
