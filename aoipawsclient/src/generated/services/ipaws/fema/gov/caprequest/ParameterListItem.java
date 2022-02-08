
package services.ipaws.fema.gov.caprequest;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for parameterListItem complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="parameterListItem"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="parameterName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="comparisonOp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="parameterValue" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element name="logicalOp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "parameterListItem", propOrder = {
    "parameterName",
    "comparisonOp",
    "parameterValue",
    "logicalOp"
})
public class ParameterListItem {

    protected String parameterName;
    protected String comparisonOp;
    protected List<String> parameterValue;
    protected String logicalOp;

    /**
     * Gets the value of the parameterName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getParameterName() {
        return parameterName;
    }

    /**
     * Sets the value of the parameterName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setParameterName(String value) {
        this.parameterName = value;
    }

    /**
     * Gets the value of the comparisonOp property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getComparisonOp() {
        return comparisonOp;
    }

    /**
     * Sets the value of the comparisonOp property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setComparisonOp(String value) {
        this.comparisonOp = value;
    }

    /**
     * Gets the value of the parameterValue property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the parameterValue property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getParameterValue().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getParameterValue() {
        if (parameterValue == null) {
            parameterValue = new ArrayList<String>();
        }
        return this.parameterValue;
    }

    /**
     * Gets the value of the logicalOp property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLogicalOp() {
        return logicalOp;
    }

    /**
     * Sets the value of the logicalOp property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLogicalOp(String value) {
        this.logicalOp = value;
    }

}
