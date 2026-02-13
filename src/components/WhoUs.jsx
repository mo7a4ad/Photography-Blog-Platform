import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faNewspaper, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowsRotate,
  faBolt,
  faBookOpen,
  faBullseye,
  faCheck,
  faHandshake,
  faPenNib,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

export default function WhoUs({ json }) {
  const arrayOfAboutUs = [
    {
      icon: <FontAwesomeIcon icon={faUsers} />,
      number: "+2مليون",
      type: "قارئ شهرياً",
    },
    {
      icon: <FontAwesomeIcon icon={faNewspaper} />,
      number: "+500",
      type: "مقالة منشورة",
    },
    {
      icon: <FontAwesomeIcon icon={faPenNib} />,

      number: "+50",
      type: " كاتب خبير",
    },
    {
      icon: <FontAwesomeIcon icon={faBookOpen} />,
      number: "+15",
      type: "تصنيف",
    },
  ];
  const ourValues = [
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: "الجودة أولاً",
      desc: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: <FontAwesomeIcon icon={faBolt} />,
      title: " تركيز عملي",
      desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} />,

      title: " المجتمع",
      desc: "تعلم مع آلاف المصورين",
    },
    {
      icon: <FontAwesomeIcon icon={faArrowsRotate} />,
      title: " دائماً محدث",
      desc: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];
  return (
    <main className="who-us">
      <section className="head-section bg-black text-white py-80 mt-5">
        <div className="container ">
          <div className="py-2 px-3 border border-orange rounded-pill d-flex align-items-center gap-2 mb-32 w-fit mx-auto bg-light-orange">
            <div className="lighting-dot w-h-6 rounded-circle bg-orange"></div>
            <div className="lighting-dot rounded-circle w-h-8 bg-orange "></div>
            <span className="fs-14 text-dark-orange"> من نحن</span>
          </div>
          <div className="fw-bold fs-60 text-center mb-4">
            مهمتنا هي
            <span className="text-lin-grid-orange"> الإعلام والإلهام</span>
          </div>
          <div className="fs-20 text-secondary text-center mb-40 w-768 mx-auto">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </div>

          <div className="main-items w-896 mx-auto row row-cols-2 row-cols-lg-4 g-3">
            {arrayOfAboutUs.map((p) => (
              <div className="col">
                <div className="item bg-light-black  border border-secondary rounded-4 p-4 text-center">
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
      </section>
      <section className="our-values  bg-dark py-80 text-white">
        <div className="container">
          <div className="head mb-64 ">
            <div className="title d-flex gap-3 justify-content-center align-items-center mb-3">
              <span className="w-6-h-32 bg-gradient-orange-1 d-block rounded-top-pill rounded-bottom-pill"></span>
              <span className="fs-36  fw-bold">قيمنا</span>
              <span className="w-6-h-32 bg-gradient-orange-2 d-block rounded-top-pill rounded-bottom-pill"></span>
            </div>
            <div className="desc fs-18 text-secondary w-fit mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </div>
          </div>
          <div className="items">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {ourValues.map((f) => (
                <div className="col">
                  <div className="item border border-1 border-secondary p-4 rounded-4 text-center  bg-light-black">
                    <div className="icon fs-1 d-flex justify-content-center align-items-center text-dark-orange">
                      {f.icon}
                    </div>
                    <div className="title fs-18 fw-bold my-2 ">{f.title}</div>
                    <div className="fs-14 text-secondary ">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="our-team bg-black py-80 text-white">
        <div className="container">
          <div className="head">
            <div className="py-2 px-3 border border-orange rounded-pill d-flex align-items-center gap-2 mb-3 w-fit mx-auto bg-light-orange">
              <div className="lighting-dot w-h-6 rounded-circle bg-orange"></div>
              <span className="fs-14 text-dark-orange">فريقنا</span>
            </div>
            <div className="fw-bold fs-36 text-center mb-3">
              تعرف على كتابنا
            </div>
            <div className="fs-20 text-secondary text-center mb-40 w-768 mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {json.posts.map((f) => (
              <div className="col">
                <div className="item p-4 rounded-4 border border-secondary bg-light-black ts-3">
                  <div className="image mx-auto w-fit rounded-circle position-relative mb-3">
                    <img
                      className="w-h-96 border border-3 border-secondary  rounded-circle ts-3"
                      src={f.author.avatar}
                      alt={f.author.role}
                    />
                    <div className="w-h-24 rounded-circle d-flex justify-content-center align-items-center border border-2 border-black position-absolute bottom-0 fs-10 bg-orange">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                  <div className="name text-center fs-18 fw-bold">
                    {f.author.name}
                  </div>
                  <div className="jop text-center mb-3  text-dark-orange">
                    {f.author.role}
                  </div>
                  <div className="social-accounts d-flex justify-content-center gap-3">
                    <a href="#">
                      <div className="x w-h-36 rounded-3 bg-medium-black d-flex justify-content-center align-items-center fs-5 text-secondary ts-3">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </div>
                    </a>
                    <a href="#">
                      <div className="git-hup w-h-36 rounded-3 bg-medium-black d-flex justify-content-center align-items-center fs-5 text-secondary ts-3">
                        <FontAwesomeIcon icon={faGithub} />
                      </div>
                    </a>
                    <a href="#">
                      <div className="linked-in w-h-36 rounded-3 bg-medium-black d-flex justify-content-center align-items-center fs-5 text-secondary ts-3">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="any-questions py-80 text-white">
        <div className="w-896 text-center mx-auto">
          <div className="head fs-36 fw-bold mb-4">لديك أسئلة؟ دعنا نتحدث!</div>
          <div className="desc fs-18 w-672 mx-auto mb-32">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل
          </div>
          <div className="buttons d-block d-sm-flex justify-content-center  gap-3 mx-2 mx-md-0">
            <button className="btn bg-black py-3 px-32 rounded-4 d-block d-md-inline w-sm-100 mb-3 mb-sm-0 ">
              <a
                className="fw-semibold text-white text-decoration-none d-flex align-items-center gap-2 justify-content-center"
                href="mailto:hello@adasah.com"
              >
                <span className="fs-5 lh-0">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>تواصل معنا</span>
              </a>
            </button>
            <button className="btn btn-outline-light py-3 px-32 rounded-4 fw-semibold d-block d-md-inline w-sm-100">
              تصفح المقالات
            </button>
          </div>
        </div>
      </section>
      
    </main>
  );
}
