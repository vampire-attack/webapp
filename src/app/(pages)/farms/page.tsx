
import NavBar from "@/app/shared-components/NavBar";
import uniswapLogo from "@/assets/img/uniswap-logo.png";
import oneInchLogo from "@/assets/img/1Inch-logo.png";
import sushiswapLogo from "@/assets/img/sushiswap-logo.png";
import curveLogo from "@/assets/img/curve-logo.png";
import CountDown from "@/components/CountDown";
import { Grid, Group, Title } from "@mantine/core";
import Image from 'next/image';
import PoolTable from "@/components/PoolTable";
import { farmsConfig } from "@/data/farmsConfig";

export default async function Pools() {

    return (
        <>
            <NavBar />
            <div className="w-full sm:w-3/5 md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto px-2">
                <Image src={uniswapLogo} alt="Uniswap Logo" className="mx-auto" width={150} height={150}></Image>
                <Title order={4} lts="5px" className="text-white uppercase text-center my-5">we are coming for you</Title>
                <CountDown targetDate={farmsConfig.targetDate} />
                <Title order={3} className="text-white mx-auto my-10 font-semibold">
                    Pools
                </Title>
                <PoolTable data={farmsConfig.tableData} />
                <Title order={4} lts="5px" className="text-white uppercase text-center mt-10">you are next</Title>
                <Group className="flex items-center justify-center my-10">
                    <Image className="mx-4" width={150} src={oneInchLogo} sizes="(max-width: 576px) 75px, (max-width: 768px) 100px, (max-width: 1200px) 150px, 150px" alt="1Inch Logo"></Image>
                    <Image className="mx-4" width={150} src={sushiswapLogo} sizes="(max-width: 576px) 75px, (max-width: 768px) 100px, (max-width: 1200px) 150px, 150px" alt="Sushiswap Logo"></Image>
                    <Image className="mx-4" width={150} src={curveLogo} sizes="(max-width: 576px) 75px, (max-width: 768px) 100px, (max-width: 1200px) 150px, 150px" alt="Curve Logo"></Image>
                </Group>
            </div>
        </>
    )
} 