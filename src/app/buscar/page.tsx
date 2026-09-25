'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import { ProductType } from '@/type/ProductType'
import { getProducts } from '@/lib/catalog'
import Product from '@/components/Product/Product'
import HandlePagination from '@/components/Other/HandlePagination'

const productData = getProducts()

const Buscar = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 9;
    const offset = currentPage * productsPerPage;

    const router = useRouter()

    const handleSearch = (value: string) => {
        router.push(`/buscar?query=${value}`)
        setSearchKeyword('')
    }

    const searchParams = useSearchParams()
    const query = searchParams.get('query') ?? ''

    const filteredData: ProductType[] = query
        ? productData.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.type.toLowerCase().includes(query.toLowerCase())
        )
        : productData

    const pageCount = Math.ceil(filteredData.length / productsPerPage);
    if (pageCount === 0 && currentPage !== 0) {
        setCurrentPage(0);
    }
    const currentProducts = filteredData.slice(offset, offset + productsPerPage);

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
                <Breadcrumb heading='Buscar' subHeading='Buscar' />
            </div>
            <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
                <div className="container">
                    <div className="heading flex flex-col items-center">
                        {query ? (
                            <div className="heading4 text-center">{filteredData.length} resultados para {String.raw`"`}{query}{String.raw`"`}</div>
                        ) : (
                            <div className="heading4 text-center">Buscar productos</div>
                        )}
                        <div className="input-block lg:w-1/2 sm:w-3/5 w-full md:h-[52px] h-[44px] sm:mt-8 mt-5">
                            <div className='w-full h-full relative'>
                                <input
                                    type="text"
                                    placeholder='Buscar...'
                                    className='caption1 w-full h-full pl-4 md:pr-[150px] pr-32 rounded-xl border border-line'
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)}
                                />
                                <button
                                    className='button-main absolute top-1 bottom-1 right-1 flex items-center justify-center'
                                    onClick={() => handleSearch(searchKeyword)}
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="list-product-block relative md:pt-10 pt-6">
                        <div className={`list-product hide-product-sold grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-[30px] gap-[20px] mt-5`}>
                            {currentProducts.length === 0 ? (
                                <div className="no-data-product">No hay productos que coincidan con la búsqueda.</div>
                            ) : (
                                currentProducts.map((item) => (
                                    <Product key={item.id} data={item} />
                                ))
                            )}
                        </div>

                        {pageCount > 1 && (
                            <div className="list-pagination flex items-center justify-center md:mt-10 mt-7">
                                <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Buscar
