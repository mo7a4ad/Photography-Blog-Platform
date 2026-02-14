import {
  faClock,
  faFaceFrown,
  faNewspaper,
  
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faArrowLeft,
  faBars,
  faMagnifyingGlass,
  faTableCells,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Blog({ json }) {
  const articles = json.posts;
  const [typeOfArticles, setTypeOfArticles] = useState(articles);
  const [searchInputValue, setSearchInputValue] = useState("");
  const numperOfArticles = typeOfArticles.filter(
    (f) =>
      (f.excerpt ?? "").includes(searchInputValue ?? "") ||
      (f.title ?? "").includes(searchInputValue ?? ""),
  ).length;
  const articlesAfterFilteration = typeOfArticles.filter(
    (f) =>
      (f.excerpt ?? "").includes(searchInputValue ?? "") ||
      (f.title ?? "").includes(searchInputValue ?? ""),
  );
  const [selectView, setselectView] = useState("grid");
  console.log(selectView);
  return (
    <main>
      <section className="head-blog-section py-80  text-white mt-5">
        <div className="container text-center">
          <div className="text-dark-orange py-2 px-3 border border-orange rounded-pill d-flex align-items-center gap-2 mb-32 w-fit mx-auto bg-light-orange">
            <div className="lighting-dot w-h-6 rounded-circle bg-orange"></div>
            <span className="fs-14 ">
              <FontAwesomeIcon icon={faNewspaper} />
            </span>
            <span className="fs-14 ">مدونتنا</span>
          </div>
          <div className="title  fs-60 fw-bold">
            استكشف <span className="text-light-orange">مقالاتنا</span>
          </div>
          <div className="desc text-secondary fs-20">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </div>
        </div>
      </section>
      <section className="nav-on-articles bg-black border-bottom border-secondary py-3 px-32">
        <div className="container">
          <div className="head d-flex flex-wrap flex-md-nowrap gap-3 justify-content-between align-items-center  ">
            <div className=" position-relative search-input align-self-start">
              <input
                id="search-bar"
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                className="py-12 px-20 rounded-4  out-line text-white bg-light-black"
                type="tetx"
                placeholder="ابحث فى المقالات..."
              />
              <label
                className="position-absolute top-50 translate-middle-y text-secondary  "
                htmlFor="search-bar"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </label>
            </div>
            <div className="d-flex flex-wrap  gap-3 align-self-center ">
              <button
                onClick={() =>
                  setTypeOfArticles(articles.filter((item) => item))
                }
                className={`py-2 px-3 rounded-4 border  border-secondary text-secondary fs-14 fw-bold bg-light-black cursor-pointer filter-item ${
                  typeOfArticles.length === articles.length ? "active" : ""
                }`}
              >
                جميع المقالات
              </button>
              <button
                onClick={() =>
                  setTypeOfArticles(
                    articles.filter((item) => item.category === "إضاءة"),
                  )
                }
                className={`py-2 px-3 rounded-4 border text-secondary border-secondary fs-14 fw-bold bg-light-black cursor-pointer filter-item ${
                  typeOfArticles.every((item) => item.category === "إضاءة")
                    ? "active"
                    : ""
                }`}
              >
                إضاءة
              </button>
              <button
                onClick={() => {
                  setTypeOfArticles(
                    articles.filter((item) => item.category === "بورتريه"),
                  );
                }}
                className={`py-2 px-3 rounded-4 border text-secondary border-secondary fs-14 fw-bold bg-light-black cursor-pointer filter-item ${
                  typeOfArticles.every((item) => item.category === "بورتريه")
                    ? "active"
                    : ""
                } `}
              >
                بورتريه
              </button>
              <button
                onClick={() => {
                  setTypeOfArticles(
                    articles.filter((item) => item.category === "مناظر طبيعية"),
                  );
                }}
                className={`py-2 px-3 rounded-4 border text-secondary border-secondary fs-14 fw-bold bg-light-black cursor-pointer filter-item ${typeOfArticles.every((item) => item.category === "مناظر طبيعية") ? "active" : ""}`}
              >
                مناظر طبيعية
              </button>
              <button
                onClick={() => {
                  setTypeOfArticles(
                    articles.filter((item) => item.category === "تقنيات"),
                  );
                }}
                o
                className={`py-2 px-3 rounded-4 border text-secondary border-secondary fs-14 fw-bold bg-light-black cursor-pointer filter-item ${typeOfArticles.every((item) => item.category === "تقنيات") ? "active" : ""}`}
              >
                تقنيات
              </button>
              <button
                onClick={() => {
                  setTypeOfArticles(
                    articles.filter((item) => item.category === "معدات"),
                  );
                }}
                className={`py-2 px-3 rounded-4 border text-secondary border-secondary fs-14 fw-bold bg-light-black cursor-pointer filter-item ${typeOfArticles.every((item) => item.category === "معدات") ? "active" : ""}`}
              >
                معدات
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-articles-section bg- bg-black py-5 text-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-white">
              عرض
              {numperOfArticles}
              مقالات
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="p-1 border rounded-4 text-white d-flex fs-5">
                <div
                  onClick={() => setselectView("grid")}
                  className={`shape ${selectView == "grid" ? "active" : ""} w-h-36 d-flex justify-content-center align-items-center f6-6 rounded-3 cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faTableCells} />
                </div>
                <div
                  onClick={() => setselectView("rows")}
                  className={`shape ${selectView == "rows" ? "active" : ""} w-h-36 d-flex justify-content-center align-items-center fs-6 rounded-3 cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
              {searchInputValue !== "" ? (
                <div
                  className="delete-filter fs-14 text-secondary d-flex align-items-center gap-1 lh-0"
                  onClick={() => setSearchInputValue("")}
                >
                  <FontAwesomeIcon icon={faX} /> مسح الفلاتر
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {numperOfArticles == 0 ? (
            <div className=" py-80 text-center">
              <div className="icon mb-4 w-h-96 rounded-circle d-flex justify-content-center align-items-center fs-1 text-secondary border mx-auto bg-light-black border-secondary">
                <FontAwesomeIcon icon={faFaceFrown} />
              </div>
              <div className="fw-bold fs-4 mb-4">لا توجد مقالات</div>
              <div className=" text-secondary mb-4">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </div>

              <button
                onClick={() => setSearchInputValue("")}
                className="py-3 px-32 rounded-pill bg-warning"
              >
                إعادة تعيين الفلاتر
              </button>
            </div>
          ) : (
            <div
              className={`items ${selectView == "grid" ? "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" : ""}   py-4`}
            >
              {articlesAfterFilteration.map((f) =>
                selectView == "grid" ? (
                  <div className="col cursor-pointer">
                    <div className="item rounded-4 overflow-hidden position-relative ts-5 h-100">
                      <div className="badg rounded-pill bg-black py-1 px-12 position-absolute fs-12 fw-semibold z-3 ">
                        {f.category}
                      </div>
                      <div className="top-of-latest-article overflow-hidden rounded-4 rounded-bottom-0 border-bottom-0">
                        <div className="image w-100 h-100 position-relative">
                          <img className="w-100 ts-5" src={f.image} alt="" />
                          <div className="shadow-effect  h-100 w-100 position-absolute "></div>
                        </div>
                      </div>
                      <div className="bottom p-4 bg-light-black  rounded-4 rounded-top-0 h-100">
                        <div className="d-flex gap-2 align-items-center fs-14 text-secondary mb-12">
                          <div>
                            <FontAwesomeIcon icon={faClock} />
                            <span>{f.readTime}</span>
                          </div>
                          <div className="w-h-4 rounded-circle bg-secondary"></div>
                          <div>{f.date}</div>
                        </div>
                        <div className="title fw-semibold fs-20 mb-12 ts-5">
                          {f.title}
                        </div>
                        <div className="desc fs-14 text-secondary pb-20 border-bottom border-secondary">
                          {f.excerpt}
                        </div>
                        <div className="footer mt-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex  align-items-center gap-2">
                              <div className="image w-h-36 ">
                                <img
                                  className=" border border-secondary rounded-circle w-100"
                                  src={f.author.avatar}
                                  alt=""
                                />
                              </div>
                              <div>
                                <div className="name fs-14 fw-medium">
                                  {f.author.name}
                                </div>
                                <div className="jop fs-12 text-secondary">
                                  {f.author.role}
                                </div>
                              </div>
                            </div>
                            <div className="item-arrow w-h-32 rounded-circle d-flex justify-content-center align-items-center text-dark-orange border border-orange bg-light-orange ts-5">
                              <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="article position-relative mb-3 mx-2 mx-sm-0 mb-4">
                    <div className="row  rounded-4  overflow-hidden  ">
                      <div className="start-part px-0 overflow-hidden col-12 col-md-4">
                        <img className="  w-100 h-100" src={f.image} alt="" />
                      </div>
                      <div className="end-part p-4 d-flex flex-wrap bg-light-black col-12 col-md-8  ">
                        <div>
                          <div className="head d-flex gap-2 align-items-center  ">
                            <div className="fs-12 fw-semibold border rounded-pill py-1 px-12 lh-sm text-dark-orange border-orange">
                              {f.category}
                            </div>
                            <div className="fs-14 text-secondary">
                              <span>
                                <FontAwesomeIcon icon={faClock} />
                              </span>
                              <span className="ms-1 ">{f.readTime}</span>
                            </div>
                          </div>
                          <div className="title fs-4 fw-bold text-white ">
                            {f.title}
                          </div>
                          <div className="desc text-secondary fs-6">
                            {f.excerpt}
                          </div>
                        </div>
                        <div className="foot align-self-end d-flex justify-content-between align-items-center w-100  ">
                          <div className="d-flex align-items-center gap-2">
                            <div className=" position-relative">
                              <div className="ball w-h-16 bg-danger rounded-circle position-absolute "></div>
                              <img
                                className="w-h-48 rounded-circle"
                                src={f.author.avatar}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="name fs-14 fw-semibold text-white mb-1">
                                {f.author.name}
                              </div>
                              <div className="date fs-12 text-secondary">
                                {f.date}
                              </div>
                            </div>
                          </div>
                          <div className="fs-14 fw-semibold text-dark-orange d-flex align-items-center gap-2">
                            <span className="read-more"> اقرأ المقال </span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
