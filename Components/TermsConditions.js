import React from "react";
import yellowdot from "../assets/svg/yellowdot.svg";
import Image from "next/image";

export default function TermsConditions() {
  return (
    <>
      <div className="bg-gray-50 container  mb-4 p-8 rounded-md shadow-md  w-full mx-auto">
        <h1 className="text-2xl font-bold mb-6">Terms and Conditions</h1>

        <h2 className="text-xl font-semibold mb-4">1. DEFINITIONS</h2>
        <ol className="list-decimal list-inside text-gray-800">
          <li>
            <strong>Account:</strong> A designated account created for the
            Customer's use of the Subscription for its intended purpose and to
            oversee the accounts of its authorized users throughout the
            Subscription Term. It is emphasized that each Account is exclusive
            to the Customer, and under no circumstances should it be shared with
            any third party.
          </li>
          <li>
            <strong>Custom Integration:</strong> Refers to the service offered
            by the Company, involving the integration of the Software with a
            third-party tool as agreed upon by both parties, and at the fees
            outlined in the Order Form.
          </li>
          <li>
            <strong>Enhancements:</strong> Refers to any alterations, updates,
            upgrades, or additions to the Software that, when incorporated into
            the modules currently utilized by the Customer, offer minor
            improvements in functionality without altering the overall utility,
            functional capability, or application. These modifications or
            additions are typically made accessible by the Company to all its
            customers as part of their Software subscription.
          </li>
          <li>
            <strong>Error:</strong> Shall mean any verifiable and reproducible
            failure or inability of the Software to perform any material
            functions set forth in the Agreement due to any programming defect
            in the Software when used by the Customer as specified under this
            Agreement.
          </li>
          <li>
            <strong>Fees:</strong> Shall mean the fees payable by the Customer
            to the Company as set forth in the applicable Order Form.
          </li>
          <li>
            <strong>Fixes:</strong> Shall mean any modification or addition to
            the Software that, when made or added to the solution or modules
            currently being used by the Customer, corrects Errors but does not
            change overall utility, functional capability, or application, where
            such modifications or additions are generally made available by the
            Company to all its customers as a part of their Subscription.
          </li>
          <li>
            <strong>Licensable Activity:</strong> Shall mean any activity
            encompassed by any intellectual property rights and in the absence
            of a license, would give rise to liability for infringement (or
            inducement of infringement or contributory infringement) of such
            intellectual property rights.
          </li>
          <li>
            <strong>Order Form:</strong> Means a written order, in the form set
            forth in the Agreement, that the Parties may enter into from time to
            time under this Agreement.
          </li>
          <li>
            <strong>Permitted User(s):</strong> Shall mean any employee or
            consultant of the Customer who is permitted to access and use the
            Subscription.
          </li>
          <li>
            <strong>Software:</strong> Shall mean a proprietary Software of
            Company known as “TalentSpotify” including its Enhancements (if
            any).
          </li>
          <li>
            <strong>Services:</strong> Shall mean services provided by the
            Company including without limitation implementation services, OKR
            coaching services, and Custom Integration services.
          </li>
          <li>
            <strong>Subscription:</strong> Shall mean the access to Software
            pursuant to an Order Form, under which the Software hosted by
            Company on cloud is made available for use to the Customer together
            with support services as per Company’s standard policies.
          </li>
          <li>
            <strong>Customer Data:</strong> Means all data and materials
            uploaded by the Customer and/or its Permitted Users on the Software
            as part of the Subscription of Services.
          </li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          2. GRANT OF SUBSCRIPTION
        </h2>
        <p className="text-gray-800 leading-relaxed">
          2.1 Upon the payment of Fees by the Customer and subject to terms and
          conditions of the Agreement, Company grants to the Customer during the
          Subscription Term, a fixed-term, non-exclusive, worldwide,
          non-transferable, revocable, non-sublicensable, and limited license to
          use the Subscription for Customer and its Permitted User’s internal
          business use (“Purpose”). Nothing herein contained shall be construed
          as granting to the Customer any intellectual property right, including
          copyrights, regarding the Software and Subscription except as
          expressly provided for hereunder.
        </p>
      </div>
    </>
  );
}
