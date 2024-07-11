import Image from 'next/image'
import React from 'react'
export default function
    () {
    return (
        <footer className='hidden laptop:block ml-auto w-full mr-auto footer bg-[#E3FAF8] sticky '>
            <div className='w-full h-fit flex pt-[3em] pb-[2em] container'>
                <div className='flex-col w-1/3 space-y-2'>
                    <div className='font-bold text-[14px]'>Tổng công ty viện thông MobiFone</div>
                    <div className=' text-[12px]'>Địa chỉ: Tòa nhà MobiFone - Lô VP1, Phường Yên Hòa, Quận Cầu Giấy, Thành phố Hà Nội.</div>
                    <div className='text-[12px]'>Mã số doanh nghiệp: 0100686209, đăng ký lần đầu ngày 20/9/2010, đăng ký thay đổi lần thứ 9 ngày 27/7/2018, cấp bởi Sở KHĐT thành phố Hà Nội.</div>
                    <div className='text-[12px]'>Tổng đài hỗ trợ: 0931.000.666 (Trong giờ hành chính) hoặc 9394 (24/7)</div>
                    <div className='mt-2'>
                        <Image src={"/img_registered_ministry_trade.png"} alt='Bộ công thương' width={112} height={42} />
                    </div>
                </div>

                <div className='w-1/6 flex-col space-y-4 pl-[40px] pr-[12px]'>
                    <div className="flex-col space-y-1">
                        <div className='font-bold text-[14px] mb-3'>Giới thiệu</div>
                        <div className='text-[12px] cursor-pointer hover:text-pinksaymee'>Giới thiệu Saymee</div>
                        <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Tuyển dụng</div>
                    </div>
                    <div className="flex-col space-y-1">
                        <div className='font-bold text-[14px] mb-3'>Dịch vụ di dộng</div>
                        <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Mua SIM Saymee</div>
                        <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Gói cước Saymee</div>
                        <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Gói dịch vụ Saymee</div>

                    </div>
                </div>

                <div className="w-1/6 flex-col space-y-1 pr-[40px]">
                    <div className='font-bold text-[14px] mb-3'>Điều khoản & Bảo mật</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Điều khoản sử dụng</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Điều khoản và Điều kiện giao dịch</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Bảo mật thông tin</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Chính sách bảo vệ dữ liệu cá nhân</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Bảo mật thanh toán</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Chính sách giao hàng</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Chính sách thanh toán và hoàn tiền</div>
                    <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Phân định trách nhiệm của thương nhân, tổ chức cung ứng dịch vụ logistics về cung cấp chứng từ hàng hoá trong quá trình giao nhận</div>

                </div>
                <div className="flex-col w-1/6 space-y-4">
                    <div className="flex-col space-y-1">
                        <div className="font-bold text-[14px] mb-3">Hỗ trợ khách hàng</div>
                        <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Câu hỏi thường gặp</div>
                        <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Liên hệ Hotline</div>
                        <div className="text-[12px] cursor-pointer hover:text-pinksaymee">Gợi ý cho Saymee</div>
                    </div>
                    <div className="">
                        <div className='font-bold text-[14px] mb-3'>Kết nối với Saymee</div>
                        <div className='flex space-x-3'>
                            <Image src={"/icons/ic_instagram.svg"} alt='instagram' width={24} height={24} />
                            <Image src={"/icons/ic_facebook.svg"} alt='facebook' width={24} height={24} />
                            <Image src={"/icons/ic_tiktok.svg"} alt='tiktok' width={24} height={24} />
                        </div>
                    </div>

                </div>
                <div className="flex-col w-1/6 space-y-4">
                    <div className='font-bold text-[14px] mb-3 rounded-lg'>Tải ngay app Saymee</div>
                    <div className='flex space-x-1'>
                        <img src='/saymee_qr.png' className='w-[41.6%]'></img>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <img src='/google-play-badge.png'></img>
                            </div>
                            <div>
                                <img src='/app-store-apple-logo.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[50px] bg-pinksaymee flex items-center justify-center space-x-2'>
                <div>
                    <img src='/icons/ic_copyright.svg'></img>
                </div>
                <div className='text-[12px] hover:text-black text-white'>2022 - Bản quyền thuộc về Tổng công ty Viễn thông MobiFone</div>
            </div>
        </footer>
    )
}
