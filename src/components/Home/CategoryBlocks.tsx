import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CategoryType } from '@/type/CategoryType'

interface Props {
    data: CategoryType[]
}

const CategoryBlocks: React.FC<Props> = ({ data }) => {
    return (
        <div className="category-block md:pt-20 pt-10">
            <div className="container">
                <div className="heading flex flex-col items-center text-center">
                    <div className="heading3">Explora por categoría</div>
                </div>
                <div className="list-category grid md:grid-cols-4 grid-cols-2 lg:gap-[30px] gap-[16px] md:mt-10 mt-6">
                    {data.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/categorias/${category.slug}`}
                            className="category-item relative block duration-500 rounded-2xl overflow-hidden"
                        >
                            <div className="category-img w-full aspect-square bg-ensama-50">
                                <Image
                                    src={category.image}
                                    width={600}
                                    height={600}
                                    alt={category.name}
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="category-content absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="heading6 text-white">{category.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryBlocks
