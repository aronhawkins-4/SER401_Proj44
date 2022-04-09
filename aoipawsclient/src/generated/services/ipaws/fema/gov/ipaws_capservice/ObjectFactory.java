
package services.ipaws.fema.gov.ipaws_capservice;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;
import services.ipaws.fema.gov.caprequest.RequestParameterList;
import services.ipaws.fema.gov.capresponse.ResponseParameterList;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the services.ipaws.fema.gov.ipaws_capservice package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _GetRequestTypeDef_QNAME = new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "getRequestTypeDef");
    private final static QName _GetResponseTypeDef_QNAME = new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "getResponseTypeDef");
    private final static QName _GetMessageTypeDef_QNAME = new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "getMessageTypeDef");
    private final static QName _PostCAPResponseTypeDef_QNAME = new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "postCAPResponseTypeDef");
    private final static QName _CAPHeaderTypeDefLogonUser_QNAME = new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "logonUser");
    private final static QName _CAPHeaderTypeDefLogonCogId_QNAME = new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "logonCogId");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: services.ipaws.fema.gov.ipaws_capservice
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link PostCAPRequestTypeDef }
     * 
     */
    public PostCAPRequestTypeDef createPostCAPRequestTypeDef() {
        return new PostCAPRequestTypeDef();
    }

    /**
     * Create an instance of {@link CAPServiceException }
     * 
     */
    public CAPServiceException createCAPServiceException() {
        return new CAPServiceException();
    }

    /**
     * Create an instance of {@link MessageResponseTypeDef }
     * 
     */
    public MessageResponseTypeDef createMessageResponseTypeDef() {
        return new MessageResponseTypeDef();
    }

    /**
     * Create an instance of {@link CAPHeaderTypeDef }
     * 
     */
    public CAPHeaderTypeDef createCAPHeaderTypeDef() {
        return new CAPHeaderTypeDef();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestParameterList }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", name = "getRequestTypeDef")
    public JAXBElement<RequestParameterList> createGetRequestTypeDef(RequestParameterList value) {
        return new JAXBElement<RequestParameterList>(_GetRequestTypeDef_QNAME, RequestParameterList.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ResponseParameterList }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", name = "getResponseTypeDef")
    public JAXBElement<ResponseParameterList> createGetResponseTypeDef(ResponseParameterList value) {
        return new JAXBElement<ResponseParameterList>(_GetResponseTypeDef_QNAME, ResponseParameterList.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestParameterList }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", name = "getMessageTypeDef")
    public JAXBElement<RequestParameterList> createGetMessageTypeDef(RequestParameterList value) {
        return new JAXBElement<RequestParameterList>(_GetMessageTypeDef_QNAME, RequestParameterList.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ResponseParameterList }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", name = "postCAPResponseTypeDef")
    public JAXBElement<ResponseParameterList> createPostCAPResponseTypeDef(ResponseParameterList value) {
        return new JAXBElement<ResponseParameterList>(_PostCAPResponseTypeDef_QNAME, ResponseParameterList.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", name = "logonUser", scope = CAPHeaderTypeDef.class)
    public JAXBElement<String> createCAPHeaderTypeDefLogonUser(String value) {
        return new JAXBElement<String>(_CAPHeaderTypeDefLogonUser_QNAME, String.class, CAPHeaderTypeDef.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Integer }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://gov.fema.ipaws.services/IPAWS_CAPService/", name = "logonCogId", scope = CAPHeaderTypeDef.class)
    public JAXBElement<Integer> createCAPHeaderTypeDefLogonCogId(Integer value) {
        return new JAXBElement<Integer>(_CAPHeaderTypeDefLogonCogId_QNAME, Integer.class, CAPHeaderTypeDef.class, value);
    }

}
