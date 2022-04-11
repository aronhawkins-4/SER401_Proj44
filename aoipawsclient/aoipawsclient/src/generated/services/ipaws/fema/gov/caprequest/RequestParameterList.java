
package services.ipaws.fema.gov.caprequest;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for requestParameterList complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="requestParameterList"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="requestAPI" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="requestOperation" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="parameters" type="{http://gov.fema.ipaws.services/caprequest}parameterListItem" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "requestParameterList", propOrder = {
    "requestAPI",
    "requestOperation",
    "parameters"
})
public class RequestParameterList {

    protected String requestAPI;
    protected String requestOperation;
    protected List<ParameterListItem> parameters;

    /**
     * Gets the value of the requestAPI property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRequestAPI() {
        return requestAPI;
    }

    /**
     * Sets the value of the requestAPI property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRequestAPI(String value) {
        this.requestAPI = value;
    }

    /**
     * Gets the value of the requestOperation property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRequestOperation() {
        return requestOperation;
    }

    /**
     * Sets the value of the requestOperation property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRequestOperation(String value) {
        this.requestOperation = value;
    }

    /**
     * Gets the value of the parameters property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the parameters property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getParameters().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ParameterListItem }
     * 
     * 
     */
    public List<ParameterListItem> getParameters() {
        if (parameters == null) {
            parameters = new ArrayList<ParameterListItem>();
        }
        return this.parameters;
    }

}
