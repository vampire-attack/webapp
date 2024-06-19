"use client";
import Image from 'next/image';
import { Text } from '@mantine/core';
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })
interface PoolTableProps {
    data: {
        image1: string;
        image2: string;
        name: string;
        apy: string,
        liquidity: string
    }[]
}

const PoolTable: React.FC<PoolTableProps> = ({ data }) => {
    const rows = data.map((element, index) => (
        <tr className="bg-vampire-light text-white bottom-border">
            <td scope="row" className="px-2 py-4 font-medium text-white whitespace-nowrap">
                {index + 1}
            </td>
            <td className="px-6 py-4 flex items-center">
                <Image src={element.image1} alt={element.name} width={20} height={20} />
                <Image src={element.image2} alt={element.name} width={20} height={20} style={{ marginLeft: "-10px" }} />
                <Text >{element.name}</Text>
            </td>
            <td className="px-6 py-4 text-gray">
                <Text> {element.apy}</Text>
            </td>
            <td className="px-6 py-4 text-gray">
                <Text> {element.liquidity}</Text>
            </td>
        </tr>
    ));

    return (
        <div className="relative overflow-x-auto mx-auto rounded-md bg-vampire-light px-2.5">
            <table className={"table-auto w-full text-sm text-left " + nunito.className} >
                <thead className="text-xs text-white uppercase">
                    <tr className='bottom-border font-light text-d4'>
                        <th scope="col" className="px-2 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Pool
                        </th>
                        <th scope="col" className="px-6 py-3">
                            APY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Liquidity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>

    );
}

export default PoolTable;