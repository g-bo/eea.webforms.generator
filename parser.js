/**
 * @file parser.js
 * XSD Schema to HTML5 Web Form
 * @author George Bouris <gb@eworx.gr>
 * @copyright Copyright (C) 2017 Eworx, George Bouris. All rights reserved.
 */

'use strict';


/**
 * Class XSDWebFormParser
 * Tags for XSD Schema to HTML5
 */
class XSDWebFormParser 
{


    /**
     * Class constructor
     * Open .xsd file and read the contents
     */
    constructor(xsdFile) 
    {
        this.ELEMENT_TYPES = {
            "xs:element"        :   this.parseElement,
            "xs:import"         :   this.parseImport,
            "xs:simpleType"     :   this.parseSimpleType,
            "xs:complexType"    :   this.parseComplexType,
            "xs:sequence"       :   this.parseSequence,
            "xs:restriction"    :   this.parseRestriction,
            "xs:annotation"     :   this.parseAnnotation,
            "xs:documentation"  :   this.parseDocumentation,
            "xs:enumeration"    :   this.parseEnumeration,
        };
    }

    /**
     * parseFunc - Parse XML Tag
     * @param item
     */
    parseFunc(item) 
    {

        if ((item in this.ELEMENT_TYPES)) {
            (this.ELEMENT_TYPES[item])(item);
        }

    }

    /**
     * parseElement- Parse Element Tag
     * @param item
     */
    parseElement(item) 
    {

        console.log("\n\tFound Tag {EL}} : =====> " + item);

    } 

    /**
     * parseImport- Parse Import Tag
     * @param item
     */
    parseImport(item) 
    {

        console.log("\n\tFound Tag {IM}} : =====> " + item);

    }

    /**
     * parseSimpleType - Parse SimpleType Tag
     * @param item
     */
    parseSimpleType(item) 
    {

        console.log("\n\tFound Tag {ST}} : =====> " + item);

    }

    /**
     * parseComplexType - Parse ComplexType Tag
     * @param item
     */
    parseComplexType(item)
    {

        console.log("\n\tFound Tag {CT}} : =====> " + item);

    }

    /**
     * parseSequence - Parse Sequence Tag
     * @param item
     */
    parseSequence(item) 
    {

        console.log("\n\tFound Tag {SQ}} : =====> " + item);

    }

    /**
     * parseRestriction - Parse Restriction Tag
     * @param item
     */
    parseRestriction(item) 
    {

        console.log("\n\tFound Tag {RS}} : =====> " + item);

    }

    /**
     * parseAnnotation - Parse Annotation Tag
     * @param item
     */
    parseAnnotation(item) 
    {

        console.log("\n\tFound Tag {AN}} : =====> " + item);

    }

    /**
     * parseDocumentation - Parse Documentation Tag
     * @param item
     */
    parseDocumentation(item) 
    {

        console.log("\n\tFound Tag {DC}} : =====> " + item);

    } 

    /**
     * parseEnumeration - Parse Enumeration Tag
     * @param item
     */
    parseEnumeration(item) 
    {

        console.log("\n\tFound Tag {EN}} : =====> " + item);

    }

}

module.exports.XSDWebFormParser = XSDWebFormParser;