import React from "react";

export default function AdminFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          Resto-Cafe ReactJS Project // <i>&nbsp;Resto-Cafe Module</i>
          <div className="copyright ml-auto">
            {" "}
            Copyright &copy;&nbsp;
            {new Date().getFullYear()}, made with <i className="la la-heart heart text-danger"></i>{" "}
            by{" "}
            <a href="https://bhavyajustchill.github.io" target={"_blank"}>
              BhavyaJustChill
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
