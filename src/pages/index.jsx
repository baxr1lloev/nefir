import Link from "next/link";
import Second from "./second";
import Header from "@/Components/header";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Home() {
    return (

        <>
            <div className="w-full   bg-[#1F1720] h-[100vh]">
                <div className="pt-[20px]">
                    <center>
                        <div className="w-[95%]  flex items-center justify-between h-[10%]">
                            <motion.div
                                variants={fadeIn("right", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                className="w-[100px] flex h-full">
                                <Image
                                    src="nifer.svg"
                                    alt="Picture"
                                    width={25}
                                    height={34}
                                />
                                <p className="font-[600] text-[28px] leading-[34px] text-[#FFFFFF] ">Nifter</p>
                            </motion.div>
                            <div className="flex justify-between items-center w-[30%] ">
                                <p className="font-[300] text-[#FFFF] cursor-pointer text-[16px] ">Home</p>
                                <p className="font-[300] text-[#FFFF] cursor-pointer text-[16px]">
                                    <Link href="/second" >Market</Link>
                                </p>
                                <p className="font-[300] text-[#FFFF] cursor-pointer text-[16px]">Discover</p>
                                <p className="font-[300] text-[#FFFF] cursor-pointer text-[16px]">Commonity</p>
                                <p className="font-[300] text-[#FFFF] cursor-pointer text-[16px]">Wallet</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <div className="w-[114px] h-[42px] flex justify-center items-center bg- rounded-[10px] border-2 border-[#FFFFFF] cursor-poiner ">
                                    <p className="text-white">Search</p>
                                </div>
                                <button className="w-[114px] h-[42px] bg-[#901FA3] rounded-[10px] border-1 border-[#FFFFFF] cursor-poiner ">
                                    <p className="font-[300] text-[16px] leading-[20px] text-[#FFFF] ">Explor</p>
                                </button>
                            </div>
                        </div>
                    </center>
                </div>
                <div className="flex justify-center">
                    <div className="w-[85%] flex  h-[92vh]">

                        <motion.div
                            variants={fadeIn("right", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.8 }}
                            className="w-[45%]">
                            <div className=" w-[308px] mt-[140px]">
                                <p className="text-[40px] text-white ">Discover, collect and sell dope NFTs</p>
                                <p className="font-[300] text-[16px] ">
                                    The wold largest digital marketplace for crypto collectibles
                                    and non-fungible tokens (NFTs)
                                </p>
                                <div className="flex pt-[20px] gap-[10px]">
                                    <button className="w-[114px] h-[42px] bg-[#901FA3] rounded-[10px] border-1 border-[#FFFFFF] cursor-poiner ">
                                        <p className="font-[300] text-[16px] leading-[20px] text-[#FFFF] ">Explor</p>
                                    </button>
                                    <div className="w-[114px] h-[42px] flex justify-center items-center bg- rounded-[10px] border-2 border-[#FFFFFF] cursor-poiner ">
                                        <p className="text-white">Search</p>
                                    </div>
                                </div>
                                <div className="pt-[40px]">
                                    <div className="flex w-[116px] gap-[20px] h-[182px] flex-col items-start  ">
                                        <div className="w-full flex flex-col  h-[48px] ">
                                            <div className="w-[15px]  flex pt-[10px] ">
                                                <Image
                                                    src="polygon.svg"
                                                    alt="Picture"
                                                    width={15}
                                                    height={21}
                                                />
                                            </div>
                                            <div className="flex relative top-[-30px]  flex-col pl-[25px] ">
                                                <p className="font-[500] text-[20px] text-[#FFFFFF] ">42k+</p>
                                                <p className="font-[300] text-[13px] text-[gray] ">User Active</p>
                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col  h-[48px]  ">
                                            <div className="w-[15px]  flex pt-[10px] ">
                                                <Image
                                                    src="polygon.svg"
                                                    alt="Picture"
                                                    width={15}
                                                    height={21}
                                                />
                                            </div>
                                            <div className="flex relative top-[-30px]  flex-col pl-[25px] ">
                                                <p className="font-[500] text-[20px] text-[#FFFFFF] ">8k+</p>
                                                <p className="font-[200] text-[13px] text-[gray] ">Artworks</p>
                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col  h-[48px]  ">
                                            <div className="w-[15px]  flex pt-[10px] ">
                                                <Image
                                                    src="polygon.svg"
                                                    alt="Picture"
                                                    width={15}
                                                    height={21}
                                                />
                                            </div>
                                            <div className="flex relative top-[-30px]  flex-col pl-[25px] ">
                                                <p className="font-[500] text-[20px] text-[#FFFFFF] ">2k+</p>
                                                <p className="font-[200] text-[16px] text-[gray] ">Artist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="w-[40%] flex ">
                            <div className="flex justify-end items-end ">
                                <div className="flex flex-col  justify-end items-end ">
                                    <Image
                                        src="rim.svg"
                                        alt="Picture"
                                        width={390}
                                        height={569}
                                    />
                                    <div className="w-[818px]  bg-[red]   "></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>


    );
}








