import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Property1DefaultHoverFalse from "../Property1DefaultHoverFalse";
import * as mdc from "material-components-web";
import "./Login.css";

function Login(props) {
  const { forgetPasswordNewUser, property1DefaultHoverFalseProps } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined-1 .mdc-text-field"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <div className="overlap-group-3 border-2px-x000000">
          <div className="text-field-outlined">
            <label className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon ">
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch">
                  <span className="mdc-floating-label" id="my-label-id">
                    user id
                  </span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
              <i
                className="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                tabindex="0"
                role="button"
              >
                perm_identity
              </i>
              <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            </label>
          </div>
          <div className="text-field-outlined-1">
            <label className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon ">
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch">
                  <span className="mdc-floating-label" id="my-label-id">
                    password
                  </span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
              <i
                className="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                tabindex="0"
                role="button"
              >
                password
              </i>
              <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            </label>
          </div>
          <Property1DefaultHoverFalse className={property1DefaultHoverFalseProps.className} />
          <Link to="/newuser" className="align-self-flex-start">
            <div className="forget-password-new-user x18pt---thin---monserrat">{forgetPasswordNewUser}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
