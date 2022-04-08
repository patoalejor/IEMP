import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Property1DefaultHoverFalse3 from "../Property1DefaultHoverFalse3";
import * as mdc from "material-components-web";
import "./Login.css";

function Login(props) {
  const { forgetPasswordNewUser, property1DefaultHoverFalse3Props } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".input_user_id .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".input_user_pw .mdc-text-field"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <div className="overlap-group-2 border-2px-x000000">
          <div className="input_user_id">
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
          <div className="input_user_pw">
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
          <Property1DefaultHoverFalse3 className={property1DefaultHoverFalse3Props.className}>
            {property1DefaultHoverFalse3Props.children}
          </Property1DefaultHoverFalse3>
          <Link to="/newuser" className="align-self-flex-start">
            <div className="forget-password-new-user x18pt---thin---monserrat">{forgetPasswordNewUser}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
