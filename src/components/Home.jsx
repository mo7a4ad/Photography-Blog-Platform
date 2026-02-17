import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faArrowLeft,
  faCircleInfo,
  faFolderOpen,
  faMountainSun,
  faNewspaper,
  faPenNib,
  faSliders,
  faStar,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavBar from './NavBar';

export default function Home({ json }) {
  const arrayOfAboutSite = [
    {
      icon: <FontAwesomeIcon icon={faNewspaper} />,
      number: "+50",
      type: "مقالة",
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} />,
      number: "+10ألف",
      type: "قارئ",
    },
    {
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
      number: "4",
      type: " تصنيفات",
    },
    {
      icon: <FontAwesomeIcon icon={faPenNib} />,
      number: "6",
      type: "كاتب",
    },
  ];
  return (
    <main>
      <section className="head-section  text-white py-80 mt-5 ">
        <div className="container d-flex justify-content-center">
          <div className="w-672 ">
            <div className="py-2 px-3 border border-orange rounded-pill d-flex align-items-center gap-2 mb-32 w-fit mx-auto bg-light-orange">
              <div className="lighting-dot w-h-6 rounded-circle bg-orange"></div>
              <div className=" glow-dot rounded-circle w-h-8 bg-orange "></div>
              <span className="fs-14 "> مرحباً بك في عدسة</span>
            </div>
            <div className="fw-bold display-2 text-center mb-4">
              اكتشف <span className="text-warning">فن</span> <br /> التصوير
              الفوتوغرافي
            </div>
            <div className="fs-4 text-secondary text-center mb-40">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </div>
            <div className="buttons d-block d-md-flex justify-content-center align-items-center gap-3 mb-64">
              <Link to={"/blog"} className=" text-decoration-none">
                <button className="btn text-white bg-LG-Btn d-flex align-items-center justify-content-center gap-2 fs-6 fw-semibold rounded-pill py-3 px-32 w-sm-100 mb-3 mb-md-0">
                  استكشف المقالات
                  <span className="icon">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>
                </button>
              </Link>
              <Link to={"/whoUs"} className=" text-decoration-none">
                <button className="know-more-btn btn text-white  d-flex align-items-center justify-content-center gap-2 fs-6 fw-semibold border border-secondary rounded-pill py-3 px-32 w-sm-100 ">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                  اعرف المزيد
                </button>
              </Link>
            </div>

            <div className="main-items row row-cols-2 row-cols-lg-4 g-3">
              {arrayOfAboutSite.map((p) => (
                <div className="col">
                  <div className="item   border border-secondary rounded-5 p-3 text-center">
                    <div className="icon  text-dark-orange fs-3 lh-1">
                      {p.icon}
                    </div>
                    <div className="number fs-30 fw-bold text-light-orange lh-sm">
                      {p.number}
                    </div>
                    <div className="title fs-14 text-secondary">{p.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="choosen-articles-section  py-80">
        <div className="container">
          <div className="head d-block d-md-flex justify-content-between mb-5">
            <div>
              <div className="py-2 px-3 border border-orange rounded-pill d-flex align-items-center gap-2 mb-3 w-fit bg-light-orange">
                <div className="lighting-dot w-h-6 rounded-circle bg-orange"></div>
                <div className=" glow-dot rounded-circle w-h-8 bg-orange "></div>
                <span className="fs-14 text-dark-orange"> مميز</span>
              </div>
              <div className="title fs-60 text-white fw-bold">
                مقالات مختارة
              </div>
              <div className="desc fs-18 text-secondary mt-3">
                محتوى منتقى لبدء رحلة تعلمك
              </div>
            </div>
            <Link to={"/blog"} className=" text-decoration-none">
              <button className="btn text-white bg-LG-Btn d-flex align-items-center align-self-end  gap-2 fs-6 fw-normal rounded-4 py-10 px-20 mt-3 mt-md-0">
                <div> عرض الكل</div>
                <div className="icon ">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
              </button>
            </Link>
          </div>
          <div className="some-articles">
            {json.posts.map((x) =>
              x.featured == true ? (
                <div className="article position-relative mb-4 mx-2 mx-sm-0">
                  <div className=" badge text-white py-6 px-12 rounded-pill  d-inline position-absolute  lh-sm z-3">
                    <span className="fs-10 me-1">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="fs-12 fw-semibold ">مميز</span>
                  </div>
                  <div className="row row-cols-1 row-cols-md-2 rounded-4 overflow-hidden  ">
                    <div className="start-part px-0 overflow-hidden">
                      <img className="" src={x.image} alt="" />
                    </div>
                    <div className="end-part p-40 d-flex flex-wrap bg-light-black   ">
                      <div>
                        <div className="head d-flex gap-2 align-items-center mb-3 ">
                          <div className="fs-12 fw-semibold border rounded-pill py-1 px-12 lh-sm text-dark-orange border-orange">
                            {x.category}
                          </div>
                          <div className="fs-14 text-secondary">
                            <span>
                              <FontAwesomeIcon icon={faClock} />
                            </span>
                            <span className="ms-1 ">{x.readTime}</span>
                          </div>
                        </div>
                        <div className="title fs-30 fw-bold text-white mb-3">
                          {x.title}
                        </div>
                        <div className="desc text-secondary">{x.excerpt}</div>
                      </div>
                      <div className="foot align-self-end d-flex justify-content-between align-items-center w-100  ">
                        <div className="d-flex align-items-center gap-2">
                          <div className=" position-relative">
                            <div className="ball w-h-16 bg-danger rounded-circle position-absolute "></div>
                            <img
                              className="w-h-48 rounded-circle"
                              src={x.author.avatar}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="name fs-14 fw-semibold text-white mb-1">
                              {x.author.name}
                            </div>
                            <div className="date fs-12 text-secondary">
                              {x.date}
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
              ) : (
                ""
              ),
            )}
          </div>
        </div>
      </section>
      <section className="discover-section  py-80 text-white">
        <div className="container">
          <div className="head text-center mb-5 ">
            <div className="py-2 px-3 border border-orange rounded-pill d-flex align-items-center gap-2 mb-3 w-fit bg-light-orange mx-auto">
              <div className="lighting-dot w-h-6 rounded-circle bg-orange"></div>
              <div className=" glow-dot rounded-circle w-h-8 bg-orange "></div>
              <span className="fs-14 text-dark-orange"> التصنيفات</span>
            </div>
            <div className="fs-60 fw-bold">استكشف حسب الموضوع</div>
            <div className="text-secondary fs-18 mt-3">
              اعثر على محتوى مصمم حسب اهتماماتك
            </div>
          </div>
          <div className="items ">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              {json.categories.map((p) => (
                <div className="col">
                  <div className="item bg-light-black p-4  rounded-4  border border-secondary position-relative  overflow-hidden ts-5">
                    <div className="item-logo w-h-48 bg-light-orange rounded-3 text-dark-orange d-flex justify-content-center align-items-center fs-5 border-orange border mb-3 ts-5">
                      {p.color == "emerald" ? (
                        <FontAwesomeIcon icon={faSun} />
                      ) : p.color == "purple" ? (
                        <FontAwesomeIcon icon={faUser} />
                      ) : p.color == "blue" ? (
                        <FontAwesomeIcon icon={faMountainSun} />
                      ) : p.color == "orange" ? (
                        <FontAwesomeIcon icon={faSliders} />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="title fs-18 fw-semibold mb-1">{p.name}</div>
                    <div className="count text-secondary fs-14 ts-5">
                      {p.count}مقاله
                    </div>
                    <div className="item-arrow w-h-32 rounded-circle d-flex justify-content-center align-items-center text-white  position-absolute ts-5">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="latest-articles-section  py-80 text-white">
        <div className="container">
          <div className="head mb-5">
            <div className="py-2 px-3 border border-orange rounded-pill d-flex align-items-center gap-2 mb-3 bg-light-orange w-fit ">
              <div className="lighting-dot w-h-6 rounded-circle bg-orange"></div>
              <div className=" glow-dot rounded-circle w-h-8 bg-orange "></div>
              <span className="fs-14 text-dark-orange"> الأحدث</span>
            </div>
            <div className="title fs-60 fw-semibold">أحدث المقالات</div>
            <div className="d-md-flex justify-content-between  ">
              <div className="decs text-secondary fs-18 ">
                محتوى جديد طازج من المطبعة
              </div>
              <Link to={"/blog"} className="text-decoration-none show-all-articles d-flex align-items-center gap-2 fw-semibold mt-2 mt-md-0 ts-2 text-dark-orange">
                
                  عرض جميع المقالات
                  <span className="icon lh-1 ts-2">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>
                
              </Link>
            </div>
          </div>
          <div className="items row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {json.posts.map((s) =>
              s.id > 3 && s.id < 7 ? (
                <div className="col">
                  <div className="item rounded-4 overflow-hidden position-relative ts-5 ">
                    <div className="badg rounded-pill bg-black py-1 px-12 position-absolute fs-12 fw-semibold z-3">
                      {s.category}
                    </div>
                    <div className="top-of-latest-article overflow-hidden rounded-4 rounded-bottom-0 border-bottom-0 ts-3">
                      <div className="image w-100 h-100 position-relative">
                        <img className="w-100 ts-5" src={s.image} alt="" />
                        <div className="shadow-effect  h-100 w-100 position-absolute "></div>
                      </div>
                    </div>
                    <div className="bottom p-4 bg-light-black border-1px border-black  border-top-0 rounded-4 rounded-top-0">
                      <div className="d-flex gap-2 align-items-center fs-14 text-secondary mb-12">
                        <div>
                          <FontAwesomeIcon icon={faClock} />{" "}
                          <span>{s.readTime}</span>
                        </div>
                        <div className="w-h-4 rounded-circle bg-secondary"></div>
                        <div>{s.date}</div>
                      </div>
                      <div className="title fw-semibold fs-20 mb-12 ts-5">
                        {s.title}
                      </div>
                      <div className="desc fs-14 text-secondary pb-20 border-bottom border-secondary">
                        {s.excerpt}
                      </div>
                      <div className="footer mt-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex  align-items-center gap-2">
                            <div className="image w-h-36 ">
                              <img
                                className=" border border-secondary rounded-circle w-100"
                                src={s.author.avatar}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="name fs-14 fw-medium">
                                {s.author.name}
                              </div>
                              <div className="jop fs-12 text-secondary">
                                {s.author.role}
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
                ""
              ),
            )}
          </div>
        </div>
      </section>
      <section className="subscripe-section  py-80 text-white d-flex justify-content-around">
        <div className="bg-light-black p-32 p-md-5 p-lg-64 rounded-4 ">
          <div className="icon w-h-64 rounded-4 bg-LG-Btn d-flex justify-content-center align-items-center fs-3 mx-auto mb-4">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="title fs-36 fw-semibold mb-3 text-center ">
            اشترك في <span className="text-orange">نشرتنا الإخبارية</span>
          </div>
          <div className="desc fs-18 text-secondary text-center">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </div>
          <form
            className=" d-block d-md-flex align-items-center gap-3 mx-auto justify-content-center  mt-3"
            action=""
          >
            <input
              className="py-3 px-20 rounded-4 bg-black border-0 w-sm-100 text-start text-white  w-50"
              type="email"
              name=""
              id=""
              placeholder="ادخل بريدك الإلكتروني"
            />

            <button className="btn fw-semibold py-3 rounded-4 px-32 bg-LG-Btn w-sm-100 mt-3 mt-md-0 ">
              اشترك الآن
            </button>
          </form>
          <div className="footer mt-4 d-flex justify-content-between align-items-center fs-14 text-secondary">
            <div className="images">
              <img
                className=" w-h-32 rounded-circle z-0 position-relative"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                alt=""
              />
              <img
                className="middle-image w-h-32 rounded-circle  z-1 position-relative me-1 b "
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face"
                alt=""
              />
              <img
                className="w-h-32 rounded-circle  "
                src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face"
                alt=""
              />
            </div>
            <div>
              انضم لـ <span className="text-white fw-medium">+10,000 </span>{" "}
              مصور
            </div>
            <div>بدون إزعاج</div>
            <div>إلغاء الاشتراك في أي وقت</div>
          </div>
        </div>
      </section>
    </main>
  );
}
