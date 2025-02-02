import { Col, Row } from "antd";
import Button from "components/Button";
import CardContainer from "components/CardContainer";
import { LuArrowUp, LuPlus } from "react-icons/lu";
import NVDALogo from "assets/icons/NVDA.png"
import PaypalLogo from "assets/icons/Paypal.webp"
import AlibabaLogo from "assets/icons/Alibaba.jpg"
import TeslaLogo from "assets/icons/Tesla.jpg"
import Structure from "./components/Structure";
import TableWrapper from "components/TableWrapper";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import StockChart from "./components/StockChart";

const Dashboard = () => {
    return (<>
        <div className="w-full flex items-center justify-between p-4 h-[75px] border-b border-secBg bg-primBg">
            <h1 className="text-[22px] text-primText font-[500]">Overview</h1>
            <Button><LuPlus className="text-xl" /> Add new asset</Button>
        </div>

        <div className="p-4 space-y-4">
            <Row className="overflow-scroll no-scrollbar" wrap={false} gutter={20}>
                {[
                    {
                        title: "Current Balance",
                        amount: "$31,900.50",
                        trend: <><LuArrowUp />15%</>,
                        trendText: "vs last month"
                    },
                    {
                        title: "Daily Change",
                        amount: "$1,200.20",
                        trend: <><LuArrowUp />3.2%</>,
                        trendText: "in last 24h"
                    },
                    {
                        title: "Total Profit/Loss",
                        amount: "$10,327.11",
                        trend: <><LuArrowUp />30%</>,
                        trendText: "vs last month"
                    },
                    {
                        title: "Best Asset",
                        amount: <><img src={NVDALogo} className="w-[30px] mr-1" alt="NVDA Logo" /><span className="text-[14px]"> $NVDA</span></>,
                        trend: <><LuPlus />$4,775.10</>,
                        trendText: "total profit"
                    },
                ].map((obj, idx) =>
                    <Col xs={18} xl={6} key={idx}>
                        <CardContainer>
                            <h6 className="mb-2 text-primText/80 text-[14px] font-[400]">{obj.title}</h6>
                            <p className="flex items-center mb-1 font-[400] text-primText text-[24px]">{obj.amount}</p>
                            <div className="flex space-x-2 items-start">
                                <div className="flex items-center bg-greenBg/[.05] text-greenBg text-[12px] px-3 py-1 rounded">{obj.trend}</div>
                                <span className="text-primText/80 text-[14px] font-[400]">{obj.trendText}</span>
                            </div>
                        </CardContainer>
                    </Col>)}
            </Row>

            <Row gutter={20}>
                <Col className="mb-5" xs={24} xl={18}>
                    <CardContainer className="h-full">
                        <StockChart />
                    </CardContainer>
                </Col>

                <Col className="mb-5" xs={24} xl={6}>
                    <CardContainer>
                        <Structure />
                    </CardContainer>
                </Col>

                <Col className="mb-5" span={24}>
                    <CardContainer className="!px-3">
                        <TableWrapper>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Asset Name</th>
                                        <th>Price</th>
                                        <th>Shares</th>
                                        <th>Avg. buy price</th>
                                        <th>Value</th>
                                        <th>Daily change</th>
                                        <th>% of portfolio</th>
                                        <th>Total profit/loss</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {portfolio.map((obj, idx) =>
                                        <tr key={idx}>
                                            <td>
                                                <div className="flex items-center space-x-2">
                                                    <div
                                                        className="w-[38px] h-[38px] rounded-[6px]"
                                                        style={{
                                                            backgroundPosition: "center",
                                                            backgroundSize: "cover",
                                                            backgroundImage: `url(${obj.logo})`
                                                        }} />
                                                    <div>
                                                        <p>{obj.assetName}</p>
                                                        <p className="uppercase text-mutedText text-[12px]">{obj.abbv}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>${obj.price}</td>
                                            <td>${obj.shares}</td>
                                            <td>${obj.avgBuyPrice}</td>
                                            <td>${obj.value}</td>
                                            <td>
                                                <div className="flex items-center space-x-2">
                                                    <span
                                                        className={`animate-pulse flex items-center px-[7px] py-[2px] rounded ${obj.dailyChange > 0 ? "text-greenBg bg-greenBg/[.1]" : "text-redBg bg-redBg/[.1]"}`}>
                                                        <span className="mr-[2px] text-lg">{obj.dailyChange > 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}</span>
                                                        {obj.dailyChange}%
                                                    </span>
                                                    <span className={`${obj.dailyChange > 0 ? "text-greenBg" : "text-redBg"}`}>
                                                        ${obj.dailyChangeAmount}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>{obj.portfolioPercentage}</td>
                                            <td>
                                                <div className="flex items-center space-x-2">
                                                    <span
                                                        className={`animate-pulse flex items-center px-[7px] py-[2px] rounded ${obj.totalProfitLoss > 0 ? "text-greenBg bg-greenBg/[.1]" : "text-redBg bg-redBg/[.1]"}`}>
                                                        <span className="mr-[2px] text-lg">{obj.totalProfitLoss > 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}</span>
                                                        {obj.totalProfitLoss}%
                                                    </span>
                                                    <span className={`${obj.totalProfitLoss > 0 ? "text-greenBg" : "text-redBg"}`}>
                                                        ${obj.profitLossValue}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </TableWrapper>
                    </CardContainer>
                </Col>
            </Row>
        </div>
    </>);
}

export default Dashboard;

const portfolio = [
    {
        logo: TeslaLogo,
        assetName: "Tesla, Inc.",
        abbv: "TSLA",
        price: 180.05,
        shares: 23,
        avgBuyPrice: 172.52,
        value: 3942.94,
        dailyChange: 2,
        dailyChangeAmount: 210.23,
        portfolioPercentage: "25.02%",
        totalProfitLoss: 30,
        profitLossValue: 3967.96
    },
    {
        logo: AlibabaLogo,
        assetName: "Alibaba group holding limited",
        abbv: "BABA",
        price: 88.54,
        shares: 15,
        avgBuyPrice: 200,
        value: 4212.22,
        dailyChange: -2,
        dailyChangeAmount: 62.21,
        portfolioPercentage: "15.02%",
        totalProfitLoss: -2,
        profitLossValue: -2262.21
    },
    {
        logo: PaypalLogo,
        assetName: "Paypal holdings, Inc.",
        abbv: "PYPL",
        price: 87.32,
        shares: 100,
        avgBuyPrice: 50,
        value: 8732,
        dailyChange: 10,
        dailyChangeAmount: 732,
        portfolioPercentage: "12.56%",
        totalProfitLoss: 37,
        profitLossValue: 42.15
    },
    {
        logo: NVDALogo,
        assetName: "NVIDIA corporation",
        abbv: "NVDA",
        price: 144.47,
        shares: 1,
        avgBuyPrice: 122.42,
        value: 144.47,
        dailyChange: 5,
        dailyChangeAmount: 23.33,
        portfolioPercentage: "5.02%",
        totalProfitLoss: 24,
        profitLossValue: 22.92
    }
];