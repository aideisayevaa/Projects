import React, { useState } from 'react'
import Banner from '../components/Banner'
import { motion, transform } from "framer-motion";
import { connect } from 'react-redux';

function Faqs({ aLang, t }) {
    const [faqs, setFaqs] = useState([
        {
            question: {
                en: "How long does it take for products to be delivered?",
                az: "Məhsullar nə qədər vaxt ərzində çatdırılır?",
                ru: "Сколько времени занимает доставка продукции?"
            },
            answer: {
                en: "Products are usually delivered to the specified address within 2-5 working days.",
                az: "Məhsullar adətən 2-5 iş günü ərzində qeyd olunan ünvana çatdırılır.",
                ru: "Продукция обычно доставляется по указанному адресу в течение 2-5 рабочих дней."
            },
            isOpen: false
        },
        {
            question: {
                en: "How long does it take for products to be delivered?",
                az: "Məhsullar nə qədər vaxt ərzində çatdırılır?",
                ru: "Сколько времени занимает доставка продукции?"
            },
            answer: {
                en: "Products are usually delivered to the specified address within 2-5 working days.",
                az: "Məhsullar adətən 2-5 iş günü ərzində qeyd olunan ünvana çatdırılır.",
                ru: "Продукция обычно доставляется по указанному адресу в течение 2-5 рабочих дней."
            },
            isOpen: false
        },
        {
            question: {
                en: "How long does it take for products to be delivered?",
                az: "Məhsullar nə qədər vaxt ərzində çatdırılır?",
                ru: "Сколько времени занимает доставка продукции?"
            },
            answer: {
                en: "Products are usually delivered to the specified address within 2-5 working days.",
                az: "Məhsullar adətən 2-5 iş günü ərzində qeyd olunan ünvana çatdırılır.",
                ru: "Продукция обычно доставляется по указанному адресу в течение 2-5 рабочих дней."
            },
            isOpen: false
        },
        {
            question: {
                en: "How long does it take for products to be delivered?",
                az: "Məhsullar nə qədər vaxt ərzində çatdırılır?",
                ru: "Сколько времени занимает доставка продукции?"
            },
            answer: {
                en: "Products are usually delivered to the specified address within 2-5 working days.",
                az: "Məhsullar adətən 2-5 iş günü ərzində qeyd olunan ünvana çatdırılır.",
                ru: "Продукция обычно доставляется по указанному адресу в течение 2-5 рабочих дней."
            },
            isOpen: false
        },
        {
            question: {
                en: "How long does it take for products to be delivered?",
                az: "Məhsullar nə qədər vaxt ərzində çatdırılır?",
                ru: "Сколько времени занимает доставка продукции?"
            },
            answer: {
                en: "Products are usually delivered to the specified address within 2-5 working days.",
                az: "Məhsullar adətən 2-5 iş günü ərzində qeyd olunan ünvana çatdırılır.",
                ru: "Продукция обычно доставляется по указанному адресу в течение 2-5 рабочих дней."
            },
            isOpen: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.isOpen = !faq.isOpen;
                } else {
                    faq.isOpen = false;
                }
                return faq;
            })
        );
    };

    return (
        <>
            <div className="pt_80"></div>
            <Banner bannerBg="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/themes/metro/assets/img/banner.jpg" pageName="Faqs" />
            <div className="container">
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <div key={index} className="single__faq">
                            <div className='faq__question' style={{ borderBottomRightRadius: faq.isOpen && "0px" }} onClick={() => toggleFAQ(index)}> <h4>{faq.question[aLang]}</h4> <i style={{ transform: faq.isOpen && "rotate(45deg)" }} className="fa-solid fa-plus"></i></div>
                            {faq.isOpen && <motion.section initial={{ opacity: 0.5, transform: "translateY(-20px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: 0.4 }}>
                                <div className='faq__answer' >{faq.answer[aLang]}</div>
                            </motion.section>}

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
const t = a => a
export default connect(t)(Faqs)