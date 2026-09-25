'use client'

import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface FaqItem {
    question: string
    answer: string
}

interface Props {
    items: FaqItem[]
}

const Faq: React.FC<Props> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index))
    }

    return (
        <div className="faqs-block">
            <div className="tab-question active flex flex-col">
                {items.map((item, index) => (
                    <div
                        key={item.question}
                        className={`question-item border-b border-line ${openIndex === index ? 'open' : ''}`}
                    >
                        <div
                            className="heading flex items-center justify-between gap-4 py-5 cursor-pointer"
                            onClick={() => toggle(index)}
                        >
                            <div className="text-title">{item.question}</div>
                            <Icon.CaretDown
                                size={16}
                                className={`flex-shrink-0 duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </div>
                        <div className="content">
                            <p className="text-secondary pb-5">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
