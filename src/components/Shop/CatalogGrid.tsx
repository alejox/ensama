'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
import { CategoryType } from '@/type/CategoryType'
import Product from '../Product/Product';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import HandlePagination from '../Other/HandlePagination';
import { formatCOP } from '@/lib/format'

const MAX_PRICE = 900000
const PRODUCTS_PER_PAGE = 9

interface Props {
    data: Array<ProductType>
    categories: Array<CategoryType>
    activeCategory?: string
    heading: string
}

const CatalogGrid: React.FC<Props> = ({ data, categories, activeCategory, heading }) => {
    const [sortOption, setSortOption] = useState('');
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: MAX_PRICE });
    const [currentPage, setCurrentPage] = useState(0);
    const offset = currentPage * PRODUCTS_PER_PAGE;

    const handleSortChange = (option: string) => {
        setSortOption(option);
        setCurrentPage(0);
    };

    const handlePriceChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setPriceRange({ min: values[0], max: values[1] });
            setCurrentPage(0);
        }
    };

    let filteredData = data.filter((product) => {
        return product.price >= priceRange.min && product.price <= priceRange.max
    })

    const sortedData = [...filteredData];

    if (sortOption === 'priceHighToLow') {
        filteredData = sortedData.sort((a, b) => b.price - a.price)
    }

    if (sortOption === 'priceLowToHigh') {
        filteredData = sortedData.sort((a, b) => a.price - b.price)
    }

    const totalProducts = filteredData.length
    const pageCount = Math.ceil(filteredData.length / PRODUCTS_PER_PAGE);
    const currentProducts = filteredData.slice(offset, offset + PRODUCTS_PER_PAGE);

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <div className="breadcrumb-block style-img">
                <div className="breadcrumb-main bg-linear overflow-hidden">
                    <div className="container lg:pt-[134px] pt-24 pb-10 relative">
                        <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
                            <div className="text-content">
                                <div className="heading2 text-center">{heading}</div>
                                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                                    <Link href={'/'}>Inicio</Link>
                                    <Icon.CaretRight size={14} className='text-secondary2' />
                                    <div className='text-secondary2 capitalize'>{heading}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
                <div className="container">
                    <div className="flex max-md:flex-wrap max-md:flex-col-reverse gap-y-8">
                        <div className="sidebar lg:w-1/4 md:w-1/3 w-full md:pr-12">
                            <div className="filter-type pb-8 border-b border-line">
                                <div className="heading6">Categorías</div>
                                <div className="list-type mt-4">
                                    <Link
                                        href={'/productos'}
                                        className={`item flex items-center justify-between cursor-pointer ${!activeCategory ? 'active' : ''}`}
                                    >
                                        <div className='text-secondary has-line-before hover:text-black'>Todas</div>
                                    </Link>
                                    {categories.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={`/categorias/${item.slug}`}
                                            className={`item flex items-center justify-between cursor-pointer ${activeCategory === item.slug ? 'active' : ''}`}
                                        >
                                            <div className='text-secondary has-line-before hover:text-black'>{item.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="filter-price pb-8 border-b border-line mt-8">
                                <div className="heading6">Rango de precio</div>
                                <Slider
                                    range
                                    defaultValue={[0, MAX_PRICE]}
                                    min={0}
                                    max={MAX_PRICE}
                                    step={10000}
                                    onChange={handlePriceChange}
                                    className='mt-5'
                                />
                                <div className="price-block flex items-center justify-between flex-wrap mt-4">
                                    <div className="min flex items-center gap-1">
                                        <div>Desde:</div>
                                        <div className='price-min'>{formatCOP(priceRange.min)}</div>
                                    </div>
                                    <div className="min flex items-center gap-1">
                                        <div>Hasta:</div>
                                        <div className='price-max'>{formatCOP(priceRange.max)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-product-block lg:w-3/4 md:w-2/3 w-full md:pl-3">
                            <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                                <div className="left flex has-line items-center flex-wrap gap-5">
                                    <div className="total-product">
                                        {totalProducts}
                                        <span className='text-secondary pl-1'>productos encontrados</span>
                                    </div>
                                </div>
                                <div className="right flex items-center gap-3">
                                    <div className="select-block relative">
                                        <select
                                            id="select-filter"
                                            name="select-filter"
                                            className='caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line'
                                            onChange={(e) => { handleSortChange(e.target.value) }}
                                            defaultValue={'Sorting'}
                                        >
                                            <option value="Sorting" disabled>Ordenar</option>
                                            <option value="priceHighToLow">Precio: mayor a menor</option>
                                            <option value="priceLowToHigh">Precio: menor a mayor</option>
                                        </select>
                                        <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                    </div>
                                </div>
                            </div>

                            <div className="list-product hide-product-sold grid lg:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7">
                                {currentProducts.length === 0 ? (
                                    <div className="no-data-product">No hay productos que coincidan con el filtro seleccionado.</div>
                                ) : (
                                    currentProducts.map((item) => (
                                        <Product key={item.id} data={item} />
                                    ))
                                )}
                            </div>

                            {pageCount > 1 && (
                                <div className="list-pagination flex items-center md:mt-10 mt-7">
                                    <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogGrid
