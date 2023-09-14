import { Key, useContext, useEffect, useState } from "react";
import styles from "./modal.module.css";
import Image from "next/image";
import { ModalContext } from "@/store/modal";
import { close, feather } from "@/public/icons";
import { IMaskInput } from "react-imask";
import axios from "axios";
import { FormContext } from "@/store/form";
export default function Modal() {
  const { variant, setIsModal } = useContext(ModalContext);
  const { setIsSuccess } = useContext(FormContext);
  const project_type = [
    {
      title: "Web site",
    },
    {
      title: "Korporativ sayt",
    },
    {
      title: "CRM system",
    },
    {
      title: "Mobil ilova",
    },
    {
      title: "Lending sayt",
    },
    { title: "Internet do’kon" },
    { title: "Web sayt" },
  ];
  const project_price = [
    {
      title: "4000000 sum",
    },
    {
      title: "12 000 000 sum",
    },
    {
      title: "18 000 000 sum",
    },
    {
      title: "20 000 000 sum",
    },
    {
      title: "26 000 000 sum",
    },
    {
      title: "Kelishamiz",
    },
  ];
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (target?.className === styles.modal) {
        setIsModal(false);
      } else if (target?.className === styles.modal_inner) {
        setIsModal(true);
      }
    });
  }, []);
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const channel =
    "https://api.telegram.org/bot6355664113:AAHDlbvECU7akBE_QoJuPOMIMEJjzS2vdl0/sendMessage?parse_mode=HTML&chat_id=-1001823370666&";

  async function postTelegram() {
    const res = await axios.get(
      `${channel}text=${`name:${name}%0A`} +${`number:+998 ${number}`}%0A+${`type:${type}`}%0A + ${`price:${price}`}%0A +${`message:${message}`}%0A`
    );
    const data = await res.data;
    return data;
  }
  const handleRequest = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    postTelegram().then(() => setIsSuccess(true));
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
    setPrice("");
    setType("");
    setIsModal(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_inner}>
        <button className={styles.close} onClick={() => setIsModal(false)}>
          {close}
        </button>
        <div className={styles.titles}>
          <p className={styles.title}>Ishni boshlaymizmi?</p>
          <p className={styles.desc}>
            Yozing, agar biror narsa aniq bo`&#39;`lmasa ham, biz sizga hamma
            narsani aytib beramiz. Tez javob beramiz)
          </p>
        </div>

        <div className={styles.project_about}>
          <p className={styles.mini_title}>Sizning loyihangiz qanday?</p>
          <div className={styles.project_types}>
            {project_type.map((types, id) => {
              return (
                <button
                  className={`${styles.type_btn} ${
                    type == types.title ? styles.active : null
                  }`}
                  key={id}
                  onClick={() => {
                    setType(types.title);
                  }}
                >
                  {types.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.project_about}>
          <p className={styles.mini_title}>
            Loyihaning taxminiy byudjeti qancha?
          </p>
          <div className={styles.project_types}>
            {project_price.map((prices, id) => {
              return (
                <button
                  className={`${styles.type_btn} ${
                    price == prices.title ? styles.active : null
                  }`}
                  key={id}
                  onClick={() => {
                    setPrice(prices.title);
                  }}
                >
                  {prices.title}
                </button>
              );
            })}
          </div>
        </div>
        <form className={styles.store_form} onSubmit={handleRequest}>
          <div className={styles.form_wrapper}>
            <p className={styles.mini_title}>
              Aloqa uchun ma`&#39;`lumotlarni kiriting
            </p>
            <div className={styles.form_body}>
              <div className={styles.store_form_inputs}>
                <input
                  type="text"
                  className={`${styles.store_input} ${
                    name.length > 0 ? styles.black_btm : ""
                  }`}
                  placeholder={`Ismingiz nima?*`}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <input
                  type="email"
                  className={styles.store_input}
                  placeholder={"Elektron pochtangiz"}
                  value={email}
                  onChange={(e) => setEmail(email)}
                /> */}
                <div
                  className={`${styles.number} ${
                    number.length > 0 ? styles.black_btm : ""
                  }`}
                >
                  <span className={`${number.length > 0 ? styles.black : ""}`}>
                    +998
                  </span>
                  <IMaskInput
                    mask={"(00) 000 00 00"}
                    className={styles.store_input}
                    value={number}
                    type="text"
                    unmask={true}
                    placeholder="33 393 39 39"
                    required
                    onChange={(e) => setNumber(e.currentTarget.value)}
                  />
                </div>
              </div>
              <textarea
                cols={30}
                rows={6}
                placeholder={"Har qanday izohingiz"}
                className={`${styles.store_input} ${
                  message.length > 0 ? styles.black_btm : ""
                } `}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.submit_btn_box}>
              <button type="submit" className={styles.submit_btn}>
                {feather} Arizangizni yuboring
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
