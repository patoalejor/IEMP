import React, { useEffect } from "react";
import Property1DefaultHoverFalse from "../Property1DefaultHoverFalse";
import * as mdc from "material-components-web";
import "./NewUser.css";

function NewUser(props) {
  const { property1DefaultHoverFalseProps } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined-1 .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined-1 .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined-2 .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined-3 .mdc-text-field"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="newuser screen">
        <div className="overlap-group border-2px-x000000">
          <div className="text-field-outline-container">
            <div className="text-field-outlined">
              <label className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon ">
                <span className="mdc-notched-outline">
                  <span className="mdc-notched-outline__leading"></span>
                  <span className="mdc-notched-outline__notch">
                    <span className="mdc-floating-label" id="my-label-id">
                      first name
                    </span>
                  </span>
                  <span className="mdc-notched-outline__trailing"></span>
                </span>
                <i
                  className="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                  tabindex="0"
                  role="button"
                >
                  drive_file_rename_outline
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
                      last name
                    </span>
                  </span>
                  <span className="mdc-notched-outline__trailing"></span>
                </span>
                <i
                  className="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                  tabindex="0"
                  role="button"
                >
                  drive_file_rename_outline
                </i>
                <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
              </label>
            </div>
          </div>
          <div className="text-field-outline-container-1">
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
                  account_box
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
                      email
                    </span>
                  </span>
                  <span className="mdc-notched-outline__trailing"></span>
                </span>
                <i
                  className="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                  tabindex="0"
                  role="button"
                >
                  email
                </i>
                <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
              </label>
            </div>
          </div>
          <div className="text-field-outlined-2">
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
                lock
              </i>
              <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            </label>
          </div>
          <div className="text-field-outlined-3">
            <label className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon ">
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch">
                  <span className="mdc-floating-label" id="my-label-id">
                    confirm password
                  </span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
              <i
                className="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                tabindex="0"
                role="button"
              >
                lock
              </i>
              <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            </label>
          </div>
          <Property1DefaultHoverFalse>{property1DefaultHoverFalseProps.children}</Property1DefaultHoverFalse>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
