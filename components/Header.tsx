import Image from 'next/image'
import React from 'react'
import Button from './ui/SaymeeButton'
import Link from 'next/link'
import Dropdown from './ui/Dropdown'
import { ProductDropDownItems } from '@/models/ProductDropdownList'
import { UtilityDropDownItems } from '@/models/UtilityDropDownList'
import CartDropdown from './ui/CartDropdown'

export default function Header() {

  const arrNavItemLinks = ["Why Saymee?", "Sản phẩm", "Tiện ích", "Saymee Loyalty", "Hỗ trợ", "Tin tức", "Danh sách cửa hàng"]

  return (
    <header className='bg-white sticky top-0 min-[995px]:h-[80px] h-[60px] w-full shadow-md z-50'>
      <div className='w-full h-full pl-[50px] pr-[50px] flex items-center justify-between'>
        <div className='w-1/3 laptop:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>

        <div className='items-center h-full hidden min-[995px]:flex'>
          <Link href={'/'}>
            <Image src='/icons/ic_logo_saymee.svg' alt='logo' width={48} height={48} className='h-[48px] max-w-[48px]' />
          </Link>
          {
            arrNavItemLinks.map((item, index) => {
              return (
                <div key={index} className={`h-full flex items-center nav${index} group`}>
                  <a className="pl-[12px] pr-[12px] text-textslate text-[14px] font-medium cursor-pointer hover:text-pinksaymee">{item}</a>
                  {item === 'Sản phẩm' && <Dropdown className={"group-hover:visible"} items={ProductDropDownItems} />}
                  {item === 'Tiện ích' && <Dropdown className={"group-hover:visible"} items={UtilityDropDownItems} />}

                </div>
              )
            })
          }
        </div>

        <Image src='/icons/ic_logo_saymee.svg' alt='logo' width={48} height={48} className='h-[48px] max-w-[48px] laptop:hidden w-1/3' />


        <div className='flex items-center h-full w-1/3 laptop:w-auto justify-end'>
          <Link className='min-[995px]:block hidden' href='/'>
            <Image src='/anh_tai.png' alt='anh_tai' height={45} width={163} />
          </Link>
          <div className='relative group'>
            <div className='cart w-[50px] h-full pl-[20px] flex items-center cursor-pointer'>
              <Image src={"/cart.png"} alt='cart' width={30} height={30} quality={100} />
            </div>
            <CartDropdown />
          </div>
          <div className='order w-[35px] h-full mr-0 min-[995px]:mr-[20px] ml-[20px] flex items-center cursor-pointer'>
            <Image className='h-[35px] w-[35px]' src={"/truck.png"} alt='order' width={35} height={35} quality={100} />
          </div>
          <div className="min-[995px]:block hidden">
            <Button title={'Đăng nhập'} height={'40px'} width={'136px'} />
          </div>
        </div>
      </div>
    </header>

  )
}
