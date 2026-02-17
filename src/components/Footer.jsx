import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer  border-top border-secondary">
        <div className="container">
          <div className="py-64">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <div className="brand text-white d-flex gap-3 align-items-center mb-4">
                  <div className="icon w-h-44 rounded-3 d-flex justify-content-center align-items-center bg-dark-orange lh-0 fw-semibold ">
                    ع
                  </div>
                  <div className="fs-20 fw-bold">عدسة</div>
                </div>
                <div className="desc text-secondary fs-14 mb-4">
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                  المحترفين ونصائح عملية لتطوير مهاراتكم.
                </div>
                <div className="icons d-flex gap-2">
                  <a href="https://twitter.com/adasah" target="blank">
                    <div className="icon w-h-40 rounded-3 bg-light-black d-flex justify-content-center align-items-center text-secondary fs-5 ts-3">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </div>
                  </a>
                  <a href="https://github.com/adasah" target="blank">
                    <div className="icon w-h-40 rounded-3 bg-light-black d-flex justify-content-center align-items-center text-secondary fs-5 ts-3">
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </a>
                  <a href="https://linkedin.com/company/adasah" target="blank">
                    <div className="icon w-h-40 rounded-3 bg-light-black d-flex justify-content-center align-items-center text-secondary fs-5 ts-3">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </a>
                  <a href="https://youtube.com/@adasah" target="blank">
                    <div className="icon w-h-40 rounded-3 bg-light-black d-flex justify-content-center align-items-center text-secondary fs-5 ts-3">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-2 fw-semibold text-white mb-4">
                  <div className="line w-32-h-2  rounded-pill"></div> استكشف
                </div>
                <ul className=" d-flex flex-column gap-3 text-secondary list-unstyled fs-14">
                  <Link
                    to={"/"}
                    className=" text-decoration-none text-secondary"
                  >
                    <li className="d-flex align-items-center gap-2 ">
                      <span className="">
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </span>
                      الرئيسة
                    </li>
                  </Link>
                  <Link
                    to={"/blog"}
                    className=" text-decoration-none text-secondary "
                  >
                    <li className="d-flex align-items-center gap-2 ">
                      {" "}
                      <span className="">
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </span>
                      المدونه
                    </li>
                  </Link>
                  <Link
                    to={"/whoUs"}
                    className=" text-decoration-none text-secondary"
                  >
                    <li className="d-flex align-items-center gap-2 ">
                      {" "}
                      <span className="">
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </span>
                      من نحن
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-2 fw-semibold text-white mb-4">
                  <div className="line w-32-h-2  rounded-pill"></div> التصنيفات
                </div>
                <ul className=" d-flex flex-column gap-3 text-secondary list-unstyled fs-14">
                  <li className="d-flex align-items-center gap-2 ">
                    {" "}
                    <span className="">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    اضاءة
                  </li>
                  <li className="d-flex align-items-center gap-2 ">
                    {" "}
                    <span className="">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    بورتريه
                  </li>
                  <li className="d-flex align-items-center gap-2 ">
                    {" "}
                    <span className="">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </span>{" "}
                    مناظر طبيعيه
                  </li>
                  <li className="d-flex align-items-center gap-2 ">
                    {" "}
                    <span className="">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </span>{" "}
                    تقنيات
                  </li>
                </ul>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-2 fw-semibold text-white mb-4">
                  <div className="line w-32-h-2  rounded-pill"></div> ابقى على
                  اطلاع
                </div>
                <div className="fs-14 text-secondary mb-3">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </div>
                <form>
                  <input
                    className="w-100 py-12 px-3 rounded-4 text-start bg-light-black border-0 text-white mb-12"
                    type="email"
                    placeholder="ادخل بريدك الالكترونى"
                  />
                  <button className="py-3 px-32 rounded-pill bg-dark-orange text-center w-100  border-0">
                    اشترك
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
