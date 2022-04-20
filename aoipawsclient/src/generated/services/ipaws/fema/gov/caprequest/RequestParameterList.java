
package services.ipaws.fema.gov.caprequest;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * &lt;p&gt;Java class for requestParameterList complex type.
 * 
 * &lt;p&gt;The following schema fragment specifies the expected content contained within this class.
 * 
 * &lt;pre&gt;
 * &amp;lt;complexType name="requestParameterList"&amp;gt;
 *   &amp;lt;complexContent&amp;gt;
 *     &amp;lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&amp;gt;
 *       &amp;lt;sequence&amp;gt;
 *         &amp;lt;element name="requestAPI" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&amp;gt;
 *         &amp;lt;element name="requestOperation" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&amp;gt;
 *         &amp;lt;element name="parameters" type="{http://gov.fema.ipaws.services/caprequest}parameterListItem" maxOccurs="unbounded" minOccurs="0"/&amp;gt;
 *       &amp;lt;/sequence&amp;gt;
 *     &amp;lt;/restriction&amp;gt;
 *   &amp;lt;/complexContent&amp;gt;
 * &amp;lt;/complexType&amp;gt;
 * &lt;/pre&gt;
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
     * &lt;p&gt;
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a &lt;CODE&gt;set&lt;/CODE&gt; method for the parameters property.
     * 
     * &lt;p&gt;
     * For example, to add a new item, do as follows:
     * &lt;pre&gt;
     *    getParameters().add(newItem);
     * &lt;/pre&gt;
     * 
     * 
     * &lt;p&gt;
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
